"use client";
import type { SortTypes } from "@/features/sortingAlgorithms/helpers";
import { parseSpeed } from "@/features/sortingAlgorithms/helpers";
import sortingAlgorithms from "@/features/sortingAlgorithms/algorithms";
import { useCallback, useEffect, useMemo, useState } from "react";

export interface UseSortingAlgorithmsProps {
  status: "stopped" | "started" | "completed" | "restart";
  type: SortTypes;
  size: number;
  speed: number[];
  changeStatus: (status: UseSortingAlgorithmsProps["status"]) => void;
}

const useSortingAlgorithms = ({
  status,
  type,
  size,
  speed,
  changeStatus,
}: UseSortingAlgorithmsProps) => {
  const [valueList, setValueList] = useState<
    { value: number; fillStyle: string }[]
  >([]);
  const [iteration, setIteration] = useState<number>(0);
  const [algorithm, setAlgorithm] = useState(sortingAlgorithms[type](size));

  const restart = useCallback(
    (
      type: UseSortingAlgorithmsProps["type"],
      size: UseSortingAlgorithmsProps["size"]
    ) => {
      const algorithm = sortingAlgorithms[type](size);
      const { value, done } = algorithm.next();
      if (!done) {
        setIteration(value.iteration);
        setValueList([...value.list]);
      }
      setAlgorithm(algorithm);
    },
    []
  );

  useEffect(() => {
    restart(type, size);
  }, [type, size, restart]);

  useEffect(() => {
    if (status === "restart") restart(type, size);
  }, [status, type, size, restart]);

  useEffect(() => {
    let intervalInstance: ReturnType<typeof setInterval> | null = null;
    if (status === "started") {
      intervalInstance = setInterval(() => {
        const { value, done } = algorithm.next();
        if (done) {
          changeStatus("completed");
          setAlgorithm(sortingAlgorithms[type](size));
        } else {
          setIteration(value.iteration);
          setValueList([...value.list]);
        }
      }, parseSpeed(speed));
    }
    return () => {
      intervalInstance && clearInterval(intervalInstance);
    };
  }, [size, type, status, speed, algorithm, changeStatus, restart]);

  return { valueList, iteration };
};

export default useSortingAlgorithms;
