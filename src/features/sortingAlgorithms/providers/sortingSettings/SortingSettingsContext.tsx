"use client";
import type { UseSortingAlgorithmsProps } from "@/features/sortingAlgorithms/hooks";
import { Dispatch, SetStateAction, createContext } from "react";
import { generateRandomValues } from "../../helpers";

export interface SortingSettingsProps extends UseSortingAlgorithmsProps {
  isOpened: boolean;
  setInitialList: Dispatch<SetStateAction<SortingSettingsProps["initialList"]>>;
  changeSpeed: (speed: SortingSettingsProps["speed"]) => void;
  changeStatus: (status: SortingSettingsProps["status"]) => void;
  changeType: (type: SortingSettingsProps["type"]) => void;
  toggleSettings: () => void;
  closeSettings: () => void;
}

export const defaultProps: SortingSettingsProps = {
  initialList: generateRandomValues(350),
  type: "bubbleSort",
  speed: [20],
  status: "stopped",
  isOpened: false,
  setInitialList: () => {},
  changeSpeed: () => {},
  changeStatus: () => {},
  changeType: () => {},
  toggleSettings: () => {},
  closeSettings: () => {},
};

const SortingSettingsContext = createContext(defaultProps);

export default SortingSettingsContext;
