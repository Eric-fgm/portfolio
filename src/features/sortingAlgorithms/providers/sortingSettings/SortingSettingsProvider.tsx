"use client";
import type { SortingSettingsProps } from "@/features/sortingAlgorithms/providers/sortingSettings";
import {
  SortingSettingsContext,
  defaultProps,
} from "@/features/sortingAlgorithms/providers/sortingSettings";
import { useCallback, useState } from "react";

interface SortingSettingsProvider {
  children: React.ReactNode;
}

const SortingSettingsProvider: React.FC<SortingSettingsProvider> = ({
  children,
}) => {
  const [initialList, setInitialList] = useState<
    SortingSettingsProps["initialList"]
  >(defaultProps.initialList);
  const [type, setType] = useState<SortingSettingsProps["type"]>(
    defaultProps.type
  );
  const [speed, setSpeed] = useState<SortingSettingsProps["speed"]>(
    defaultProps.speed
  );
  const [status, setStatus] = useState<SortingSettingsProps["status"]>(
    defaultProps.status
  );
  const [isOpened, setIsOpened] = useState<SortingSettingsProps["isOpened"]>(
    defaultProps.isOpened
  );

  const changeSpeed = useCallback(
    (speed: SortingSettingsProps["speed"]) => setSpeed(speed),
    []
  );

  const changeType = useCallback(
    (status: SortingSettingsProps["type"]) => setType(status),
    []
  );

  const toggleSettings = useCallback(
    () => setIsOpened((wasOpened) => !wasOpened),
    []
  );

  const closeSettings = useCallback(() => setIsOpened(false), []);

  const changeStatus = useCallback((status: SortingSettingsProps["status"]) => {
    if (status === "started") setIsOpened(false);
    setStatus(status);
  }, []);

  return (
    <SortingSettingsContext.Provider
      value={{
        initialList,
        type,
        speed,
        status,
        isOpened,
        setInitialList,
        changeSpeed,
        changeStatus,
        changeType,
        toggleSettings,
        closeSettings,
      }}
    >
      {children}
    </SortingSettingsContext.Provider>
  );
};

export default SortingSettingsProvider;
