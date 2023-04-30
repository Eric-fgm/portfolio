"use client";
import { createContext } from "react";
import type {
  GraphAlgorithmTypes,
  Node,
} from "@/features/graphAlgorithms/helpers";

export interface GraphSettingsProps {
  graph: SVGSVGElement | null;
  nodes: Node[][];
  status: "started" | "stopped" | "completed";
  type: GraphAlgorithmTypes;
  speed: number;
  initGraph: (graph: SVGSVGElement) => void;
  setStatus: (point: GraphSettingsProps["status"]) => void;
  setSpeed: (point: GraphSettingsProps["speed"]) => void;
  setType: (point: GraphSettingsProps["type"]) => void;
  generateMaze: () => void;
  clearWall: () => void;
  reset: () => void;
}

export const defaultProps: GraphSettingsProps = {
  graph: null,
  status: "stopped",
  speed: 10,
  nodes: [],
  type: "bfs",
  initGraph: () => {},
  setStatus: () => {},
  setSpeed: () => {},
  setType: () => {},
  generateMaze: () => {},
  clearWall: () => {},
  reset: () => {},
};

const GraphSettingsContext = createContext(defaultProps);

export default GraphSettingsContext;
