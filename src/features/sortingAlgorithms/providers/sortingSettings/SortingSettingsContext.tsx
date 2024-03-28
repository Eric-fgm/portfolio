"use client";
import type { UseSortingAlgorithmsProps } from "@/features/sortingAlgorithms/hooks";
import { Dispatch, SetStateAction, createContext } from "react";
import { generateRandomValues } from "../../helpers";

export interface SortingSettingsProps extends UseSortingAlgorithmsProps {
  setInitialList: Dispatch<SetStateAction<SortingSettingsProps["initialList"]>>;
  changeSpeed: (speed: SortingSettingsProps["speed"]) => void;
  changeStatus: (status: SortingSettingsProps["status"]) => void;
  changeType: (type: SortingSettingsProps["type"]) => void;
}

export const defaultProps: SortingSettingsProps = {
  initialList: generateRandomValues(350),
  type: "bubbleSort",
  speed: [20],
  status: "stopped",
  setInitialList: () => {},
  changeSpeed: () => {},
  changeStatus: () => {},
  changeType: () => {},
};

const SortingSettingsContext = createContext(defaultProps);

export default SortingSettingsContext;
