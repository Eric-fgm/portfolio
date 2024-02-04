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

function* breadthFirstSearch(disabled: UseGraphAlgorithmsProps["disabled"]) {
  const queue: GraphNode[] = [
    { x: START_COL, y: START_ROW, type: "block", size: 0 },
  ];
  const stack: GraphNode[] = [
    { x: START_COL, y: START_ROW, type: "block", size: 0 },
  ];
  const visited: Record<any, boolean> = { [`${START_COL}.${START_ROW}`]: true };
  const parent: Record<any, GraphNode> = {};
  const path: GraphNode[] = [];
  Object.values(disabled).forEach(({ x, y }) => (visited[`${x}.${y}`] = true));

  while (stack.length) {
    const vertex = stack.shift()!;

    if (vertex.x === END_COL && vertex.y === END_ROW) {
      let currParent = vertex;
      while (currParent) {
        path.push({ ...currParent, type: "path", size: 0 });
        currParent = parent[`${currParent.x}.${currParent.y}`];
      }
      path.reverse();
      break;
    }

    for (let i = 0; i < FIELDS.length; i++) {
      const x = vertex.x + FIELDS[i][1];
      const y = vertex.y + FIELDS[i][0];
      if (x < 0 || x >= COLS_NUM || y < 0 || y >= ROWS_NUM) continue;
      if (!visited[`${x}.${y}`]) {
        parent[`${x}.${y}`] = vertex;
        visited[`${x}.${y}`] = true;
        stack.push({ x, y, type: "block", size: 0 });
        queue.push({ x, y, type: "block", size: 0 });
      }
    }
  }

  for (let i = 1; i <= queue.length; i++) {
    yield { queue: queue.slice(0, i), path: [] };
  }
  for (let i = 1; i <= path.length; i++) {
    yield { queue, path: path.slice(0, i) };
  }
  return { queue, path };
}

export default breadthFirstSearch;
