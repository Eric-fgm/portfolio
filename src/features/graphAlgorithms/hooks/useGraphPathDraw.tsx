import { useCallback, useEffect, useMemo, useRef } from "react";
import type { GraphSettingsProps } from "@/features/graphAlgorithms/providers";
import type { Node, PathProcess } from "@/features/graphAlgorithms/helpers";
import {
  checkNeighboursOfNode,
  START_ROW,
  START_COl,
} from "@/features/graphAlgorithms/helpers";

interface GraphPathDrawProps extends GraphSettingsProps {}

const useGraphPathDraw = ({
  graph,
  nodes,
  speed,
  status,
  type,
  setStatus,
}: GraphPathDrawProps) => {
  const intervalInstance = useRef<ReturnType<typeof setInterval> | null>(null);
  const pathProcess = useMemo<PathProcess>(
    () => ({
      nodes,
      queue: nodes.length ? [nodes[START_ROW][START_COl]] : [],
      top: 0,
      latestTap: 0,
      ref: null,
    }),
    [nodes]
  );

  const drawBFSPath = useCallback(() => {
    const { queue, top } = pathProcess;
    if (top >= queue.length) return setStatus("completed");
    const node = queue[top];
    const { ref } = node;
    ref.classList.add("path");
    pathProcess.top++;
    if (checkNeighboursOfNode(node, pathProcess)) setStatus("completed");
  }, [pathProcess, setStatus]);

  const drawDFSPath = useCallback(() => {
    const { queue } = pathProcess;
    if (!queue.length) return setStatus("completed");
    const node = queue.pop() as Node;
    const { ref } = node;
    ref.classList.add("path");
    if (checkNeighboursOfNode(node, pathProcess)) setStatus("completed");
  }, [pathProcess, setStatus]);

  const handleMouseMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      event.preventDefault();
      const pageX = "touches" in event ? event.touches[0].pageX : event.pageX;
      const pageY = "touches" in event ? event.touches[0].pageY : event.pageY;

      const eventTarget = document.elementFromPoint(
        pageX,
        pageY
      ) as HTMLElement | null;

      if (
        !eventTarget ||
        eventTarget === event.currentTarget ||
        eventTarget === pathProcess.ref
      )
        return;

      pathProcess.ref = eventTarget;
      const x = eventTarget.dataset.row;
      const y = eventTarget.dataset.col;
      if (!x || !y || nodes[+x][+y].visited) return;
      if (nodes[+x][+y].wall) {
        nodes[+x][+y].wall = false;
        eventTarget.classList.remove("wall");
      } else {
        nodes[+x][+y].wall = true;
        eventTarget.classList.add("wall");
      }
    },
    [nodes]
  );

  const handleMouseDown = useCallback(() => {
    graph?.addEventListener("mousemove", handleMouseMove);
    const now = new Date().getTime();
    const timesince = now - pathProcess.latestTap;
    if (timesince < 200 && timesince > 0)
      graph?.addEventListener("touchmove", handleMouseMove);

    pathProcess.latestTap = now;
  }, [graph, handleMouseMove]);

  const handleMouseUp = useCallback(() => {
    pathProcess.ref = null;
    graph?.removeEventListener("mousemove", handleMouseMove);
    graph?.removeEventListener("touchmove", handleMouseMove);
  }, [graph, handleMouseMove]);

  useEffect(() => {
    const graphAlgorithms = {
      bfs: drawBFSPath,
      dfs: drawDFSPath,
    };
    intervalInstance.current && clearInterval(intervalInstance.current);
    if (status === "started")
      intervalInstance.current = setInterval(graphAlgorithms[type], speed);
  }, [type, status]);

  useEffect(() => {
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("touchend", handleMouseUp);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
  }, [nodes, handleMouseUp]);

  useEffect(() => {
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return { onTouchStart: handleMouseDown, onMouseDown: handleMouseDown };
};

export default useGraphPathDraw;
