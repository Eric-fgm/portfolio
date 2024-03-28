"use client";
import { UseGraphAlgorithmsProps } from "@/features/graphAlgorithms/hooks";
import { createContext } from "react";

export interface GraphSettingsProps extends UseGraphAlgorithmsProps {
  isOpened: boolean;
  changeDisabled: (
    param:
      | GraphSettingsProps["disabled"]
      | ((
          nodes: GraphSettingsProps["disabled"],
        ) => GraphSettingsProps["disabled"]),
  ) => void;
  changeStatus: (status: GraphSettingsProps["status"]) => void;
  changeType: (type: GraphSettingsProps["type"]) => void;
  clearDisabled: () => void;
  generateDisabled: () => void;
  toggleSettings: () => void;
  closeSettings: () => void;
}

export const defaultProps: GraphSettingsProps = {
  isOpened: false,
  status: "stopped",
  type: "depthFirstSearch",
  disabled: {},
  changeDisabled: () => {},
  changeStatus: () => {},
  changeType: () => {},
  clearDisabled: () => {},
  generateDisabled: () => {},
  toggleSettings: () => {},
  closeSettings: () => {},
};

const GraphSettingsContext = createContext(defaultProps);

export default GraphSettingsContext;
