import { MAX_VALUE } from "@/features/sortingAlgorithms/helpers";
import type { UseSortingAlgorithmsProps } from "@/features/sortingAlgorithms/hooks";

export default function* countingSort(
  initialList: UseSortingAlgorithmsProps["initialList"]
) {
  let iteration = 0;
  const list = [...initialList];
  const length = list.length;
  const output = [...list];
  yield { list, iteration };

  const count = new Array(MAX_VALUE).fill(0);

  for (let i = 0; i < length; i++) {
    iteration += 1;
    count[list[i].value]++;
    list[i].fillStyle = "#c54f6b";
    yield { list, iteration };
    list[i].fillStyle = "#fff";
  }

  for (let i = 1; i <= MAX_VALUE; i++) {
    count[i] += count[i - 1];
  }

  for (let i = length - 1; i >= 0; i--) {
    iteration += 1;
    output[count[list[i].value] - 1] = list[i];
    --count[list[i].value];
    yield { list: output, iteration };
  }
}
