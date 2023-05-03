"use client";
import { Wrapper } from "@/features/sortingAlgorithms";
import { useSortingDraw } from "@/features/sortingAlgorithms/hooks";

interface SortingVisualizerProps {}

const SortingVisualizer: React.FC<SortingVisualizerProps> = () => {
  const canvas = useSortingDraw();

  return (
    <div className="mx-auto px-4 overflow-hidden lg:px-0">
      <Wrapper className="relative mx-auto max-w-[980px] h-[575px] scroll-x-sortingpage">
        <div className="flex justify-center min-w-[948px] h-full">{canvas}</div>
      </Wrapper>
    </div>
  );
};

export default SortingVisualizer;
