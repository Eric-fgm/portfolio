"use client";
import { Wrapper } from "@/features/sortingAlgorithms";
import { useCallback, useContext, useEffect, useRef } from "react";
import { SortingSettingsContext } from "@/features/sortingAlgorithms/providers";
import { useSortingDraw } from "@/features/sortingAlgorithms/hooks";

interface SortingVisualizerProps {}

const SortingVisualizer: React.FC<SortingVisualizerProps> = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  const { speed, ...restOptions } = useContext(SortingSettingsContext);
  useSortingDraw(canvas, {
    speed: Math.round(1000 / (speed[0] || 1) / 2),
    ...restOptions,
  });

  return (
    <div className="mx-auto px-4 overflow-hidden lg:px-0">
      <Wrapper className="relative mx-auto max-w-[980px] h-[575px] scroll-x-sortingpage">
        <div className="flex justify-center min-w-[948px] h-full">
          <canvas ref={canvas} width={948} height={543} />
        </div>
      </Wrapper>
    </div>
  );
};

export default SortingVisualizer;
