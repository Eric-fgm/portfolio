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

function* depthFirstSearch(disabled: UseGraphAlgorithmsProps["disabled"]) {
  const queue: GraphPathNode[] = [];
  const visited: Record<any, boolean> = {};
  const parent: Record<any, GraphPathNode> = {};
  Object.values(disabled).forEach(({ x, y }) => (visited[`${x}.${y}`] = true));
  const path = depthFirstSearchRecursion(queue, visited, parent);
  for (let i = 1; i <= queue.length; i++) {
    yield queue.slice(0, i);
  }
  return path;
}

function depthFirstSearchRecursion(
  queue: GraphPathNode[],
  visited: Record<any, boolean>,
  parent: Record<any, GraphPathNode>,
  vertex = { x: START_ROW, y: START_COl }
): GraphPathNode[] {
  queue.push(vertex);
  if (vertex.x === END_ROW && vertex.y === END_COL) {
    const path: GraphPathNode[] = [];
    let currParent = vertex;
    while (currParent) {
      path.push(currParent);
      currParent = parent[`${currParent.x}.${currParent.y}`];
    }
    return path;
  }
  visited[`${vertex.x}.${vertex.y}`] = true;
  for (let i = 0; i < FIELDS.length; i++) {
    const x = vertex.x + FIELDS[i][0];
    const y = vertex.y + FIELDS[i][1];
    if (x < 0 || x >= ROWS_NUM || y < 0 || y >= COLS_NUM) continue;
    const notVisited = !visited[`${x}.${y}`];
    if (notVisited) {
      parent[`${x}.${y}`] = vertex;
      const path = depthFirstSearchRecursion(queue, visited, parent, { x, y });
      if (path.length) return path;
    }
  }
  return [];
}

export default depthFirstSearch;
