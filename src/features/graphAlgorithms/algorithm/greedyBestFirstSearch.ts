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

function* greedyBestFirstSearch(disabled: UseGraphAlgorithmsProps["disabled"]) {
  const queue: GraphNode[] = [
    { x: START_COL, y: START_ROW, type: "block", size: 0 },
  ];
  const stack: GraphNode[] = [
    { x: START_COL, y: START_ROW, type: "block", size: 0 },
  ];
  const metadata: {
    parent: [number, number] | null;
    visited: boolean;
    distance: number;
    totalDistance: number;
  }[][] = [...Array(COLS_NUM)].map(() =>
    [...Array(ROWS_NUM)].map(() => ({
      parent: null,
      visited: false,
      distance: 0,
      totalDistance: 0,
    })),
  );
  const path: GraphNode[] = [];
  Object.values(disabled).forEach(
    ({ x, y }) => (metadata[x][y].visited = true),
  );

  while (stack.length) {
    stack.sort(
      (a, b) =>
        metadata[a.x][a.y].totalDistance - metadata[b.x][b.y].totalDistance,
    );
    const closestNode = stack.shift()!;

    if (closestNode.x === END_COL && closestNode.y === END_ROW) {
      let temp = {
        x: closestNode.x,
        y: closestNode.y,
        size: 0,
        type: "path" as const,
      };
      path.push(temp);
      while (!!metadata[temp.x][temp.y].parent) {
        const [parentX, parentY] = metadata[temp.x][temp.y].parent!;
        path.push({ x: parentX, y: parentY, type: "path", size: 0 });
        temp = { x: parentX, y: parentY, size: 0, type: "path" };
      }
      path.reverse();
      break;
    }

    metadata[closestNode.x][closestNode.y].visited = true;

    FIELDS.forEach(([offsetY, offsetX]) => {
      const x = closestNode.x + offsetX;
      const y = closestNode.y + offsetY;
      if (x < 0 || x >= COLS_NUM || y < 0 || y >= ROWS_NUM) return;
      if (metadata[x][y].visited) return;
      const neighbour = metadata[x][y];
      let distance = metadata[closestNode.x][closestNode.y].distance + 1;

      if (!stack.find(({ x: fx, y: fy }) => x === fx && y === fy)) {
        stack.push({ x, y, type: "block", size: 0 });
        queue.push({ x, y, type: "block", size: 0 });
        neighbour.distance = distance;
        neighbour.totalDistance = manhattenDistance(x, y);
        neighbour.parent = [closestNode.x, closestNode.y];
      } else if (distance < neighbour.distance) {
        neighbour.distance = distance;
        neighbour.totalDistance = manhattenDistance(x, y);
        neighbour.parent = [closestNode.x, closestNode.y];
      }
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
  let calcX = Math.abs(x - END_COL);
  let calcY = Math.abs(y - END_ROW);
  return calcX + calcY;
}

export default greedyBestFirstSearch;
