import { Brackets, Infinity as _Infinity, Merge, Spline } from "lucide-react";

export const icons = {
  lagrange: Spline,
  "lagrange-matrix": Brackets,
  spline: Merge,
  chebyshev: _Infinity,
};

export const createMatrix = (data: number[][], mirrorData?: number[][]) => {
  const n = data.length;
  const m = data[0].length;
  const matrix: number[][] = [];
  let mirror: ReturnType<typeof createMatrix> | null = mirrorData
    ? createMatrix(mirrorData)
    : null;

  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < m; j++) {
      row.push(data[i][j]);
    }
    matrix.push(row);
  }

  const swap = (i: number, j: number) => {
    if (mirror) mirror.swap(i, j);
    const tmp = matrix[i];
    matrix[i] = matrix[j];
    matrix[j] = tmp;
  };

  const multiplyLine = (i: number, value: number) => {
    if (mirror) mirror.multiplyLine(i, value);
    const line = matrix[i];
    for (let k = line.length - 1; k >= 0; k--) {
      line[k] *= value;
    }
  };

  const addLine = (i: number, j: number, value: number) => {
    if (mirror) mirror.addLine(i, j, value);
    const lineI = matrix[i],
      lineJ = matrix[j];
    for (let k = lineI.length - 1; k >= 0; k--) {
      lineI[k] = lineI[k] + value * lineJ[k];
    }
  };

  return {
    get: () => matrix,
    swap,
    multiplyLine,
    addLine,
    gauss: () => {
      let pivot = 0,
        lines = matrix.length,
        columns = matrix[0].length,
        nullLines = [];

      for (let j = 0; j < columns; j++) {
        let maxValue = 0,
          maxLine = 0;
        for (var k = pivot; k < lines; k++) {
          const value = matrix[k][j];
          if (Math.abs(value) > Math.abs(maxValue)) {
            maxLine = k;
            maxValue = value;
          }
        }
        if (maxValue === 0) {
          nullLines.push(pivot);
        } else {
          multiplyLine(maxLine, 1 / maxValue);
          swap(maxLine, pivot);
          for (let i = 0; i < lines; i++) {
            if (i !== pivot) {
              addLine(i, pivot, -matrix[i][j]);
            }
          }
        }
        pivot++;
      }

      return mirror?.get().map(([v]) => v) ?? [];
    },
  };
};
