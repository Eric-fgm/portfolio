"use client";
import { createContext } from "react";
import type { SortTypes } from "@/features/sortingAlgorithms/helpers";

export interface SortingSettingsProps {
  type: SortTypes;
  size: number;
  seed: number;
  speed: number[];
  status: "stopped" | "started" | "completed";
  isOpened: boolean;
  handleChangeSeed: () => void;
  handleChangeSize: (size: number) => void;
  handleChangeSpeed: (speed: number[]) => void;
  handleChangeStatus: (status: SortingSettingsProps["status"]) => void;
  handleChangeType: (status: SortingSettingsProps["type"]) => void;
  handleToggleSettings: () => void;
}

const defaultProps: SortingSettingsProps = {
  type: "bubbleSort",
  size: 350,
  speed: [20],
  status: "stopped",
  seed: 1,
  isOpened: false,
  handleChangeSize: () => {},
  handleChangeSpeed: () => {},
  handleChangeStatus: () => {},
  handleChangeType: () => {},
  handleChangeSeed: () => {},
  handleToggleSettings: () => {},
};

const SortingSettingsContext = createContext(defaultProps);

export default SortingSettingsContext;
