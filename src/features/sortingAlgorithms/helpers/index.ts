import {
  SolidBubble,
  SolidCount,
  SolidCursor,
  SolidMerge,
  SolidQuick,
} from "@/icons";

export type SortTypes = (typeof sortingAlgorithms)[number]["key"];

export const sortingAlgorithms = [
  { key: "bubbleSort", name: "Bubble Sort", icon: SolidBubble },
  { key: "selectionSort", name: "Selection Sort", icon: SolidCursor },
  { key: "mergeSort", name: "Merge Sort", icon: SolidMerge },
  { key: "quickSort", name: "Quick Sort", icon: SolidQuick },
  { key: "countingSort", name: "Counting Sort", icon: SolidCount },
] as const;

export const CANVAS_WIDTH = 948;
export const CANVAS_HEIGHT = 543;
export const MAX_VALUE = 100;

export const generateRandomValues = (limit: number) =>
  [
    {
      value: 31,
      fillStyle: "#fff",
    },
    {
      value: 12,
      fillStyle: "#fff",
    },
    {
      value: 16,
      fillStyle: "#fff",
    },
    {
      value: 39,
      fillStyle: "#fff",
    },
    {
      value: 94,
      fillStyle: "#fff",
    },
    {
      value: 45,
      fillStyle: "#fff",
    },
    {
      value: 36,
      fillStyle: "#fff",
    },
    {
      value: 36,
      fillStyle: "#fff",
    },
    {
      value: 46,
      fillStyle: "#fff",
    },
    {
      value: 10,
      fillStyle: "#fff",
    },
    {
      value: 28,
      fillStyle: "#fff",
    },
    {
      value: 86,
      fillStyle: "#fff",
    },
    {
      value: 88,
      fillStyle: "#fff",
    },
    {
      value: 41,
      fillStyle: "#fff",
    },
    {
      value: 76,
      fillStyle: "#fff",
    },
    {
      value: 72,
      fillStyle: "#fff",
    },
    {
      value: 48,
      fillStyle: "#fff",
    },
    {
      value: 96,
      fillStyle: "#fff",
    },
    {
      value: 90,
      fillStyle: "#fff",
    },
    {
      value: 53,
      fillStyle: "#fff",
    },
    {
      value: 91,
      fillStyle: "#fff",
    },
    {
      value: 83,
      fillStyle: "#fff",
    },
    {
      value: 63,
      fillStyle: "#fff",
    },
    {
      value: 93,
      fillStyle: "#fff",
    },
    {
      value: 94,
      fillStyle: "#fff",
    },
    {
      value: 25,
      fillStyle: "#fff",
    },
    {
      value: 25,
      fillStyle: "#fff",
    },
    {
      value: 54,
      fillStyle: "#fff",
    },
    {
      value: 45,
      fillStyle: "#fff",
    },
    {
      value: 72,
      fillStyle: "#fff",
    },
    {
      value: 59,
      fillStyle: "#fff",
    },
    {
      value: 85,
      fillStyle: "#fff",
    },
    {
      value: 28,
      fillStyle: "#fff",
    },
    {
      value: 51,
      fillStyle: "#fff",
    },
    {
      value: 12,
      fillStyle: "#fff",
    },
    {
      value: 79,
      fillStyle: "#fff",
    },
    {
      value: 80,
      fillStyle: "#fff",
    },
    {
      value: 12,
      fillStyle: "#fff",
    },
    {
      value: 62,
      fillStyle: "#fff",
    },
    {
      value: 99,
      fillStyle: "#fff",
    },
    {
      value: 68,
      fillStyle: "#fff",
    },
    {
      value: 62,
      fillStyle: "#fff",
    },
    {
      value: 85,
      fillStyle: "#fff",
    },
    {
      value: 18,
      fillStyle: "#fff",
    },
    {
      value: 36,
      fillStyle: "#fff",
    },
    {
      value: 81,
      fillStyle: "#fff",
    },
    {
      value: 60,
      fillStyle: "#fff",
    },
    {
      value: 52,
      fillStyle: "#fff",
    },
    {
      value: 62,
      fillStyle: "#fff",
    },
    {
      value: 70,
      fillStyle: "#fff",
    },
    {
      value: 20,
      fillStyle: "#fff",
    },
    {
      value: 81,
      fillStyle: "#fff",
    },
    {
      value: 81,
      fillStyle: "#fff",
    },
    {
      value: 85,
      fillStyle: "#fff",
    },
    {
      value: 28,
      fillStyle: "#fff",
    },
    {
      value: 89,
      fillStyle: "#fff",
    },
    {
      value: 86,
      fillStyle: "#fff",
    },
    {
      value: 62,
      fillStyle: "#fff",
    },
    {
      value: 81,
      fillStyle: "#fff",
    },
    {
      value: 48,
      fillStyle: "#fff",
    },
    {
      value: 61,
      fillStyle: "#fff",
    },
    {
      value: 65,
      fillStyle: "#fff",
    },
    {
      value: 92,
      fillStyle: "#fff",
    },
    {
      value: 10,
      fillStyle: "#fff",
    },
    {
      value: 59,
      fillStyle: "#fff",
    },
    {
      value: 47,
      fillStyle: "#fff",
    },
    {
      value: 46,
      fillStyle: "#fff",
    },
    {
      value: 32,
      fillStyle: "#fff",
    },
    {
      value: 26,
      fillStyle: "#fff",
    },
    {
      value: 51,
      fillStyle: "#fff",
    },
    {
      value: 24,
      fillStyle: "#fff",
    },
    {
      value: 91,
      fillStyle: "#fff",
    },
    {
      value: 66,
      fillStyle: "#fff",
    },
    {
      value: 66,
      fillStyle: "#fff",
    },
    {
      value: 46,
      fillStyle: "#fff",
    },
    {
      value: 32,
      fillStyle: "#fff",
    },
    {
      value: 19,
      fillStyle: "#fff",
    },
    {
      value: 64,
      fillStyle: "#fff",
    },
    {
      value: 93,
      fillStyle: "#fff",
    },
    {
      value: 51,
      fillStyle: "#fff",
    },
    {
      value: 41,
      fillStyle: "#fff",
    },
    {
      value: 47,
      fillStyle: "#fff",
    },
    {
      value: 72,
      fillStyle: "#fff",
    },
    {
      value: 37,
      fillStyle: "#fff",
    },
    {
      value: 82,
      fillStyle: "#fff",
    },
    {
      value: 34,
      fillStyle: "#fff",
    },
    {
      value: 58,
      fillStyle: "#fff",
    },
    {
      value: 36,
      fillStyle: "#fff",
    },
    {
      value: 67,
      fillStyle: "#fff",
    },
    {
      value: 50,
      fillStyle: "#fff",
    },
    {
      value: 89,
      fillStyle: "#fff",
    },
    {
      value: 47,
      fillStyle: "#fff",
    },
    {
      value: 91,
      fillStyle: "#fff",
    },
    {
      value: 74,
      fillStyle: "#fff",
    },
    {
      value: 65,
      fillStyle: "#fff",
    },
    {
      value: 83,
      fillStyle: "#fff",
    },
    {
      value: 89,
      fillStyle: "#fff",
    },
    {
      value: 52,
      fillStyle: "#fff",
    },
    {
      value: 39,
      fillStyle: "#fff",
    },
    {
      value: 52,
      fillStyle: "#fff",
    },
    {
      value: 54,
      fillStyle: "#fff",
    },
    {
      value: 15,
      fillStyle: "#fff",
    },
    {
      value: 90,
      fillStyle: "#fff",
    },
    {
      value: 28,
      fillStyle: "#fff",
    },
    {
      value: 58,
      fillStyle: "#fff",
    },
    {
      value: 94,
      fillStyle: "#fff",
    },
    {
      value: 65,
      fillStyle: "#fff",
    },
    {
      value: 47,
      fillStyle: "#fff",
    },
    {
      value: 55,
      fillStyle: "#fff",
    },
    {
      value: 74,
      fillStyle: "#fff",
    },
    {
      value: 37,
      fillStyle: "#fff",
    },
    {
      value: 81,
      fillStyle: "#fff",
    },
    {
      value: 40,
      fillStyle: "#fff",
    },
    {
      value: 37,
      fillStyle: "#fff",
    },
    {
      value: 35,
      fillStyle: "#fff",
    },
    {
      value: 51,
      fillStyle: "#fff",
    },
    {
      value: 95,
      fillStyle: "#fff",
    },
    {
      value: 42,
      fillStyle: "#fff",
    },
    {
      value: 38,
      fillStyle: "#fff",
    },
    {
      value: 12,
      fillStyle: "#fff",
    },
    {
      value: 16,
      fillStyle: "#fff",
    },
    {
      value: 91,
      fillStyle: "#fff",
    },
    {
      value: 59,
      fillStyle: "#fff",
    },
    {
      value: 78,
      fillStyle: "#fff",
    },
    {
      value: 24,
      fillStyle: "#fff",
    },
    {
      value: 97,
      fillStyle: "#fff",
    },
    {
      value: 46,
      fillStyle: "#fff",
    },
    {
      value: 74,
      fillStyle: "#fff",
    },
    {
      value: 41,
      fillStyle: "#fff",
    },
    {
      value: 77,
      fillStyle: "#fff",
    },
    {
      value: 75,
      fillStyle: "#fff",
    },
    {
      value: 49,
      fillStyle: "#fff",
    },
    {
      value: 92,
      fillStyle: "#fff",
    },
    {
      value: 89,
      fillStyle: "#fff",
    },
    {
      value: 77,
      fillStyle: "#fff",
    },
    {
      value: 60,
      fillStyle: "#fff",
    },
    {
      value: 71,
      fillStyle: "#fff",
    },
    {
      value: 85,
      fillStyle: "#fff",
    },
    {
      value: 98,
      fillStyle: "#fff",
    },
    {
      value: 53,
      fillStyle: "#fff",
    },
    {
      value: 11,
      fillStyle: "#fff",
    },
    {
      value: 71,
      fillStyle: "#fff",
    },
    {
      value: 63,
      fillStyle: "#fff",
    },
    {
      value: 57,
      fillStyle: "#fff",
    },
    {
      value: 93,
      fillStyle: "#fff",
    },
    {
      value: 19,
      fillStyle: "#fff",
    },
    {
      value: 10,
      fillStyle: "#fff",
    },
    {
      value: 69,
      fillStyle: "#fff",
    },
    {
      value: 45,
      fillStyle: "#fff",
    },
    {
      value: 48,
      fillStyle: "#fff",
    },
    {
      value: 18,
      fillStyle: "#fff",
    },
    {
      value: 13,
      fillStyle: "#fff",
    },
    {
      value: 37,
      fillStyle: "#fff",
    },
    {
      value: 76,
      fillStyle: "#fff",
    },
    {
      value: 37,
      fillStyle: "#fff",
    },
    {
      value: 57,
      fillStyle: "#fff",
    },
    {
      value: 67,
      fillStyle: "#fff",
    },
    {
      value: 73,
      fillStyle: "#fff",
    },
    {
      value: 93,
      fillStyle: "#fff",
    },
    {
      value: 72,
      fillStyle: "#fff",
    },
    {
      value: 11,
      fillStyle: "#fff",
    },
    {
      value: 81,
      fillStyle: "#fff",
    },
    {
      value: 67,
      fillStyle: "#fff",
    },
    {
      value: 51,
      fillStyle: "#fff",
    },
    {
      value: 43,
      fillStyle: "#fff",
    },
    {
      value: 19,
      fillStyle: "#fff",
    },
    {
      value: 91,
      fillStyle: "#fff",
    },
    {
      value: 65,
      fillStyle: "#fff",
    },
    {
      value: 43,
      fillStyle: "#fff",
    },
    {
      value: 77,
      fillStyle: "#fff",
    },
    {
      value: 66,
      fillStyle: "#fff",
    },
    {
      value: 92,
      fillStyle: "#fff",
    },
    {
      value: 90,
      fillStyle: "#fff",
    },
    {
      value: 41,
      fillStyle: "#fff",
    },
    {
      value: 16,
      fillStyle: "#fff",
    },
    {
      value: 86,
      fillStyle: "#fff",
    },
    {
      value: 82,
      fillStyle: "#fff",
    },
    {
      value: 15,
      fillStyle: "#fff",
    },
    {
      value: 60,
      fillStyle: "#fff",
    },
    {
      value: 87,
      fillStyle: "#fff",
    },
    {
      value: 11,
      fillStyle: "#fff",
    },
    {
      value: 28,
      fillStyle: "#fff",
    },
    {
      value: 26,
      fillStyle: "#fff",
    },
    {
      value: 64,
      fillStyle: "#fff",
    },
    {
      value: 55,
      fillStyle: "#fff",
    },
    {
      value: 97,
      fillStyle: "#fff",
    },
    {
      value: 56,
      fillStyle: "#fff",
    },
    {
      value: 46,
      fillStyle: "#fff",
    },
    {
      value: 66,
      fillStyle: "#fff",
    },
    {
      value: 42,
      fillStyle: "#fff",
    },
    {
      value: 40,
      fillStyle: "#fff",
    },
    {
      value: 64,
      fillStyle: "#fff",
    },
    {
      value: 94,
      fillStyle: "#fff",
    },
    {
      value: 90,
      fillStyle: "#fff",
    },
    {
      value: 82,
      fillStyle: "#fff",
    },
    {
      value: 32,
      fillStyle: "#fff",
    },
    {
      value: 70,
      fillStyle: "#fff",
    },
    {
      value: 63,
      fillStyle: "#fff",
    },
    {
      value: 45,
      fillStyle: "#fff",
    },
    {
      value: 50,
      fillStyle: "#fff",
    },
    {
      value: 75,
      fillStyle: "#fff",
    },
    {
      value: 54,
      fillStyle: "#fff",
    },
    {
      value: 36,
      fillStyle: "#fff",
    },
    {
      value: 78,
      fillStyle: "#fff",
    },
    {
      value: 32,
      fillStyle: "#fff",
    },
    {
      value: 92,
      fillStyle: "#fff",
    },
    {
      value: 91,
      fillStyle: "#fff",
    },
    {
      value: 46,
      fillStyle: "#fff",
    },
    {
      value: 71,
      fillStyle: "#fff",
    },
    {
      value: 73,
      fillStyle: "#fff",
    },
    {
      value: 21,
      fillStyle: "#fff",
    },
    {
      value: 56,
      fillStyle: "#fff",
    },
    {
      value: 87,
      fillStyle: "#fff",
    },
    {
      value: 87,
      fillStyle: "#fff",
    },
    {
      value: 77,
      fillStyle: "#fff",
    },
    {
      value: 25,
      fillStyle: "#fff",
    },
    {
      value: 35,
      fillStyle: "#fff",
    },
    {
      value: 89,
      fillStyle: "#fff",
    },
    {
      value: 51,
      fillStyle: "#fff",
    },
    {
      value: 72,
      fillStyle: "#fff",
    },
    {
      value: 83,
      fillStyle: "#fff",
    },
    {
      value: 95,
      fillStyle: "#fff",
    },
    {
      value: 94,
      fillStyle: "#fff",
    },
    {
      value: 32,
      fillStyle: "#fff",
    },
    {
      value: 70,
      fillStyle: "#fff",
    },
    {
      value: 63,
      fillStyle: "#fff",
    },
    {
      value: 34,
      fillStyle: "#fff",
    },
    {
      value: 59,
      fillStyle: "#fff",
    },
    {
      value: 10,
      fillStyle: "#fff",
    },
    {
      value: 66,
      fillStyle: "#fff",
    },
    {
      value: 18,
      fillStyle: "#fff",
    },
    {
      value: 94,
      fillStyle: "#fff",
    },
    {
      value: 10,
      fillStyle: "#fff",
    },
    {
      value: 29,
      fillStyle: "#fff",
    },
    {
      value: 19,
      fillStyle: "#fff",
    },
    {
      value: 85,
      fillStyle: "#fff",
    },
    {
      value: 48,
      fillStyle: "#fff",
    },
    {
      value: 46,
      fillStyle: "#fff",
    },
    {
      value: 59,
      fillStyle: "#fff",
    },
    {
      value: 38,
      fillStyle: "#fff",
    },
    {
      value: 25,
      fillStyle: "#fff",
    },
    {
      value: 86,
      fillStyle: "#fff",
    },
    {
      value: 94,
      fillStyle: "#fff",
    },
    {
      value: 32,
      fillStyle: "#fff",
    },
    {
      value: 32,
      fillStyle: "#fff",
    },
    {
      value: 71,
      fillStyle: "#fff",
    },
    {
      value: 93,
      fillStyle: "#fff",
    },
    {
      value: 67,
      fillStyle: "#fff",
    },
    {
      value: 85,
      fillStyle: "#fff",
    },
    {
      value: 84,
      fillStyle: "#fff",
    },
    {
      value: 55,
      fillStyle: "#fff",
    },
    {
      value: 96,
      fillStyle: "#fff",
    },
    {
      value: 97,
      fillStyle: "#fff",
    },
    {
      value: 83,
      fillStyle: "#fff",
    },
    {
      value: 26,
      fillStyle: "#fff",
    },
    {
      value: 99,
      fillStyle: "#fff",
    },
    {
      value: 93,
      fillStyle: "#fff",
    },
    {
      value: 33,
      fillStyle: "#fff",
    },
    {
      value: 84,
      fillStyle: "#fff",
    },
    {
      value: 35,
      fillStyle: "#fff",
    },
    {
      value: 14,
      fillStyle: "#fff",
    },
    {
      value: 73,
      fillStyle: "#fff",
    },
    {
      value: 79,
      fillStyle: "#fff",
    },
    {
      value: 94,
      fillStyle: "#fff",
    },
    {
      value: 63,
      fillStyle: "#fff",
    },
    {
      value: 78,
      fillStyle: "#fff",
    },
    {
      value: 10,
      fillStyle: "#fff",
    },
    {
      value: 15,
      fillStyle: "#fff",
    },
    {
      value: 87,
      fillStyle: "#fff",
    },
    {
      value: 26,
      fillStyle: "#fff",
    },
    {
      value: 68,
      fillStyle: "#fff",
    },
    {
      value: 41,
      fillStyle: "#fff",
    },
    {
      value: 87,
      fillStyle: "#fff",
    },
    {
      value: 22,
      fillStyle: "#fff",
    },
    {
      value: 76,
      fillStyle: "#fff",
    },
    {
      value: 85,
      fillStyle: "#fff",
    },
    {
      value: 77,
      fillStyle: "#fff",
    },
    {
      value: 60,
      fillStyle: "#fff",
    },
    {
      value: 38,
      fillStyle: "#fff",
    },
    {
      value: 81,
      fillStyle: "#fff",
    },
    {
      value: 35,
      fillStyle: "#fff",
    },
    {
      value: 46,
      fillStyle: "#fff",
    },
    {
      value: 67,
      fillStyle: "#fff",
    },
    {
      value: 10,
      fillStyle: "#fff",
    },
    {
      value: 21,
      fillStyle: "#fff",
    },
    {
      value: 35,
      fillStyle: "#fff",
    },
    {
      value: 47,
      fillStyle: "#fff",
    },
    {
      value: 96,
      fillStyle: "#fff",
    },
    {
      value: 29,
      fillStyle: "#fff",
    },
    {
      value: 36,
      fillStyle: "#fff",
    },
    {
      value: 28,
      fillStyle: "#fff",
    },
    {
      value: 66,
      fillStyle: "#fff",
    },
    {
      value: 89,
      fillStyle: "#fff",
    },
    {
      value: 36,
      fillStyle: "#fff",
    },
    {
      value: 46,
      fillStyle: "#fff",
    },
    {
      value: 96,
      fillStyle: "#fff",
    },
    {
      value: 10,
      fillStyle: "#fff",
    },
    {
      value: 33,
      fillStyle: "#fff",
    },
    {
      value: 21,
      fillStyle: "#fff",
    },
    {
      value: 61,
      fillStyle: "#fff",
    },
    {
      value: 35,
      fillStyle: "#fff",
    },
    {
      value: 96,
      fillStyle: "#fff",
    },
    {
      value: 19,
      fillStyle: "#fff",
    },
    {
      value: 54,
      fillStyle: "#fff",
    },
    {
      value: 11,
      fillStyle: "#fff",
    },
    {
      value: 41,
      fillStyle: "#fff",
    },
    {
      value: 96,
      fillStyle: "#fff",
    },
    {
      value: 28,
      fillStyle: "#fff",
    },
    {
      value: 93,
      fillStyle: "#fff",
    },
    {
      value: 22,
      fillStyle: "#fff",
    },
    {
      value: 66,
      fillStyle: "#fff",
    },
    {
      value: 69,
      fillStyle: "#fff",
    },
    {
      value: 85,
      fillStyle: "#fff",
    },
    {
      value: 63,
      fillStyle: "#fff",
    },
    {
      value: 98,
      fillStyle: "#fff",
    },
    {
      value: 25,
      fillStyle: "#fff",
    },
    {
      value: 89,
      fillStyle: "#fff",
    },
    {
      value: 31,
      fillStyle: "#fff",
    },
    {
      value: 79,
      fillStyle: "#fff",
    },
    {
      value: 28,
      fillStyle: "#fff",
    },
    {
      value: 54,
      fillStyle: "#fff",
    },
    {
      value: 37,
      fillStyle: "#fff",
    },
    {
      value: 35,
      fillStyle: "#fff",
    },
    {
      value: 19,
      fillStyle: "#fff",
    },
    {
      value: 48,
      fillStyle: "#fff",
    },
    {
      value: 30,
      fillStyle: "#fff",
    },
    {
      value: 84,
      fillStyle: "#fff",
    },
    {
      value: 79,
      fillStyle: "#fff",
    },
    {
      value: 92,
      fillStyle: "#fff",
    },
    {
      value: 99,
      fillStyle: "#fff",
    },
    {
      value: 88,
      fillStyle: "#fff",
    },
    {
      value: 82,
      fillStyle: "#fff",
    },
    {
      value: 48,
      fillStyle: "#fff",
    },
    {
      value: 37,
      fillStyle: "#fff",
    },
    {
      value: 66,
      fillStyle: "#fff",
    },
    {
      value: 97,
      fillStyle: "#fff",
    },
    {
      value: 33,
      fillStyle: "#fff",
    },
    {
      value: 39,
      fillStyle: "#fff",
    },
    {
      value: 15,
      fillStyle: "#fff",
    },
    {
      value: 45,
      fillStyle: "#fff",
    },
    {
      value: 28,
      fillStyle: "#fff",
    },
    {
      value: 68,
      fillStyle: "#fff",
    },
    {
      value: 70,
      fillStyle: "#fff",
    },
    {
      value: 97,
      fillStyle: "#fff",
    },
    {
      value: 11,
      fillStyle: "#fff",
    },
    {
      value: 53,
      fillStyle: "#fff",
    },
    {
      value: 92,
      fillStyle: "#fff",
    },
    {
      value: 74,
      fillStyle: "#fff",
    },
    {
      value: 98,
      fillStyle: "#fff",
    },
    {
      value: 91,
      fillStyle: "#fff",
    },
  ].slice(0, limit);

export const parseSpeed = (speed: number[]) =>
  Math.round(1000 / (speed[0] || 1) / 2);

export const limitValue = (value: number) => {
  if (typeof value !== "number") return 350;
  if (isNaN(value)) return 2;
  if (value > 600) return 600;
  if (value < 2) return 2;
  return value;
};
