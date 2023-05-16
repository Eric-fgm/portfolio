import { generateRandomValues } from "@/features/sortingAlgorithms/helpers";
import { UseSortingAlgorithmsProps } from "../hooks";

export default function* selectionSort(
  initialList: UseSortingAlgorithmsProps["initialList"]
) {
  const list = [...initialList];
  yield { list, iteration: 0 };
  const length = list.length;

  for (let i = 0; i < length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      list[j] = { ...list[j], fillStyle: "#c54f6b" };
      if (list[j].value < list[min].value) {
        min = j;
      }
      yield { list, iteration: i * length + j + 1 };
      list[j].fillStyle = "#fff";
    }
    const tmp = list[min];
    list[min] = list[i];
    list[i] = tmp;
    yield { list, iteration: (i + 1) * length };
  }
}
