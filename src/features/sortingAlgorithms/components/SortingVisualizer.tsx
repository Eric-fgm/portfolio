"use client";
import { useCallback, useContext, useMemo, useRef } from "react";
import { Wrapper } from "@/features/sortingAlgorithms";
import { SortingSettingsContext } from "@/features/sortingAlgorithms/providers";
import { useSortingDraw } from "@/features/sortingAlgorithms/hooks";
import { initCanvas, parseSpeed } from "@/features/sortingAlgorithms/helpers";

interface SortingVisualizerProps {}

const SortingVisualizer: React.FC<SortingVisualizerProps> = () => {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  const { speed, ...restOptions } = useContext(SortingSettingsContext);
  useSortingDraw(canvas, {
    speed: parseSpeed(speed),
    ...restOptions,
  });

  const handleRef = useCallback((canvasRef: HTMLCanvasElement | null) => {
    canvas.current = canvasRef;
    canvasRef && initCanvas(canvasRef);
  }, []);

  return (
    <div className="mx-auto px-4 overflow-hidden lg:px-0">
      <Wrapper className="relative mx-auto max-w-[980px] h-[575px] scroll-x-sortingpage">
        <div className="flex justify-center min-w-[948px] h-full">
          <canvas ref={handleRef} />
        </div>
      </Wrapper>
    </div>
  );
};

export default SortingVisualizer;
