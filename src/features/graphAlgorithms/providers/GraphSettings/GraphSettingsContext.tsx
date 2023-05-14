"use client";
import { Dispatch, SetStateAction, createContext } from "react";
import { UseGraphAlgorithmsProps } from "@/features/graphAlgorithms/hooks";
import type { GraphPathNode } from "../../helpers";

export interface GraphSettingsProps extends UseGraphAlgorithmsProps {
  isOpened: boolean;
  changeStatus: (point: GraphSettingsProps["status"]) => void;
  changeType: (point: GraphSettingsProps["type"]) => void;
  setDisabled: Dispatch<SetStateAction<UseGraphAlgorithmsProps["disabled"]>>;
  clearDisabled: () => void;
  generateDisabled: () => void;
  toggleSettings: () => void;
}

export const defaultProps: GraphSettingsProps = {
  isOpened: false,
  status: "stopped",
  type: "depthFirstSearch",
  disabled: {},
  changeStatus: () => {},
  changeType: () => {},
  setDisabled: () => {},
  clearDisabled: () => {},
  generateDisabled: () => {},
  toggleSettings: () => {},
};

const GraphSettingsContext = createContext(defaultProps);

export default GraphSettingsContext;
