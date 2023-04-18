import type { SortingSettingsProps } from "./../providers";
export const sortSpecification: {
  [key in SortingSettingsProps["type"]]: { name: string; desc: string };
} = {
  bubbleSort: {
    name: "Bubble Sort",
    desc: "<p>Modi reiciendis illo velit similique blanditiis cumque architecto pariatur, enim fuga molestias repellat ducimus voluptates<br/>Complexity - O(n<sup>2</sup>)<br/>Space - O(1)</p>",
  },
  selectionSort: {
    name: "Selection Sort",
    desc: "<p>Modi reiciendis illo velit similique blanditiis cumque architecto pariatur, enim fuga molestias repellat ducimus voluptates<br/>Complexity - O(n<sup>2</sup>)<br/>Space - O(1)</p>",
  },
  mergeSort: {
    name: "Merge Sort",
    desc: "<p>Modi reiciendis illo velit similique blanditiis cumque architecto pariatur, enim fuga molestias repellat ducimus voluptates<br/>Complexity - O(n*log(n))<br/>Space - O(n)</p>",
  },
  quickSort: {
    name: "Quick Sort",
    desc: "<p>Modi reiciendis illo velit similique blanditiis cumque architecto pariatur, enim fuga molestias repellat ducimus voluptates<br/>Complexity - O(n*log(n))<br/>Space - O(n)</p>",
  },
  countingSort: {
    name: "Counting Sort",
    desc: "<p>Modi reiciendis illo velit similique blanditiis cumque architecto pariatur, enim fuga molestias repellat ducimus voluptates<br/>Complexity - O(n)<br/>Space - O(n)</p>",
  },
};
