"use client";
import {
  COLS_NUM,
  END_COL,
  END_ROW,
  ROWS_NUM,
  START_COL,
  START_ROW,
} from "@/features/graphAlgorithms/helpers";
import { useGraphAlgorithms } from "@/features/graphAlgorithms/hooks";
import { useGraphSettings } from "@/features/graphAlgorithms/providers/graphSettings";
import { useCanvas, useEventListener } from "@/hooks";
import { SolidChevronArrow, SolidLocation } from "@/icons";
import React, { useCallback, useRef } from "react";

interface GraphVisualizerProps extends React.ComponentProps<"div"> {}

const GraphVisualizer: React.FC<GraphVisualizerProps> = ({
  className = "",
  ...props
}) => {
  const mouseEntity = useRef({
    lastTimestamp: 0,
    lastVertex: null as null | { x: number; y: number },
  });
  const animationFrameInstance =
    useRef<ReturnType<typeof requestAnimationFrame>>();

  const { disabled, status, type, changeStatus, changeDisabled } =
    useGraphSettings();
  const { nodes, path } = useGraphAlgorithms({
    disabled,
    status,
    type,
    onSuccess: useCallback(() => changeStatus("completed"), [changeStatus]),
  });

  const handleMouseMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      event.preventDefault();
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const { left, top } = target.getBoundingClientRect();

      const pageX = "touches" in event ? event.touches[0].pageX : event.pageX;
      const pageY = "touches" in event ? event.touches[0].pageY : event.pageY;

      const x = Math.max(Math.floor((pageX - left) / 25), 0);
      const y = Math.max(Math.floor((pageY - top) / 25), 0);

      if (
        x === mouseEntity.current.lastVertex?.x &&
        y === mouseEntity.current.lastVertex?.y
      )
        return;
      mouseEntity.current.lastVertex = { x, y };
      changeDisabled((disabled) => {
        if (!!disabled[`${x}.${y}`]) delete disabled[`${x}.${y}`];
        else disabled[`${x}.${y}`] = { x, y, type: "wall", size: 0 };
        return disabled;
      });
    },
    [mouseEntity, changeDisabled]
  );

  const handleMouseDown = useCallback(
    (
      event:
        | React.MouseEvent<HTMLCanvasElement>
        | React.TouchEvent<HTMLCanvasElement>
    ) => {
      if (!event.currentTarget) return;
      event.currentTarget.addEventListener("mousemove", handleMouseMove);
      const currentTimestamp = new Date().getTime();
      const timestampDiff =
        currentTimestamp - mouseEntity.current.lastTimestamp;
      if (timestampDiff < 200 && timestampDiff > 0)
        event.currentTarget.addEventListener("touchmove", handleMouseMove);

      mouseEntity.current.lastTimestamp = currentTimestamp;
    },
    [mouseEntity, handleMouseMove]
  );

  const draw = useCallback(
    (canvas: HTMLCanvasElement) => {
      animationFrameInstance.current &&
        cancelAnimationFrame(animationFrameInstance.current);
      const concatedNodes = nodes.concat(Object.values(disabled)).concat(path);
      const animation = () => {
        const canvasContext = canvas.getContext("2d");
        if (!canvasContext) return;
        canvasContext.clearRect(0, 0, 950, 600);
        let animate = false;

        concatedNodes.forEach((currentNode) => {
          if (currentNode.size < 24) {
            currentNode.size += 1.5;
            animate = true;
          }
          const { x, y, type, size } = currentNode;
          const offset = 12 - size / 2;
          let fillStyle = "#6378a1";
          if (type === "wall") fillStyle = "#394969";
          if (type === "path") fillStyle = "#d07575";
          canvasContext.fillStyle = fillStyle;
          canvasContext.beginPath();
          canvasContext.roundRect(
            x * 25 + offset,
            y * 25 + offset,
            size,
            size,
            0
          );
          canvasContext.fill();
        });

        if (animate)
          animationFrameInstance.current = requestAnimationFrame(animation);
      };
      animation();
    },
    [nodes, path, disabled]
  );

  const { canvas, reference } = useCanvas({
    draw,
    width: 950,
    height: 600,
    onMouseDown: handleMouseDown,
    onTouchStart: handleMouseDown,
  });

  const handleMouseUp = useCallback(() => {
    mouseEntity.current.lastVertex = null;
    reference.current?.removeEventListener("mousemove", handleMouseMove);
    reference.current?.removeEventListener("touchmove", handleMouseMove);
  }, [reference, handleMouseMove]);

  useEventListener("mouseup", handleMouseUp);
  useEventListener("touchend", handleMouseUp);

  return (
    <div
      className={`relative bg-graphpage-secondary rounded-2xl no-scrollbar overflow-auto ${className}`}
      {...props}
    >
      <Board />
      {canvas}
    </div>
  );
};

const Board = React.memo(() => (
  <>
    <svg width={950} height={600} className="absolute pointer-events-none">
      {[...Array(ROWS_NUM - 1)].map((_, row) => (
        <rect
          key={row}
          x={0}
          y={(row + 1) * 25 - 1}
          width={950}
          height={1}
          fill="var(--graphpage-background)"
        ></rect>
      ))}
      {[...Array(COLS_NUM - 1)].map((_, col) => (
        <rect
          key={col}
          x={(col + 1) * 25 - 1}
          y={0}
          width={1}
          height={600}
          fill="var(--graphpage-background)"
        ></rect>
      ))}
    </svg>
    <div
      className="absolute flex items-center justify-center w-6 h-6"
      style={{ left: START_COL * 25, top: START_ROW * 25 }}
    >
      <SolidChevronArrow className="absolute" />
    </div>
    <div
      className="absolute flex items-center justify-center w-6 h-6"
      style={{ left: END_COL * 25, top: END_ROW * 25 }}
    >
      <SolidLocation width={16} className="absolute" />
    </div>
  </>
));
Board.displayName = "Board";

export default GraphVisualizer;
