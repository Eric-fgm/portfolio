import {
  SolidBubble,
  SolidCount,
  SolidCursor,
  SolidMerge,
  SolidQuick,
} from "@/icons";

export interface SortProcess {
  i: number;
  j: number;
  min: number;
  iteration: number;
  mi: number;
  mj: number;
  mk: number;
  left: { value: number; fillStyle: string }[];
  right: { value: number; fillStyle: string }[];
  stack: { x: number; y: number }[];
  count: number[];
  flag: boolean;
  currStack: SortProcess["stack"][number] | null;
}

export interface SortSpecification {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  type: 1 | 2 | 3;
  name: string;
  desc: string;
}

export type SortTypes = typeof sortList[number];

export const sortList = [
  "bubbleSort",
  "selectionSort",
  "mergeSort",
  "quickSort",
  "countingSort",
] as const;

export const sortSpecification: {
  [key in SortTypes]: SortSpecification;
} = {
  bubbleSort: {
    icon: SolidBubble,
    type: 1,
    name: "Bubble Sort",
    desc: "<p>Modi reiciendis illo velit similique blanditiis cumque architecto pariatur, enim fuga molestias repellat ducimus voluptates<br/>Complexity - O(n<sup>2</sup>)<br/>Space - O(1)</p>",
  },
  selectionSort: {
    icon: SolidCursor,
    type: 1,
    name: "Selection Sort",
    desc: "<p>Modi reiciendis illo velit similique blanditiis cumque architecto pariatur, enim fuga molestias repellat ducimus voluptates<br/>Complexity - O(n<sup>2</sup>)<br/>Space - O(1)</p>",
  },
  mergeSort: {
    icon: SolidMerge,
    type: 2,
    name: "Merge Sort",
    desc: "<p>Modi reiciendis illo velit similique blanditiis cumque architecto pariatur, enim fuga molestias repellat ducimus voluptates<br/>Complexity - O(n*log(n))<br/>Space - O(n)</p>",
  },
  quickSort: {
    icon: SolidQuick,
    type: 2,
    name: "Quick Sort",
    desc: "<p>Modi reiciendis illo velit similique blanditiis cumque architecto pariatur, enim fuga molestias repellat ducimus voluptates<br/>Complexity - O(n*log(n))<br/>Space - O(n)</p>",
  },
  countingSort: {
    icon: SolidCount,
    type: 3,
    name: "Counting Sort",
    desc: "<p>Modi reiciendis illo velit similique blanditiis cumque architecto pariatur, enim fuga molestias repellat ducimus voluptates<br/>Complexity - O(n)<br/>Space - O(n)</p>",
  },
};

export const CANVAS_WIDTH = 948;
export const CANVAS_HEIGHT = 543;
export const MAX_SORT_VALUE = 9;

export const initCanvas = (canvas: HTMLCanvasElement) => {
  const scale = window.devicePixelRatio;
  canvas.style.width = CANVAS_WIDTH + "px";
  canvas.style.height = CANVAS_HEIGHT + "px";
  canvas.width = CANVAS_WIDTH * scale;
  canvas.height = CANVAS_HEIGHT * scale;
  canvas.getContext("2d")?.scale(scale, scale);
};

export const parseSpeed = (speed: number[]) =>
  Math.round(1000 / (speed[0] || 1) / 2);

export const defaultSortProcess: SortProcess = {
  i: 0,
  j: 0,
  min: 0,
  iteration: 0,
  mi: 0,
  mj: 0,
  mk: 0,
  left: [],
  right: [],
  stack: [],
  count: [],
  flag: true,
  currStack: null,
};

export const swap = (arr: { value: number }[], left: number, right: number) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

export const merge = (
  arr: { value: number }[],
  l: number,
  m: number,
  r: number
) => {
  const n1 = m - l + 1;
  const n2 = r - m;
  let i, j, k;

  const L = Array(n1).fill(0);
  const R = Array(n2).fill(0);

  for (i = 0; i < n1; i++) L[i] = arr[l + i];
  for (j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  i = 0;
  j = 0;
  k = l;
  while (i < n1 && j < n2) {
    if (L[i].value <= R[j].value) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
};

export const getRandomValue = () =>
  Math.floor(Math.random() * MAX_SORT_VALUE) + 1;

export const limitValue = (value: number) => {
  if (typeof value !== "number") return 350;
  if (isNaN(value)) return 2;
  if (value > 500) return 500;
  if (value < 2) return 2;
  return value;
};
