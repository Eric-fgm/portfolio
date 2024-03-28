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

function* depthFirstSearch(disabled: UseGraphAlgorithmsProps["disabled"]) {
  const queue: GraphNode[] = [];
  const visited: Record<any, boolean> = {};
  const parent: Record<any, GraphNode> = {};
  Object.values(disabled).forEach(({ x, y }) => (visited[`${x}.${y}`] = true));
  const path = depthFirstSearchRecursion(queue, visited, parent);
  for (let i = 1; i <= queue.length; i++) {
    yield { queue: queue.slice(0, i), path: [] };
  }
  for (let i = 1; i <= path.length; i++) {
    yield { queue, path: path.slice(0, i) };
  }
  return { queue, path };
}

function depthFirstSearchRecursion(
  queue: GraphNode[],
  visited: Record<any, boolean>,
  parent: Record<any, GraphNode>,
  vertex = {
    x: START_COL,
    y: START_ROW,
    size: 0,
    type: "block" as GraphNode["type"],
  },
): GraphNode[] {
  queue.push(vertex);
  if (vertex.x === END_COL && vertex.y === END_ROW) {
    const path: GraphNode[] = [];
    let currParent = vertex;
    while (currParent) {
      path.push({ ...currParent, type: "path", size: 0 });
      currParent = parent[`${currParent.x}.${currParent.y}`];
    }
    return path.reverse();
  }
  visited[`${vertex.x}.${vertex.y}`] = true;
  for (let i = 0; i < FIELDS.length; i++) {
    const x = vertex.x + FIELDS[i][1];
    const y = vertex.y + FIELDS[i][0];
    if (x < 0 || x >= COLS_NUM || y < 0 || y >= ROWS_NUM) continue;
    const notVisited = !visited[`${x}.${y}`];
    if (notVisited) {
      parent[`${x}.${y}`] = vertex;
      const path = depthFirstSearchRecursion(queue, visited, parent, {
        x,
        y,
        type: "block",
        size: 0,
      });
      if (path.length) return path;
    }
  }
  return [];
}

export default depthFirstSearch;
