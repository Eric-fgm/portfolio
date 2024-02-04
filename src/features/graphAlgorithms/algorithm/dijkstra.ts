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
  [0, -1],
  [1, 0],
  [-1, 0],
  [0, 1],
];

function* dijkstra(disabled: UseGraphAlgorithmsProps["disabled"]) {
  const queue: GraphNode[] = [
    { x: START_COL, y: START_ROW, type: "block", size: 0 },
  ];
  const stack: { x: number; y: number }[] = [{ x: START_COL, y: START_ROW }];
  const metadata: {
    parent: [number, number] | null;
    visited: boolean;
    distance: number;
    weight: number;
  }[][] = [...Array(COLS_NUM)].map(() =>
    [...Array(ROWS_NUM)].map(() => ({
      parent: null,
      visited: false,
      distance: Infinity,
      weight: 1,
    }))
  );
  const path: GraphNode[] = [];
  Object.values(disabled).forEach(
    ({ x, y }) => (metadata[x][y].visited = true)
  );

  metadata[START_COL][START_ROW].distance = 0;

  while (stack.length) {
    // stack.sort(
    //   (a, b) => metadata[a.x][a.y].distance - metadata[b.x][b.y].distance
    // );
    const currentNode = stack.shift()!;
    const distance = metadata[currentNode.x][currentNode.y].distance;

    if (currentNode.x === END_COL && currentNode.y === END_ROW) {
      let temp = {
        x: currentNode.x,
        y: currentNode.y,
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

    FIELDS.forEach(([offsetY, offsetX]) => {
      const x = currentNode.x + offsetX;
      const y = currentNode.y + offsetY;
      if (x < 0 || x >= COLS_NUM || y < 0 || y >= ROWS_NUM) return;
      if (metadata[x][y].visited) return;
      const neighbour = metadata[x][y];
      const calculateDistance = distance + neighbour.weight;

      if (calculateDistance < neighbour.distance) {
        neighbour.distance = calculateDistance;
        neighbour.parent = [currentNode.x, currentNode.y];
        stack.push({ x, y });
        queue.push({ x, y, type: "block", size: 0 });
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

export default dijkstra;
