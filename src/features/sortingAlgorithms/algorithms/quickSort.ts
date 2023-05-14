import { generateRandomValues } from "@/features/sortingAlgorithms/helpers";

interface S {
  value: number;
  fillStyle: string;
}

let iteration = 0;

export default function* quickSort(size: number) {
  iteration = 0;
  const list = generateRandomValues(size);
  yield { list, iteration: 0 };
  yield* quickSortRange(list, 0, list.length - 1);
}

function* quickSortRange(
  list: S[],
  l: number,
  r: number
): Generator<{ list: S[]; iteration: number }, void, any> {
  if (l < r) {
    const p = yield* partition(list, l, r);
    yield* quickSortRange(list, l, p - 1);
    yield* quickSortRange(list, p + 1, r);
  }
  yield { list, iteration };
}

function* partition(list: S[], l: number, r: number) {
  let i = l;
  let pivot = list[r].value;

  for (let j = l; j < r; j++) {
    iteration += 1;
    if (list[j].value < pivot) {
      [list[j], list[i]] = [list[i], list[j]];
      ++i;
    }
    list[j].fillStyle = "#c54f6b";
    yield { list, iteration };
    list[j].fillStyle = "#fff";
  }
  [list[i], list[r]] = [list[r], list[i]];

  return i;
}
