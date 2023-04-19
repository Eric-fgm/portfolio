"use client";
import { SortingSettingsContext } from "@/features/sortingAlgorithms/providers";
import type { SortingSettingsProps } from "@/features/sortingAlgorithms/providers";
import { useCallback, useState } from "react";

interface SortingSettingsProvider {
  children: React.ReactNode;
}

const SortingSettingsProvider: React.FC<SortingSettingsProvider> = ({
  children,
}) => {
  const [type, setType] = useState<SortingSettingsProps["type"]>("bubbleSort");
  const [seed, setSeed] = useState<SortingSettingsProps["seed"]>(1);
  const [size, setSize] = useState<SortingSettingsProps["size"]>(125);
  const [speed, setSpeed] = useState<SortingSettingsProps["speed"]>([25]);
  const [status, setStatus] =
    useState<SortingSettingsProps["status"]>("stopped");
  const [isOpened, setIsOpened] =
    useState<SortingSettingsProps["isOpened"]>(false);

  const handleChangeSize = useCallback(
    (size: SortingSettingsProps["size"]) => setSize(size),
    []
  );
  const handleChangeSpeed = useCallback(
    (speed: SortingSettingsProps["speed"]) => setSpeed(speed),
    []
  );
  const handleChangeStatus = useCallback(
    (status: SortingSettingsProps["status"]) => setStatus(status),
    []
  );
  const handleChangeType = useCallback(
    (status: SortingSettingsProps["type"]) => setType(status),
    []
  );
  const handleChangeSeed = useCallback(
    () => setSeed((prevSeed) => prevSeed + 1),
    []
  );

  const handleToggleSettings = useCallback(
    () => setIsOpened((wasOpened) => !wasOpened),
    []
  );

  return (
    <SortingSettingsContext.Provider
      value={{
        seed,
        type,
        size,
        speed,
        status,
        isOpened,
        handleChangeSize,
        handleChangeSpeed,
        handleChangeStatus,
        handleChangeType,
        handleChangeSeed,
        handleToggleSettings,
      }}
    >
      {children}
    </SortingSettingsContext.Provider>
  );
};

export default SortingSettingsProvider;
