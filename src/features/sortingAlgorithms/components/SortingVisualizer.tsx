"use client";
import { Wrapper } from "@/features/sortingAlgorithms";
import { useSortingAlgorithms } from "@/features/sortingAlgorithms/hooks";
import { useSortingSettings } from "@/features/sortingAlgorithms/providers/sortingSettings";
import { useCallback } from "react";
import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
} from "@/features/sortingAlgorithms/helpers";
import { useCanvas } from "@/hooks";
import { useTranslate } from "@/features/language/providers/translate";

interface SortingVisualizerProps {}

const SortingVisualizer: React.FC<SortingVisualizerProps> = () => {
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
    <div className="mx-auto overflow-hidden lg:px-0">
      <Wrapper className="relative mx-auto max-w-[980px] h-[575px] scroll-x-sortingpage">
        <div className="flex justify-center min-w-[948px] h-full">
          <div className="sticky -mt-1 top-0 left-0 text-tiny">
            <div className="absolute flex items-center whitespace-nowrap">
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
        </div>
      </Wrapper>
    </div>
  );
};

export default SortingVisualizer;
