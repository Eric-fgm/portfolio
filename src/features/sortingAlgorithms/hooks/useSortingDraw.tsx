import { useCallback, useEffect, useRef } from "react";
import type { SortingSettingsProps } from "@/features/sortingAlgorithms/providers";

const defaultBubbleSortProcesses = {
  i: 0,
  j: 0,
  iteration: 0,
};

const defaultSortProcess = {
  i: 0,
  j: 0,
  iteration: 0,
  min: 0,
  stack: [],
  count: [],
  currStack: null,
};

const CANVAS_WIDTH = 948;
const CANVAS_HEIGHT = 543;

function merge(arr: { value: number }[], l: number, m: number, r: number) {
  var i, j, k;
  var n1 = m - l + 1;
  var n2 = r - m;

  var L = Array(n1).fill(0);
  var R = Array(n2).fill(0);

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
}

const swap = (arr: { value: number }[], left: number, right: number) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

const useSortingDraw = (
  canvas: React.RefObject<HTMLCanvasElement>,
  {
    type,
    size,
    speed,
    status,
    seed,
    handleChangeStatus,
  }: Omit<SortingSettingsProps, "speed"> & { speed: number }
) => {
  const valueList = useRef<{ value: number; fillStyle: string }[]>([]);
  const intervalInstance = useRef<null | ReturnType<typeof setInterval>>(null);

  const sortProcess = useRef<{
    i: number;
    j: number;
    min: number;
    iteration: number;
    stack: { x: number; y: number }[];
    currStack: { x: number; y: number } | null;
    count: number[];
  }>(defaultSortProcess);

  const restart = useCallback(() => {
    sortProcess.current.i = 0;
    sortProcess.current.j = 0;
    sortProcess.current.min = 0;
    sortProcess.current.iteration = 0;
    sortProcess.current.stack = [];
    sortProcess.current.count = [];
    sortProcess.current.currStack = null;
    status === "completed" && handleChangeStatus("started");
  }, [status, handleChangeStatus]);

  const onChangeSize = useCallback((prevSize: number, currSize: number) => {
    if (prevSize === currSize) return;

    if (prevSize > currSize)
      valueList.current = valueList.current.slice(0, currSize);
    else
      for (let i = 0; i < currSize - prevSize; i++) {
        valueList.current.push({
          value: Math.floor(Math.random() * 9) + 1,
          fillStyle: "#fff",
        });
      }
  }, []);

  const draw = useCallback(() => {
    const ctx = canvas.current?.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillStyle = "#fff";
    ctx.font = "12px __Inter_ecc414 ";
    ctx.fillText(
      `Items: ${size}  |  Speed: ${speed} ms  |  Iterations: ${sortProcess.current.iteration}`,
      0,
      12
    );

    for (let i = 0; i < valueList.current.length; i++) {
      ctx.fillStyle = valueList.current[i]?.fillStyle || "#fff";
      ctx.beginPath();
      ctx.roundRect(
        (CANVAS_WIDTH / valueList.current.length) * i,
        CANVAS_HEIGHT - CANVAS_HEIGHT * (valueList.current[i].value / 10),
        CANVAS_WIDTH / valueList.current.length - 1,
        CANVAS_HEIGHT * (valueList.current[i].value / 10),
        6
      );
      ctx.fill();
    }
  }, [canvas, size, speed]);

  const bubbleSort = useCallback(() => {
    const { i, j } = sortProcess.current;
    sortProcess.current.iteration++;

    if (valueList.current[j].value > valueList.current[j + 1].value) {
      const temp = valueList.current[j];
      valueList.current[j] = valueList.current[j + 1];
      valueList.current[j + 1] = temp;
    }

    if (
      j >= valueList.current.length - 2 &&
      i >= valueList.current.length - 1
    ) {
      handleChangeStatus("completed");
    } else if (j === valueList.current.length - 2) {
      sortProcess.current.i = i + 1;
      sortProcess.current.j = 0;
    } else {
      sortProcess.current.j = j + 1;
    }

    draw();
  }, [draw, handleChangeStatus]);

  const selectionSort = useCallback(() => {
    const { i, j, min } = sortProcess.current;
    sortProcess.current.iteration++;

    if (
      j >= valueList.current.length - 1 &&
      i >= valueList.current.length - 1
    ) {
      handleChangeStatus("completed");
    } else if (j === valueList.current.length) {
      if (min != i) {
        const temp = valueList.current[i];
        valueList.current[i] = valueList.current[min];
        valueList.current[min] = temp;
      }
      sortProcess.current.i = i + 1;
      sortProcess.current.j = i + 2;
      sortProcess.current.min = i + 1;
    } else {
      if (valueList.current[j].value < valueList.current[min].value) {
        sortProcess.current.min = j;
      }
      sortProcess.current.j = j + 1;
    }

    draw();
  }, [draw, handleChangeStatus]);

  const mergeSort = useCallback(() => {
    const n = valueList.current.length;
    const { i, j } = sortProcess.current;
    sortProcess.current.iteration++;

    if (i >= valueList.current.length && j >= valueList.current.length - 1) {
      handleChangeStatus("completed");
    } else if (j >= valueList.current.length - 1) {
      sortProcess.current.i = 2 * i || 1;
      sortProcess.current.j = 0;
    } else {
      let mid = Math.min(j + i - 1, n - 1);
      let right_end = Math.min(j + 2 * i - 1, n - 1);

      merge(valueList.current, j, mid, right_end);
      sortProcess.current.j += 2 * i || 1;
    }

    draw();
  }, [draw, handleChangeStatus]);

  const quickSort = useCallback(() => {
    const { iteration, stack } = sortProcess.current;
    if (iteration === 0 && stack.length === 0) {
      sortProcess.current.currStack = { x: 0, y: valueList.current.length - 1 };
      sortProcess.current.i = 0;
      sortProcess.current.j = 0;
    }

    const { i, j, currStack } = sortProcess.current;

    if (!currStack) {
      handleChangeStatus("completed");
    } else if (j >= currStack.y) {
      swap(valueList.current, i, currStack.y);
      if (i - 1 > currStack.x) stack.push({ x: currStack.x, y: i - 1 });
      if (i + 1 < currStack.y) stack.push({ x: i + 1, y: currStack.y });
      const newStack = sortProcess.current.stack.shift() || null;
      sortProcess.current.currStack = newStack;
      sortProcess.current.j = sortProcess.current.i = newStack?.x || 0;
    } else {
      let pivot = valueList.current[currStack.y].value;
      if (valueList.current[j].value <= pivot) {
        swap(valueList.current, i, j);
        sortProcess.current.i++;
      }
      sortProcess.current.j++;
    }

    sortProcess.current.iteration++;

    draw();
  }, [draw, handleChangeStatus]);

  const countingSort = useCallback(() => {
    const MAX_VALUE = 9;
    if (sortProcess.current.iteration === 0) {
      sortProcess.current.i = 1;
      sortProcess.current.j = 0;
    }

    const { i, j, count, iteration } = sortProcess.current;
    const len = valueList.current.length;

    if (iteration <= MAX_VALUE) count[iteration] = 0;
    else if (iteration <= len + MAX_VALUE)
      count[valueList.current[iteration - MAX_VALUE - 1].value] += 1;
    else if (i <= MAX_VALUE) {
      if (count[i] > 0) {
        valueList.current[j] = { value: i, fillStyle: "#fff" };
        sortProcess.current.j++;
        sortProcess.current.iteration++;
        count[i]--;
      } else {
        sortProcess.current.i++;
      }
    } else handleChangeStatus("completed");

    sortProcess.current.iteration++;

    draw();
  }, [draw, handleChangeStatus]);

  useEffect(() => {
    for (let i = 0; i < valueList.current.length; i++) {
      valueList.current[i].value = Math.floor(Math.random() * 9) + 1;
    }

    restart();
    draw();
  }, [seed]);

  useEffect(() => {
    if (size !== valueList.current.length)
      onChangeSize(valueList.current.length, size);

    restart();
    draw();
  }, [size]);

  useEffect(() => {
    const sortingFunction = {
      bubbleSort,
      selectionSort,
      mergeSort: bubbleSort,
      quickSort: bubbleSort,
      countingSort: bubbleSort,
    };
    restart();
    intervalInstance.current && clearInterval(intervalInstance.current);
    intervalInstance.current = setInterval(sortingFunction[type], speed);

    return () => {
      intervalInstance.current && clearInterval(intervalInstance.current);
    };
  }, [type]);

  useEffect(() => {
    const sortingFunction = {
      bubbleSort,
      selectionSort,
      mergeSort,
      quickSort,
      countingSort,
    };
    intervalInstance.current && clearInterval(intervalInstance.current);

    if (status !== "started") return draw();

    intervalInstance.current = setInterval(sortingFunction[type], speed);

    return () => {
      intervalInstance.current && clearInterval(intervalInstance.current);
    };
  }, [
    canvas,
    status,
    speed,
    type,
    draw,
    bubbleSort,
    selectionSort,
    mergeSort,
    quickSort,
    countingSort,
  ]);
};

export default useSortingDraw;
