"use client";
import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  MAX_SORT_VALUE,
  parseSpeed,
} from "@/features/sortingAlgorithms/helpers";
import { useSortingSettings } from "@/features/sortingAlgorithms/providers/sortingSettings";
import useCanvas from "@/hooks/useCanvas";
import { useCallback, useEffect, useMemo, useRef } from "react";

const useSortingDraw = () => {
  const {
    valueList,
    type,
    status,
    speed,
    sortProcess,
    size,
    changeStatus,
    setValueList,
  } = useSortingSettings();
  const intervalInstance = useRef<ReturnType<typeof setInterval> | null>(null);

  const draw = useCallback(
    (canvas: HTMLCanvasElement) => {
      const valueListLength = valueList.length;
      const canvasContext = canvas.getContext("2d");
      if (!canvasContext) return;
      canvasContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      for (let i = 0; i < valueListLength; i++) {
        const { value, fillStyle } = valueList[i];
        canvasContext.fillStyle = fillStyle;
        canvasContext.beginPath();
        canvasContext.roundRect(
          (CANVAS_WIDTH / valueListLength) * i,
          CANVAS_HEIGHT - CANVAS_HEIGHT * (value / 100),
          CANVAS_WIDTH / valueListLength - 1,
          CANVAS_HEIGHT * (value / 100),
          6
        );
        canvasContext.fill();
      }
    },
    [valueList]
  );

  const canvas = useCanvas({
    draw,
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
  });

  const bubbleSort = useCallback(() => {
    setValueList((prevValueList) => {
      const { i, j } = sortProcess;
      sortProcess.iteration++;
      const valueListCopy = [...prevValueList];
      valueListCopy[j].fillStyle = "#fff";
      if (valueListCopy[j].value > valueListCopy[j + 1].value) {
        const temp = valueListCopy[j];
        valueListCopy[j] = valueListCopy[j + 1];
        valueListCopy[j + 1] = temp;
      }

      if (j >= valueListCopy.length - 2 && i >= valueListCopy.length - 1) {
        changeStatus("completed");
      } else if (j === valueListCopy.length - 2) {
        sortProcess.i = i + 1;
        sortProcess.j = 0;
      } else {
        sortProcess.j = j + 1;
      }
      if (j < valueListCopy.length - 2)
        valueListCopy[sortProcess.j].fillStyle = "#c54f6b";
      return valueListCopy;
    });
  }, [sortProcess, changeStatus, setValueList]);

  const selectionSort = useCallback(() => {
    setValueList((prevValueList) => {
      const valueListCopy = [...prevValueList];
      const { i, j, min } = sortProcess;
      sortProcess.iteration++;
      if (j < valueListCopy.length) valueListCopy[j].fillStyle = "#fff";
      if (j >= valueListCopy.length - 1 && i >= valueListCopy.length - 1) {
        changeStatus("completed");
      } else if (j === valueListCopy.length) {
        if (min != i) {
          const temp = valueListCopy[i];
          valueListCopy[i] = valueListCopy[min];
          valueListCopy[min] = temp;
        }
        sortProcess.i = i + 1;
        sortProcess.j = i + 2;
        sortProcess.min = i + 1;
      } else {
        if (valueListCopy[j].value < valueListCopy[min].value) {
          sortProcess.min = j;
        }
        sortProcess.j = j + 1;
      }
      if (sortProcess.j < valueListCopy.length)
        valueListCopy[sortProcess.j].fillStyle = "#c54f6b";
      return valueListCopy;
    });
  }, [sortProcess, changeStatus, setValueList]);

  const mergeSort = useCallback(() => {
    setValueList((prevValueList) => {
      const valueListCopy = [...prevValueList];
      const { i, j, mi, mj, mk, left, right, flag } = sortProcess;
      const n = valueListCopy.length;
      sortProcess.iteration++;

      if (sortProcess.mk < valueListCopy.length)
        valueListCopy[sortProcess.mk].fillStyle = "#fff";

      if (i >= n && j >= n - 1) {
        changeStatus("completed");
      } else if (j >= n - 1) {
        sortProcess.i = 2 * i || 1;
        sortProcess.j = 0;
      } else {
        const m = Math.min(j + i - 1, n - 1);
        const r = Math.min(j + 2 * i - 1, n - 1);
        const l = j;
        if (flag) {
          const n1 = m - l + 1;
          const n2 = r - m;
          sortProcess.left = Array(n1).fill(0);
          sortProcess.right = Array(n2).fill(0);
          for (let i = 0; i < n1; i++)
            sortProcess.left[i] = valueListCopy[l + i];
          for (let j = 0; j < n2; j++)
            sortProcess.right[j] = valueListCopy[m + 1 + j];
          sortProcess.mi = 0;
          sortProcess.mj = 0;
          sortProcess.mk = l;
          sortProcess.flag = false;
        } else if (mi < left.length && mj < right.length) {
          if (left[mi].value <= right[mj].value) {
            valueListCopy[mk] = left[mi];
            sortProcess.mi++;
          } else {
            valueListCopy[mk] = right[mj];
            sortProcess.mj++;
          }
          sortProcess.mk++;
        } else if (mi < left.length) {
          valueListCopy[mk] = left[mi];
          sortProcess.mi++;
          sortProcess.mk++;
        } else if (mj < right.length) {
          valueListCopy[mk] = right[mj];
          sortProcess.mj++;
          sortProcess.mk++;
        } else {
          sortProcess.j += 2 * i || 1;
          sortProcess.left = [];
          sortProcess.right = [];
          sortProcess.flag = true;
        }
      }
      if (sortProcess.mk < valueListCopy.length)
        valueListCopy[sortProcess.mk].fillStyle = "#c54f6b";
      return valueListCopy;
    });
  }, [sortProcess, changeStatus, setValueList]);

  const quickSort = useCallback(() => {
    setValueList((prevValueList) => {
      const valueListCopy = [...prevValueList];
      const { iteration, stack } = sortProcess;
      if (iteration === 0 && stack.length === 0) {
        sortProcess.currStack = { x: 0, y: valueListCopy.length - 1 };
        sortProcess.i = 0;
        sortProcess.j = 0;
      }

      const { i, j, currStack } = sortProcess;

      if (j < valueListCopy.length) valueListCopy[j].fillStyle = "#fff";

      if (!currStack) {
        changeStatus("completed");
      } else if (j >= currStack.y) {
        [valueListCopy[i], valueListCopy[currStack.y]] = [
          valueListCopy[currStack.y],
          valueListCopy[i],
        ];
        if (i - 1 > currStack.x) stack.push({ x: currStack.x, y: i - 1 });
        if (i + 1 < currStack.y) stack.push({ x: i + 1, y: currStack.y });
        const newStack = sortProcess.stack.shift() || null;
        sortProcess.currStack = newStack;
        sortProcess.j = sortProcess.i = newStack?.x || 0;
      } else {
        let pivot = valueListCopy[currStack.y].value;
        if (valueListCopy[j].value <= pivot) {
          [valueListCopy[i], valueListCopy[j]] = [
            valueListCopy[j],
            valueListCopy[i],
          ];
          sortProcess.i++;
        }
        sortProcess.j++;
      }

      if (currStack && sortProcess.j < valueListCopy.length)
        valueListCopy[sortProcess.j].fillStyle = "#c54f6b";

      sortProcess.iteration++;
      return valueListCopy;
    });
  }, [sortProcess, changeStatus, setValueList]);

  const countingSort = useCallback(() => {
    setValueList((prevValueList) => {
      const valueListCopy = [...prevValueList];
      if (sortProcess.iteration === 0) {
        sortProcess.i = 10;
        sortProcess.j = 0;
      }

      const { i, j, count, iteration } = sortProcess;
      const len = valueListCopy.length;

      if (iteration <= MAX_SORT_VALUE + 9) count[iteration] = 0;
      else if (iteration <= len + MAX_SORT_VALUE + 9) {
        count[valueListCopy[iteration - MAX_SORT_VALUE - 10].value] += 1;
        valueListCopy[iteration - MAX_SORT_VALUE - 10].fillStyle = "#fff";
      } else if (i <= MAX_SORT_VALUE + 9) {
        if (count[i] > 0) {
          valueListCopy[j] = { value: i, fillStyle: "#fff" };
          sortProcess.j++;
          sortProcess.iteration++;
          count[i]--;
        } else {
          sortProcess.i++;
        }
      } else changeStatus("completed");

      sortProcess.iteration++;
      if (
        sortProcess.iteration > MAX_SORT_VALUE + 9 &&
        sortProcess.iteration <= len + MAX_SORT_VALUE + 9
      ) {
        valueListCopy[sortProcess.iteration - MAX_SORT_VALUE - 10].fillStyle =
          "#c54f6b";
      }
      return valueListCopy;
    });
  }, [sortProcess, changeStatus, setValueList]);

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
    intervalInstance.current && clearInterval(intervalInstance.current);
    if (status === "started")
      intervalInstance.current = setInterval(
        sortingFunctions[type],
        parseSpeed(speed)
      );

    return () => {
      intervalInstance.current && clearInterval(intervalInstance.current);
    };
  }, [type, status, speed, sortingFunctions]);

  return (
    <>
      <div className="sticky -mt-1 top-0 left-0 text-tiny">
        <div className="absolute flex items-center whitespace-nowrap">
          <span>Size: {size}</span>
          <span className="mx-1.5 inline-block h-3 w-px bg-[#fff] opacity-30"></span>
          <span>Speed: {speed} ms</span>
          <span className="mx-1.5 inline-block h-3 w-px bg-[#fff] opacity-30"></span>
          <span>Iterations: {sortProcess.iteration}</span>
        </div>
      </div>
      {canvas}
    </>
  );
};

export default useSortingDraw;
