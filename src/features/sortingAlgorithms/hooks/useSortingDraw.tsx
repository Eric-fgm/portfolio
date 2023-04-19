import { useCallback, useEffect, useMemo, useRef } from "react";
import type { SortingSettingsProps } from "@/features/sortingAlgorithms/providers";
import {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  defaultSortProcess,
  merge,
  swap,
  SortProcess,
  getRandomValue,
  MAX_SORT_VALUE,
} from "@/features/sortingAlgorithms/helpers";

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
  const intervalInstance = useRef<ReturnType<typeof setInterval> | null>(null);
  const sortProcess = useRef<SortProcess>(defaultSortProcess);

  const restart = useCallback(() => {
    // is there better way? (could not use spreed etc.)
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
          value: getRandomValue(),
          fillStyle: "#fff",
        });
      }
  }, []);

  const draw = useCallback(() => {
    const canvasContext = canvas.current?.getContext("2d");
    if (!canvasContext) return;
    canvasContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    canvasContext.fillStyle = "#fff";
    canvasContext.font = "12px __Inter_ecc414 ";
    canvasContext.fillText(
      `Items: ${size}  |  Speed: ${speed} ms  |  Iterations: ${sortProcess.current.iteration}`,
      0,
      12
    );

    for (let i = 0; i < valueList.current.length; i++) {
      canvasContext.fillStyle = valueList.current[i]?.fillStyle || "#fff";
      canvasContext.beginPath();
      canvasContext.roundRect(
        (CANVAS_WIDTH / valueList.current.length) * i,
        CANVAS_HEIGHT - CANVAS_HEIGHT * (valueList.current[i].value / 10),
        CANVAS_WIDTH / valueList.current.length - 1,
        CANVAS_HEIGHT * (valueList.current[i].value / 10),
        6
      );
      canvasContext.fill();
    }
  }, [size, speed]);

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
    const { i, j, mi, mj, mk, left, right, flag } = sortProcess.current;
    sortProcess.current.iteration++;

    if (i >= valueList.current.length && j >= valueList.current.length - 1) {
      handleChangeStatus("completed");
    } else if (j >= valueList.current.length - 1) {
      sortProcess.current.i = 2 * i || 1;
      sortProcess.current.j = 0;
    } else {
      const m = Math.min(j + i - 1, n - 1);
      const r = Math.min(j + 2 * i - 1, n - 1);
      const l = j;
      if (flag) {
        const n1 = m - l + 1;
        const n2 = r - m;
        sortProcess.current.left = Array(n1).fill(0);
        sortProcess.current.right = Array(n2).fill(0);
        for (let i = 0; i < n1; i++)
          sortProcess.current.left[i] = valueList.current[l + i];
        for (let j = 0; j < n2; j++)
          sortProcess.current.right[j] = valueList.current[m + 1 + j];
        sortProcess.current.mi = 0;
        sortProcess.current.mj = 0;
        sortProcess.current.mk = l;
        sortProcess.current.flag = false;
      } else if (mi < left.length && mj < right.length) {
        if (left[mi].value <= right[mj].value) {
          valueList.current[mk] = left[mi];
          sortProcess.current.mi++;
        } else {
          valueList.current[mk] = right[mj];
          sortProcess.current.mj++;
        }
        sortProcess.current.mk++;
      } else if (mi < left.length) {
        valueList.current[mk] = left[mi];
        sortProcess.current.mi++;
        sortProcess.current.mk++;
      } else if (mj < right.length) {
        valueList.current[mk] = right[mj];
        sortProcess.current.mj++;
        sortProcess.current.mk++;
      } else {
        sortProcess.current.j += 2 * i || 1;
        sortProcess.current.left = [];
        sortProcess.current.right = [];
        sortProcess.current.flag = true;
      }
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
    if (sortProcess.current.iteration === 0) {
      sortProcess.current.i = 1;
      sortProcess.current.j = 0;
    }

    const { i, j, count, iteration } = sortProcess.current;
    const len = valueList.current.length;

    if (iteration <= MAX_SORT_VALUE) count[iteration] = 0;
    else if (iteration <= len + MAX_SORT_VALUE)
      count[valueList.current[iteration - MAX_SORT_VALUE - 1].value] += 1;
    else if (i <= MAX_SORT_VALUE) {
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

  const sortingFunctions = useMemo(
    () => ({
      bubbleSort,
      selectionSort,
      mergeSort,
      quickSort,
      countingSort,
    }),
    [bubbleSort, selectionSort, mergeSort, quickSort, countingSort]
  );

  useEffect(() => {
    for (let i = 0; i < valueList.current.length; i++)
      valueList.current[i].value = getRandomValue();
  }, [seed]);

  useEffect(() => {
    if (size !== valueList.current.length)
      onChangeSize(valueList.current.length, size);
  }, [size]);

  useEffect(() => {
    draw();
    intervalInstance.current && clearInterval(intervalInstance.current);
    if (status === "started")
      intervalInstance.current = setInterval(sortingFunctions[type], speed);
  }, [speed, type, status]);

  useEffect(() => {
    restart();
    draw();
  }, [seed, size, type]);
};

export default useSortingDraw;
