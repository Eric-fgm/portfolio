"use client";
import { useTranslate } from "@/features/language/providers/translate";
import { Wrapper } from "@/features/sortingAlgorithms";
import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
} from "@/features/sortingAlgorithms/helpers";
import { useSortingAlgorithms } from "@/features/sortingAlgorithms/hooks";
import { useSortingSettings } from "@/features/sortingAlgorithms/providers/sortingSettings";
import { useCanvas } from "@/hooks";
import { useCallback } from "react";

interface SortingVisualizerProps extends React.ComponentProps<"div"> {}

const SortingVisualizer: React.FC<SortingVisualizerProps> = ({
  className = "",
  ...props
}) => {
  const t = useTranslate("sortingPage");
  const { initialList, status, type, speed, changeStatus } =
    useSortingSettings();
  const { valueList, iteration } = useSortingAlgorithms({
    initialList,
    status,
    type,
    speed,
    onSuccess: () => changeStatus("completed"),
  });

  const draw = useCallback(
    (canvas: HTMLCanvasElement) => {
      const valueListLength = valueList.length;
      const canvasContext = canvas.getContext("2d");
      if (!canvasContext) return;
      canvasContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      for (let i = 0; i < valueListLength; i++) {
        const { value, fillStyle } = valueList[i];
        canvasContext.fillStyle = fillStyle;
        canvasContext.beginPath();
        canvasContext.roundRect(
          (CANVAS_WIDTH / valueListLength) * i,
          CANVAS_HEIGHT - CANVAS_HEIGHT * (value / 100),
          CANVAS_WIDTH / valueListLength - 1,
          CANVAS_HEIGHT * (value / 100),
          6
        );
        canvasContext.fill();
      }
    },
    [valueList]
  );

  const { canvas } = useCanvas({
    draw,
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
  });

  return (
    <Wrapper
      className={`relative mx-auto max-w-full no-scrollbar overflow-x-auto ${className}`}
      {...props}
    >
      <div className="sticky text-tiny">
        <div className="absolute -top-1 flex items-center whitespace-nowrap">
          <span>
            {t.settings.size}: {initialList.length}
          </span>
          <span className="mx-1.5 inline-block h-3 w-px bg-[#fff] opacity-30"></span>
          <span>
            {t.settings.speed}: {speed} ms
          </span>
          <span className="mx-1.5 inline-block h-3 w-px bg-[#fff] opacity-30"></span>
          <span>
            {t.settings.iteration}: {iteration}
          </span>
        </div>
      </div>
      {canvas}
    </Wrapper>
  );
};

export default SortingVisualizer;
