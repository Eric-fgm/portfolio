import {
  SolidAStar,
  SolidBFS,
  SolidDFS,
  SolidDijkstra,
  SolidGreedyBFS,
} from "@/features/graphAlgorithms/icons";

export interface GraphNode {
  x: number;
  y: number;
  type: "block" | "wall" | "path";
  size: number;
}

export type GraphAlgorithmTypes = (typeof graphAlgorithms)[number]["key"];

export const graphAlgorithms = [
  {
    key: "depthFirstSearch",
    icon: SolidDFS,
    name: "Depth First Search",
  },
  {
    key: "breadthFirstSearch",
    icon: SolidBFS,
    name: "Breadth First Search",
  },
  {
    key: "aStar",
    icon: SolidAStar,
    name: "A* Search",
  },
  {
    key: "greedyBestFirstSearch",
    icon: SolidGreedyBFS,
    name: "Greedy Best First Search",
  },
  {
    key: "dijkstra",
    icon: SolidDijkstra,
    name: "Dijkstra's Algorithm",
  },
] as const;

export const mazePath = [
  [0, 7],
  [0, 22],
  [0, 32],
  [0, 34],
  [1, 0],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 7],
  [1, 9],
  [1, 10],
  [1, 11],
  [1, 12],
  [1, 14],
  [1, 15],
  [1, 16],
  [1, 17],
  [1, 19],
  [1, 20],
  [1, 21],
  [1, 22],
  [1, 23],
  [1, 24],
  [1, 25],
  [1, 26],
  [1, 28],
  [1, 29],
  [1, 30],
  [1, 31],
  [1, 32],
  [1, 34],
  [1, 36],
  [2, 1],
  [2, 7],
  [2, 12],
  [2, 14],
  [2, 19],
  [2, 28],
  [2, 34],
  [2, 36],
  [3, 1],
  [3, 3],
  [3, 4],
  [3, 5],
  [3, 7],
  [3, 8],
  [3, 9],
  [3, 10],
  [3, 11],
  [3, 12],
  [3, 14],
  [3, 15],
  [3, 16],
  [3, 17],
  [3, 18],
  [3, 19],
  [3, 21],
  [3, 23],
  [3, 24],
  [3, 25],
  [3, 26],
  [3, 27],
  [3, 28],
  [3, 30],
  [3, 31],
  [3, 33],
  [3, 34],
  [3, 36],
  [4, 1],
  [4, 3],
  [4, 7],
  [4, 9],
  [4, 21],
  [4, 31],
  [4, 33],
  [4, 36],
  [5, 1],
  [5, 3],
  [5, 5],
  [5, 7],
  [5, 9],
  [5, 13],
  [5, 14],
  [5, 15],
  [5, 16],
  [5, 17],
  [5, 19],
  [5, 20],
  [5, 21],
  [5, 23],
  [5, 25],
  [5, 26],
  [5, 27],
  [5, 28],
  [5, 29],
  [5, 30],
  [5, 31],
  [5, 33],
  [5, 35],
  [5, 36],
  [6, 1],
  [6, 2],
  [6, 3],
  [6, 5],
  [6, 7],
  [6, 9],
  [6, 10],
  [6, 11],
  [6, 13],
  [6, 17],
  [6, 19],
  [6, 21],
  [6, 23],
  [6, 33],
  [6, 35],
  [7, 5],
  [7, 7],
  [7, 10],
  [7, 13],
  [7, 15],
  [7, 17],
  [7, 19],
  [7, 21],
  [7, 23],
  [7, 25],
  [7, 27],
  [7, 29],
  [7, 30],
  [7, 31],
  [7, 33],
  [7, 35],
  [7, 37],
  [8, 0],
  [8, 1],
  [8, 3],
  [8, 4],
  [8, 5],
  [8, 6],
  [8, 7],
  [8, 8],
  [8, 10],
  [8, 13],
  [8, 15],
  [8, 17],
  [8, 19],
  [8, 21],
  [8, 23],
  [8, 25],
  [8, 27],
  [8, 29],
  [8, 31],
  [8, 33],
  [8, 34],
  [8, 35],
  [8, 37],
  [9, 1],
  [9, 3],
  [9, 5],
  [9, 10],
  [9, 12],
  [9, 13],
  [9, 15],
  [9, 17],
  [9, 18],
  [9, 19],
  [9, 21],
  [9, 23],
  [9, 25],
  [9, 27],
  [9, 29],
  [10, 1],
  [10, 3],
  [10, 5],
  [10, 6],
  [10, 7],
  [10, 8],
  [10, 10],
  [10, 15],
  [10, 21],
  [10, 23],
  [10, 25],
  [10, 27],
  [10, 29],
  [10, 31],
  [10, 33],
  [10, 34],
  [10, 35],
  [10, 36],
  [11, 6],
  [11, 8],
  [11, 10],
  [11, 11],
  [11, 12],
  [11, 13],
  [11, 15],
  [11, 17],
  [11, 18],
  [11, 19],
  [11, 20],
  [11, 21],
  [11, 23],
  [11, 25],
  [11, 26],
  [11, 27],
  [11, 28],
  [11, 29],
  [11, 31],
  [11, 36],
  [12, 1],
  [12, 2],
  [12, 3],
  [12, 6],
  [12, 8],
  [12, 10],
  [12, 13],
  [12, 15],
  [12, 17],
  [12, 21],
  [12, 23],
  [12, 31],
  [12, 36],
  [13, 1],
  [13, 5],
  [13, 6],
  [13, 8],
  [13, 10],
  [13, 12],
  [13, 13],
  [13, 15],
  [13, 17],
  [13, 19],
  [13, 20],
  [13, 21],
  [13, 23],
  [13, 25],
  [13, 26],
  [13, 27],
  [13, 28],
  [13, 29],
  [13, 31],
  [13, 33],
  [13, 34],
  [13, 35],
  [13, 36],
  [13, 37],
  [14, 0],
  [14, 1],
  [14, 2],
  [14, 3],
  [14, 8],
  [14, 10],
  [14, 15],
  [14, 21],
  [14, 23],
  [14, 24],
  [14, 25],
  [14, 29],
  [14, 31],
  [14, 33],
  [15, 5],
  [15, 6],
  [15, 8],
  [15, 10],
  [15, 12],
  [15, 13],
  [15, 14],
  [15, 15],
  [15, 17],
  [15, 18],
  [15, 19],
  [15, 27],
  [15, 28],
  [15, 29],
  [15, 31],
  [15, 33],
  [15, 35],
  [15, 36],
  [15, 37],
  [16, 1],
  [16, 2],
  [16, 3],
  [16, 5],
  [16, 8],
  [16, 10],
  [16, 12],
  [16, 19],
  [16, 21],
  [16, 22],
  [16, 23],
  [16, 24],
  [16, 31],
  [16, 33],
  [17, 1],
  [17, 5],
  [17, 7],
  [17, 8],
  [17, 10],
  [17, 12],
  [17, 13],
  [17, 14],
  [17, 15],
  [17, 16],
  [17, 17],
  [17, 19],
  [17, 21],
  [17, 26],
  [17, 27],
  [17, 28],
  [17, 29],
  [17, 30],
  [17, 31],
  [17, 33],
  [17, 35],
  [17, 36],
  [17, 37],
  [18, 1],
  [18, 3],
  [18, 4],
  [18, 5],
  [18, 7],
  [18, 10],
  [18, 17],
  [18, 19],
  [18, 21],
  [18, 23],
  [18, 29],
  [18, 31],
  [19, 1],
  [19, 7],
  [19, 9],
  [19, 10],
  [19, 12],
  [19, 13],
  [19, 14],
  [19, 15],
  [19, 17],
  [19, 19],
  [19, 21],
  [19, 23],
  [19, 25],
  [19, 26],
  [19, 27],
  [19, 29],
  [19, 36],
  [19, 37],
  [20, 0],
  [20, 1],
  [20, 3],
  [20, 4],
  [20, 5],
  [20, 6],
  [20, 7],
  [20, 9],
  [20, 15],
  [20, 17],
  [20, 19],
  [20, 21],
  [20, 23],
  [20, 25],
  [20, 27],
  [20, 29],
  [20, 31],
  [20, 32],
  [20, 33],
  [20, 34],
  [20, 36],
  [21, 11],
  [21, 13],
  [21, 15],
  [21, 17],
  [21, 21],
  [21, 23],
  [21, 25],
  [21, 27],
  [21, 34],
  [21, 36],
  [22, 0],
  [22, 1],
  [22, 2],
  [22, 3],
  [22, 5],
  [22, 7],
  [22, 8],
  [22, 9],
  [22, 10],
  [22, 11],
  [22, 13],
  [22, 15],
  [22, 17],
  [22, 19],
  [22, 20],
  [22, 21],
  [22, 22],
  [22, 23],
  [22, 24],
  [22, 25],
  [22, 27],
  [22, 28],
  [22, 29],
  [22, 30],
  [22, 31],
  [22, 32],
  [22, 34],
  [22, 36],
  [23, 5],
  [23, 7],
  [23, 13],
  [23, 15],
  [23, 17],
  [23, 34],
];

export const START_ROW = 11;
export const START_COL = 4;
export const END_ROW = START_ROW;
export const END_COL = 33;
export const ROWS_NUM = 24;
export const COLS_NUM = 38;
