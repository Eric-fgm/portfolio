"use client";
import { createContext } from "react";
import type { UseSortingAlgorithmsProps } from "@/features/sortingAlgorithms/hooks";

export interface SortingSettingsProps extends UseSortingAlgorithmsProps {
  isOpened: boolean;
  changeSize: (size: SortingSettingsProps["size"]) => void;
  changeSpeed: (speed: SortingSettingsProps["speed"]) => void;
  changeStatus: (status: SortingSettingsProps["status"]) => void;
  changeType: (status: SortingSettingsProps["type"]) => void;
  toggleSettings: () => void;
}

export const defaultProps: SortingSettingsProps = {
  type: "bubbleSort",
  size: 350,
  speed: [20],
  status: "stopped",
  isOpened: false,
  changeSize: () => {},
  changeSpeed: () => {},
  changeStatus: () => {},
  changeType: () => {},
  toggleSettings: () => {},
};

const SortingSettingsContext = createContext(defaultProps);

export default SortingSettingsContext;
