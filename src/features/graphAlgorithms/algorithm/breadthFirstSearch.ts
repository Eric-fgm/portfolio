import {
  COLS_NUM,
  END_COL,
  END_ROW,
  GraphPathNode,
  ROWS_NUM,
  START_COl,
  START_ROW,
} from "../helpers";
import { UseGraphAlgorithmsProps } from "../hooks";

const FIELDS = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function* breadthFirstSearch(disabled: UseGraphAlgorithmsProps["disabled"]) {
  const queue: GraphPathNode[] = [{ x: START_ROW, y: START_COl }];
  const stack: GraphPathNode[] = [{ x: START_ROW, y: START_COl }];
  const visited: Record<any, boolean> = { [`${START_ROW}.${START_COl}`]: true };
  const parent: Record<any, GraphPathNode> = {};
  const path: GraphPathNode[] = [];
  Object.values(disabled).forEach(({ x, y }) => (visited[`${x}.${y}`] = true));

  while (stack.length) {
    const vertex = stack.shift()!;

    if (vertex.x === END_ROW && vertex.y === END_COL) {
      let currParent = vertex;
      while (currParent) {
        path.push(currParent);
        currParent = parent[`${currParent.x}.${currParent.y}`];
      }
      break;
    }

    for (let i = 0; i < FIELDS.length; i++) {
      const x = vertex.x + FIELDS[i][0];
      const y = vertex.y + FIELDS[i][1];
      if (x < 0 || x >= ROWS_NUM || y < 0 || y >= COLS_NUM) continue;
      if (!visited[`${x}.${y}`]) {
        parent[`${x}.${y}`] = vertex;
        visited[`${x}.${y}`] = true;
        stack.push({ x, y });
        queue.push({ x, y });
      }
    }
  }

  for (let i = 1; i <= queue.length; i++) {
    yield queue.slice(0, i);
  }
  return path;
}

export default breadthFirstSearch;
