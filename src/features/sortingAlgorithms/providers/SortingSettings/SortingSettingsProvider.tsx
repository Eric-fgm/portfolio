"use client";
import {
  defaultSortProcess,
  generateRandomValues,
  getRandomValue,
} from "@/features/sortingAlgorithms/helpers";
import type { SortingSettingsProps } from "@/features/sortingAlgorithms/providers/sortingSettings";
import { SortingSettingsContext } from "@/features/sortingAlgorithms/providers/sortingSettings";
import { useCallback, useRef, useState } from "react";

interface SortingSettingsProvider {
  children: React.ReactNode;
}

const SortingSettingsProvider: React.FC<SortingSettingsProvider> = ({
  children,
}) => {
  const sortProcess = useRef({ ...defaultSortProcess });
  const [type, setType] = useState<SortingSettingsProps["type"]>("bubbleSort");
  const [size, setSize] = useState<SortingSettingsProps["size"]>(350);
  const [valueList, setValueList] = useState<SortingSettingsProps["valueList"]>(
    generateRandomValues()
  );
  const [speed, setSpeed] = useState<SortingSettingsProps["speed"]>([25]);
  const [status, setStatus] =
    useState<SortingSettingsProps["status"]>("stopped");
  const [isOpened, setIsOpened] =
    useState<SortingSettingsProps["isOpened"]>(false);

  const resetSortProcess = useCallback(() => {
    setValueList((prevValueList) =>
      prevValueList.map(({ value }) => ({ value, fillStyle: "#fff" }))
    );
    sortProcess.current = {
      ...defaultSortProcess,
      left: [],
      right: [],
      count: [],
      stack: [],
    };
  }, []);

  const changeSize = useCallback(
    (size: SortingSettingsProps["size"]) => {
      setSize((prevSize) => {
        if (prevSize === size) return prevSize;
        if (prevSize > size)
          setValueList((prevValueList) => [...prevValueList].slice(0, size));
        else
          setValueList((prevValueList) => [
            ...prevValueList,
            ...[...Array(size - prevSize)].map(() => ({
              value: getRandomValue(),
              fillStyle: "#fff",
            })),
          ]);
        return size;
      });
      resetSortProcess();
    },
    [resetSortProcess]
  );

  const changeSpeed = useCallback(
    (speed: SortingSettingsProps["speed"]) => setSpeed(speed),
    []
  );

  const changeType = useCallback(
    (status: SortingSettingsProps["type"]) => {
      resetSortProcess();
      setType(status);
    },
    [resetSortProcess]
  );

  const toggleSettings = useCallback(
    () => setIsOpened((wasOpened) => !wasOpened),
    []
  );

  const shuffleValueList = useCallback(() => {
    resetSortProcess();
    setValueList((prevValueList) => {
      const valueListCopy = [...prevValueList];
      for (let i = valueListCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [valueListCopy[i], valueListCopy[j]] = [
          valueListCopy[j],
          valueListCopy[i],
        ];
      }
      return valueListCopy;
    });
  }, [resetSortProcess]);

  const changeStatus = useCallback(
    (status: SortingSettingsProps["status"]) => {
      setStatus((prevStatus) => {
        if (prevStatus === "completed") resetSortProcess();
        return status;
      });
    },
    [resetSortProcess]
  );

  return (
    <SortingSettingsContext.Provider
      value={{
        type,
        size,
        speed,
        status,
        valueList,
        isOpened,
        sortProcess: sortProcess.current,
        changeSize,
        changeSpeed,
        changeStatus,
        changeType,
        shuffleValueList,
        setValueList,
        toggleSettings,
      }}
    >
      {children}
    </SortingSettingsContext.Provider>
  );
};

export default SortingSettingsProvider;
