"use client";

import { Mafs, Coordinates, Plot } from "mafs";
import "mafs/core.css";
import { useCallback, useMemo } from "react";
import { createMatrix } from "@/features/mathsAlgorithms/helpers";
import useMathsSettings from "@/features/mathsAlgorithms/hooks/useMathsSettings";

interface MathsVisualizerProps {}

const MathsVisualizer: React.FC<MathsVisualizerProps> = () => {
  const { points, algorithms, equation } = useMathsSettings();

  const lagrangeMatrixInterpolated = useMemo(() => {
    const n = points.length;
    const F: number[][] = [];
    const B: number[][] = [];

    for (let i = 0; i < n; i++) {
      const { x, y } = points[i];
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push(Math.pow(x, j));
      }
      F[i] = [y];
      B.push(row);
    }

    const A = createMatrix(B, F).gauss();

    return (x: number) => {
      let sum = 0;
      for (let i = 0; i < n; i++) {
        sum += A[i] * Math.pow(x, i);
      }
      return sum;
    };
  }, [points]);

  const splineInterpolation = useMemo(() => {
    const delta = (i: number) => {
      const point = points[i];
      const nextPoint = points[i + 1];
      return (nextPoint.y - point.y) / (nextPoint.x - point.x);
    };

    const n = points.length;
    const B = [];

    const firstRow = new Array(n).fill(0);
    firstRow[1] = points[1].x - points[0].x;
    firstRow[0] = -firstRow[1];
    B.push(firstRow);

    for (let i = 0; i < n - 2; i++) {
      const hi = points[i + 1].x - points[i].x;
      const hii = points[i + 2].x - points[i + 1].x;
      const row = [];
      for (let j = 0; j < n; j++) {
        if (j === i) row.push(hi);
        else if (j === i + 1) row.push(2 * (hi + hii));
        else if (j === i + 2) row.push(hii);
        else row.push(0);
      }
      B.push(row);
    }

    const lastRow = new Array(n).fill(0);
    lastRow[n - 2] = points[n - 1].x - points[n - 2].x;
    lastRow[n - 1] = -lastRow[n - 2];
    B.push(lastRow);

    const F = [[Math.pow(points[1].x - points[0].x, 2) * delta(0)]];

    for (let i = 0; i < n - 2; i++) {
      F.push([delta(i + 1) - delta(i)]);
    }

    F.push([-Math.pow(points[n - 1].x - points[n - 2].x, 2) * delta(n - 2)]);

    const A = createMatrix(B, F).gauss();

    return (x: number) => {
      for (let i = 0; i < n - 1; i++) {
        const point = points[i];
        const nextPoint = points[i + 1];
        if (x >= point.x && x <= nextPoint.x) {
          const hi = nextPoint.x - point.x;
          return (
            (A[i] / hi) * Math.pow(nextPoint.x - x, 3) +
            (A[i + 1] / hi) * Math.pow(x - point.x, 3) +
            (nextPoint.y / hi - A[i + 1] * hi) * (x - point.x) +
            (point.y / hi - A[i] * hi) * (nextPoint.x - x)
          );
        }
      }
      return NaN;
    };
  }, [points]);

  const lagrangeInterpolation = useCallback(
    (x: number) => {
      // if (x0 < -12 || x0 > 12) return;

      const n = points.length;
      let value = 0;

      for (let i = 0; i < n; i++) {
        const point = points[i];
        let multiplier = point.y;

        for (let j = 0; j < n; j++) {
          if (i === j) continue;
          const innerPoint = points[j];
          multiplier *= (x - innerPoint.x) / (point.x - innerPoint.x);
        }
        value += multiplier;
      }

      return value;
    },
    [points]
  );

  const chebyshevInterpolation = useMemo(() => {
    // const Tn = (x: number, n: number): number => {
    //   if (n === 0) return 1;
    //   if (n === 1) return x;
    //   return 2 * x * Tn(x, n - 1) - 2 * x * Tn(x, n - 2);
    // };
    const a = Math.min(...points.map(({ x }) => x));
    const b = Math.max(...points.map(({ x }) => x));

    const n = points.length;
    const chebyshevNodes: { x: number; y: number }[] = [];

    for (let i = 0; i < n; i++) {
      const t = Math.cos(((2 * i + 1) / n) * (Math.PI / 2));
      const x = ((a - b) / 2) * t + (a + b) / 2;
      chebyshevNodes.push({ x, y: equation.f(x) });
    }

    return (x: number) => {
      let value = 0;

      for (let i = 0; i < n; i++) {
        const node = chebyshevNodes[i];
        let multiplier = node.y;

        for (let j = 0; j < n; j++) {
          if (i === j) continue;
          const innerNode = chebyshevNodes[j];
          multiplier *= (x - innerNode.x) / (node.x - innerNode.x);
        }
        value += multiplier;
      }

      return value;
    };
  }, [points, equation]);

  return (
    <div className="rounded-2xl overflow-hidden">
      <Mafs zoom={{ min: 0.5, max: 4 }} viewBox={{ x: [-12, 12] }}>
        <Coordinates.Cartesian subdivisions={10} />
        <Plot.OfX y={equation.f} />
        {algorithms.map((algorithm) => {
          const { equation, color } = {
            lagrange: { equation: lagrangeInterpolation, color: "#48d08f" },
            "lagrange-matrix": {
              equation: lagrangeMatrixInterpolated,
              color: "#48b8d0",
            },
            spline: { equation: splineInterpolation, color: "#c54f6b" },
            chebyshev: { equation: chebyshevInterpolation, color: "#fad75b" },
          }[algorithm];

          return <Plot.OfX key={algorithm} y={equation} color={color} />;
        })}
      </Mafs>
    </div>
  );
};

export default MathsVisualizer;
