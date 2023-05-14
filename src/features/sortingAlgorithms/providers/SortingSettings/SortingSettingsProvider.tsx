"use client";
import type { SortingSettingsProps } from "@/features/sortingAlgorithms/providers/sortingSettings";
import {
  SortingSettingsContext,
  defaultProps,
} from "@/features/sortingAlgorithms/providers/sortingSettings";
import { useCallback, useRef, useState } from "react";

interface SortingSettingsProvider {
  children: React.ReactNode;
}

const SortingSettingsProvider: React.FC<SortingSettingsProvider> = ({
  children,
}) => {
  const [type, setType] = useState<SortingSettingsProps["type"]>(
    defaultProps.type
  );
  const [size, setSize] = useState<SortingSettingsProps["size"]>(
    defaultProps.size
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

  const changeSize = useCallback(
    (size: SortingSettingsProps["size"]) => setSize(size),
    []
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

  const changeStatus = useCallback(
    (status: SortingSettingsProps["status"]) => setStatus(status),
    []
  );

  return (
    <SortingSettingsContext.Provider
      value={{
        type,
        size,
        speed,
        status,
        isOpened,
        changeSize,
        changeSpeed,
        changeStatus,
        changeType,
        toggleSettings,
      }}
    >
      {children}
    </SortingSettingsContext.Provider>
  );
};

export default SortingSettingsProvider;
