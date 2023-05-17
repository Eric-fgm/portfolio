"use client";
import {
  COLS_NUM,
  GraphPathNode,
  ROWS_NUM,
} from "@/features/graphAlgorithms/helpers";
import {
  UseGraphAlgorithmsProps,
  useGraphAlgorithms,
} from "@/features/graphAlgorithms/hooks";
import { useGraphSettings } from "@/features/graphAlgorithms/providers/graphSettings";
import { useEventListener } from "@/hooks";
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

  const { disabled, status, type, changeStatus, setDisabled } =
    useGraphSettings();
  const { nodes, path } = useGraphAlgorithms({
    disabled,
    status,
    type,
    changeStatus,
  });

  const handleMouseMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      event.preventDefault();
      const target = event.target as HTMLElement | null;
      const pageX = "touches" in event ? event.touches[0].pageX : event.pageX;
      const pageY = "touches" in event ? event.touches[0].pageY : event.pageY;
      if (!target) return;

      const { left, top } = target.getBoundingClientRect();
      const y = Math.max(Math.floor((pageX - left) / 25), 0);
      const x = Math.max(Math.floor((pageY - top) / 25), 0);

      if (
        x === mouseEntity.current.lastVertex?.x &&
        y === mouseEntity.current.lastVertex?.y
      )
        return;
      mouseEntity.current.lastVertex = { x, y };
      setDisabled((prevDisabled) => {
        const disabledCopy = { ...prevDisabled };
        if (!!disabledCopy[`${x}.${y}`]) delete disabledCopy[`${x}.${y}`];
        else disabledCopy[`${x}.${y}`] = { x, y };
        return disabledCopy;
      });
    },
    [mouseEntity, setDisabled]
  );

  const handleMouseDown = useCallback(() => {
    window.addEventListener("mousemove", handleMouseMove);
    const currentTimestamp = new Date().getTime();
    const timestampDiff = currentTimestamp - mouseEntity.current.lastTimestamp;
    if (timestampDiff < 200 && timestampDiff > 0)
      window.addEventListener("touchmove", handleMouseMove);

    mouseEntity.current.lastTimestamp = currentTimestamp;
  }, [mouseEntity, handleMouseMove]);

  const handleMouseUp = useCallback(() => {
    mouseEntity.current.lastVertex = null;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("touchmove", handleMouseMove);
  }, [handleMouseMove]);

  useEventListener("mouseup", handleMouseUp);
  useEventListener("touchend", handleMouseUp);

  return (
    <div
      className={`relative h-[600px] rounded-2xl no-scrollbar overflow-auto ${className}`}
      {...props}
    >
      <div className="flex min-w-[950px]">
        <Board />
        <svg
          width={950}
          height={600}
          className="bg-graphpage-secondary rounded-2xl"
          {...(status !== "started" && {
            onMouseDown: handleMouseDown,
            onTouchStart: handleMouseUp,
          })}
        >
          {nodes.map(({ x, y }) => (
            <rect
              key={`${x}:${y}`}
              x={y * 25 + 1}
              y={x * 25 + 1}
              width={24}
              height={24}
              fill="#6378a1"
              className="scale-animate pointer-events-none"
            ></rect>
          ))}
          <Disabled disabled={disabled} />
          <Path path={path} />
        </svg>
      </div>
    </div>
  );
};

const Path = React.memo(({ path }: { path: GraphPathNode[] }) => (
  <>
    {path.map(({ x, y }, index) => (
      <rect
        key={`${x}:${y}`}
        x={y * 25 + 1}
        y={x * 25 + 1}
        width={24}
        height={24}
        fill="#d07575"
        style={{
          animationDelay: (path.length - index) * 10 + "ms",
        }}
        className="opacity-0 scale-animate pointer-events-none"
      ></rect>
    ))}
  </>
));

Path.displayName = "Path";

const Disabled = React.memo(
  ({ disabled }: { disabled: UseGraphAlgorithmsProps["disabled"] }) => (
    <>
      {Object.values(disabled).map(({ x, y }) => (
        <rect
          key={`${x}:${y}`}
          x={y * 25 + 1}
          y={x * 25 + 1}
          width={24}
          height={24}
          fill={"#394969"}
          className="scale-animate pointer-events-none"
        ></rect>
      ))}
    </>
  )
);

Disabled.displayName = "Disabled";

const Board = React.memo(() => (
  <svg width={950} height={600} className="absolute pointer-events-none">
    {[...Array(ROWS_NUM - 1)].map((_, row) => (
      <rect
        key={row}
        x={0}
        y={(row + 1) * 25}
        width={950}
        height={1}
        fill="var(--graphpage-background)"
      ></rect>
    ))}
    {[...Array(COLS_NUM - 1)].map((_, col) => (
      <rect
        key={col}
        x={(col + 1) * 25}
        y={0}
        width={1}
        height={600}
        fill="var(--graphpage-background)"
      ></rect>
    ))}
  </svg>
));
Board.displayName = "Board";

export default GraphVisualizer;
