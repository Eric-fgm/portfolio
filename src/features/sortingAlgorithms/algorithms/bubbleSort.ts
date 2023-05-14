import { generateRandomValues } from "@/features/sortingAlgorithms/helpers";

export default function* bubbleSort(size: number) {
  const list = generateRandomValues(size);
  yield { list, iteration: 0 };
  const len = list.length;
  let swapped = false;
  let prevElem = list[0];

  for (let i = 0; i < len; i++) {
    swapped = false;
    for (let j = 0; j < len; j++) {
      prevElem.fillStyle = "#fff";
      prevElem = list[j];
      list[j].fillStyle = "#c54f6b";
      if (j + 1 < len && list[j].value > list[j + 1].value) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
        swapped = true;
      }
      yield { list, iteration: i * len + j + 1 };
    }
    prevElem.fillStyle = "#fff";
    yield { list, iteration: (i + 1) * len };
    if (!swapped) break;
  }
}
