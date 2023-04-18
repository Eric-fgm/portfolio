"use client";
import { createContext } from "react";

export interface SortingSettingsProps {
  type:
    | "bubbleSort"
    | "selectionSort"
    | "mergeSort"
    | "quickSort"
    | "countingSort";
  size: number;
  seed: number;
  speed: number[];
  status: "stopped" | "started" | "completed";
  handleChangeSeed: () => void;
  handleChangeSize: (size: number) => void;
  handleChangeSpeed: (speed: number[]) => void;
  handleChangeStatus: (status: SortingSettingsProps["status"]) => void;
  handleChangeType: (status: SortingSettingsProps["type"]) => void;
}

const defaultProps: SortingSettingsProps = {
  type: "bubbleSort",
  size: 125,
  speed: [20],
  status: "stopped",
  seed: 1,
  handleChangeSize: () => {},
  handleChangeSpeed: () => {},
  handleChangeStatus: () => {},
  handleChangeType: () => {},
  handleChangeSeed: () => {},
};

const SortingSettingsContext = createContext(defaultProps);

export default SortingSettingsContext;
