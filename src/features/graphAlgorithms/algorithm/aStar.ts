import {
  COLS_NUM,
  END_COL,
  END_ROW,
  GraphNode,
  ROWS_NUM,
  START_COL,
  START_ROW,
} from "@/features/graphAlgorithms/helpers";
import { UseGraphAlgorithmsProps } from "@/features/graphAlgorithms/hooks";

const FIELDS = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function* aStar(disabled: UseGraphAlgorithmsProps["disabled"]) {
  const queue: GraphNode[] = [
    { x: START_COL, y: START_ROW, type: "block", size: 0 },
  ];
  const stack: GraphNode[] = [
    { x: START_COL, y: START_ROW, type: "block", size: 0 },
  ];
  const metadata: {
    parent: [number, number] | null;
    visited: boolean;
    h: number;
    f: number;
    g: number;
  }[][] = [...Array(COLS_NUM)].map(() =>
    [...Array(ROWS_NUM)].map(() => ({
      parent: null,
      visited: false,
      h: 0,
      f: 0,
      g: 0,
    }))
  );
  const path: GraphNode[] = [];
  Object.values(disabled).forEach(
    ({ x, y }) => (metadata[x][y].visited = true)
  );

  while (stack.length) {
    let lowestIndex = 0;
    for (let i = 0; i < stack.length; i++) {
      if (
        metadata[stack[i].x][stack[i].y].f <
        metadata[stack[lowestIndex].x][stack[lowestIndex].y].f
      ) {
        lowestIndex = i;
      }
    }
    const vertex = stack[lowestIndex];
    if (vertex.x === END_COL && vertex.y === END_ROW) {
      let temp = { x: vertex.x, y: vertex.y, size: 0, type: "path" as const };
      path.push(temp);
      while (!!metadata[temp.x][temp.y].parent) {
        const [parentX, parentY] = metadata[temp.x][temp.y].parent!;
        path.push({ x: parentX, y: parentY, type: "path", size: 0 });
        temp = { x: parentX, y: parentY, size: 0, type: "path" };
      }
      path.reverse();
      break;
    }

    stack.splice(lowestIndex, 1);
    metadata[vertex.x][vertex.y].visited = true;

    FIELDS.forEach(([offsetY, offsetX]) => {
      const x = vertex.x + offsetX;
      const y = vertex.y + offsetY;
      if (x < 0 || x >= COLS_NUM || y < 0 || y >= ROWS_NUM) return;
      if (metadata[x][y].visited) return;
      const neighbour = metadata[x][y];
      const possibleG = metadata[vertex.x][vertex.y].g + 1;
      if (!stack.find(({ x: fx, y: fy }) => x === fx && y === fy)) {
        stack.push({ x, y, type: "block", size: 0 });
        queue.push({ x, y, type: "block", size: 0 });
      } else if (possibleG >= neighbour.g) {
        return;
      }
      neighbour.g = possibleG;
      neighbour.h = manhattenDistance(x, y);
      neighbour.f = neighbour.g + neighbour.h;
      neighbour.parent = [vertex.x, vertex.y];
    });
  }

  for (let i = 1; i <= queue.length; i++) {
    yield { queue: queue.slice(0, i), path: [] };
  }
  for (let i = 1; i <= path.length; i++) {
    yield { queue, path: path.slice(0, i) };
  }
  return { queue, path };
}

function manhattenDistance(x: number, y: number) {
  let d1 = Math.abs(END_COL - x);
  let d2 = Math.abs(END_ROW - y);

  return d1 + d2;
}

export default aStar;
