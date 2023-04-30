"use client";
import {
  GraphSettingsContext,
  defaultSettings,
} from "@/features/graphAlgorithms/providers";
import type { GraphSettingsProps } from "@/features/graphAlgorithms/providers";
import { useCallback, useState } from "react";
import { getNodes, mazePath } from "@/features/graphAlgorithms/helpers";

interface GraphSettingsProvider {
  children: React.ReactNode;
}

const GraphSettingsProvider: React.FC<GraphSettingsProvider> = ({
  children,
}) => {
  const [graph, setGraph] = useState<GraphSettingsProps["graph"]>(null);
  const [nodes, setNodes] = useState<GraphSettingsProps["nodes"]>([]);
  const [type, setType] = useState<GraphSettingsProps["type"]>("bfs");
  const [status, setStatus] = useState<GraphSettingsProps["status"]>(
    defaultSettings.status
  );
  const [speed, setSpeed] = useState<GraphSettingsProps["speed"]>(
    defaultSettings.speed
  );

  const _setStatus = useCallback(
    (status: GraphSettingsProps["status"]) => setStatus(status),
    []
  );

  const reset = useCallback(() => {
    nodes.map((row) =>
      row.map(({ ref }) => {
        ref.classList.value = "";
        ref.style.transitionDelay = "";
        ref.style.animationDelay = "";
      })
    );
    graph && setNodes(getNodes(graph));
    _setStatus("stopped");
  }, [graph, nodes, _setStatus]);

  const _setSpeed = useCallback(
    (speed: GraphSettingsProps["speed"]) => setSpeed(speed),
    []
  );

  const _setType = useCallback(
    (type: GraphSettingsProps["type"]) => {
      reset();
      setType(type);
    },
    [reset]
  );

  const clearWall = useCallback(() => {
    if (status !== "stopped") return;
    nodes.map((row) =>
      row.map((node) => {
        const { ref, wall } = node;
        if (wall) {
          ref.classList.remove("wall");
          node.wall = false;
        }
      })
    );
  }, [nodes, status]);

  const generateMaze = useCallback(() => {
    mazePath.forEach(([x, y]) => {
      if (!nodes[x][y].visited) {
        nodes[x][y].ref.classList.add("wall");
        nodes[x][y].wall = true;
      }
    });
  }, [nodes]);

  const initGraph = useCallback((graph: SVGSVGElement) => {
    setNodes(getNodes(graph));
    setGraph(graph);
  }, []);

  return (
    <GraphSettingsContext.Provider
      value={{
        graph,
        speed,
        status,
        nodes,
        type,
        initGraph,
        reset,
        clearWall,
        setSpeed: _setSpeed,
        setStatus: _setStatus,
        setType: _setType,
        generateMaze,
      }}
    >
      {children}
    </GraphSettingsContext.Provider>
  );
};

export default GraphSettingsProvider;
