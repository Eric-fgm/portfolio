"use client";
import {
  SortProcess,
  SortTypes,
  defaultSortProcess,
} from "@/features/sortingAlgorithms/helpers";
import { Dispatch, SetStateAction, createContext } from "react";

export interface SortingSettingsProps {
  type: SortTypes;
  valueList: { value: number; fillStyle: string }[];
  size: number;
  speed: number[];
  status: "stopped" | "started" | "completed";
  isOpened: boolean;
  sortProcess: SortProcess;
  changeSize: (size: SortingSettingsProps["size"]) => void;
  changeSpeed: (speed: SortingSettingsProps["speed"]) => void;
  changeStatus: (status: SortingSettingsProps["status"]) => void;
  changeType: (status: SortingSettingsProps["type"]) => void;
  shuffleValueList: () => void;
  setValueList: Dispatch<SetStateAction<SortingSettingsProps["valueList"]>>;
  toggleSettings: () => void;
}

const defaultProps: SortingSettingsProps = {
  type: "bubbleSort",
  valueList: [],
  size: 350,
  speed: [20],
  status: "stopped",
  isOpened: false,
  sortProcess: defaultSortProcess,
  changeSize: () => {},
  changeSpeed: () => {},
  changeStatus: () => {},
  changeType: () => {},
  shuffleValueList: () => {},
  setValueList: () => {},
  toggleSettings: () => {},
};

const SortingSettingsContext = createContext(defaultProps);

export default SortingSettingsContext;
