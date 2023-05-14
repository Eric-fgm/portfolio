import { generateRandomValues } from "@/features/sortingAlgorithms/helpers";

export default function* selectionSort(size: number) {
  const list = generateRandomValues(size);
  yield { list, iteration: 0 };
  const length = list.length;
  let prevElem = list[0];

  for (let i = 0; i < length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      prevElem.fillStyle = "#fff";
      prevElem = list[j];
      list[j].fillStyle = "#c54f6b";
      if (list[j].value < list[min].value) {
        min = j;
      }
      yield { list, iteration: i * length + j + 1 };
    }
    const tmp = list[min];
    list[min] = list[i];
    list[i] = tmp;
    prevElem.fillStyle = "#fff";
    yield { list, iteration: (i + 1) * length };
  }
}
