import { generateRandomValues } from "@/features/sortingAlgorithms/helpers";

interface S {
  value: number;
  fillStyle: string;
}

let iteration = 0;

export default function* mergeSort(size: number) {
  iteration = 0;
  const list = generateRandomValues(size);
  yield { list, iteration: 0 };
  yield* mergeSortRange(list, 0, list.length - 1);
}

function* mergeSortRange(
  list: S[],
  l: number,
  r: number
): Generator<{ list: S[]; iteration: number }, void, any> {
  if (l < r) {
    let m = Math.floor(l + (r - l) / 2);
    yield* mergeSortRange(list, l, m);
    yield* mergeSortRange(list, m + 1, r);
    yield* merge(list, l, m, r);
  }
  yield { list, iteration };
}

function* merge(list: S[], l: number, m: number, r: number) {
  let res = list.slice(l, r + 1);
  let i1 = l;
  let i2 = m + 1;
  let i = l;

  while (i1 <= m && i2 <= r) {
    iteration += 1;
    const v1 = { ...res[i1 - l] };
    const v2 = { ...res[i2 - l] };

    if (v1.value < v2.value) {
      list[i] = v1;
      ++i1;
    } else {
      list[i] = v2;
      ++i2;
    }
    list[i].fillStyle = "#c54f6b";
    yield { list, iteration };
    list[i].fillStyle = "#fff";
    i++;
  }

  while (i1 <= m) {
    iteration += 1;
    list[i] = res[i1++ - l];
    list[i].fillStyle = "#c54f6b";
    yield { list, iteration };
    list[i].fillStyle = "#fff";
    i++;
  }

  while (i2 <= m) {
    iteration += 1;
    list[i] = res[i2++ - l];
    list[i].fillStyle = "#c54f6b";
    yield { list, iteration };
    list[i].fillStyle = "#fff";
    i++;
  }
}
