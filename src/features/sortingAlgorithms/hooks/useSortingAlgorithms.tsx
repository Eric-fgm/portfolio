"use client";
import type { SortTypes } from "@/features/sortingAlgorithms/helpers";
import { parseSpeed } from "@/features/sortingAlgorithms/helpers";
import sortingAlgorithms from "@/features/sortingAlgorithms/algorithms";
import { useEffect, useMemo, useState } from "react";

export interface UseSortingAlgorithmsProps {
  initialList: { value: number; fillStyle: string }[];
  status: "stopped" | "started" | "completed";
  type: SortTypes;
  speed: number[];
}

interface UseSortingAlgorithmsCallbacks {
  onSuccess: () => void;
}

const useSortingAlgorithms = ({
  initialList = [],
  status,
  type,
  speed,
  onSuccess = () => {},
}: UseSortingAlgorithmsProps & UseSortingAlgorithmsCallbacks) => {
  const [valueList, setValueList] = useState(initialList);
  const [iteration, setIteration] = useState(0);

  const algorithm = useMemo(() => {
    let instance = sortingAlgorithms[type](initialList);
    setValueList(initialList);
    setIteration(0);
    return () => ({
      instance,
      reset: () => (instance = sortingAlgorithms[type](initialList)),
    });
  }, [type, initialList]);

  useEffect(() => {
    let intervalInstance: ReturnType<typeof setInterval> | null = null;
    if (status === "started") {
      intervalInstance = setInterval(() => {
        const { value, done } = algorithm().instance.next();
        if (done) {
          intervalInstance && clearInterval(intervalInstance);
          algorithm().reset();
          onSuccess();
        } else {
          setIteration(value.iteration);
          setValueList([...value.list]);
        }
      }, parseSpeed(speed));
    }
    return () => {
      intervalInstance && clearInterval(intervalInstance);
    };
  }, [status, speed, algorithm, onSuccess]);

  return { valueList, iteration };
};

export default useSortingAlgorithms;
