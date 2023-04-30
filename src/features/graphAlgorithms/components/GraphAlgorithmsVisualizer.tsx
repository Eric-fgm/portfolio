"use client";
import { useCallback, useContext } from "react";
import { useGraphPathDraw } from "@/features/graphAlgorithms/hooks";
import { GraphSettingsContext } from "@/features/graphAlgorithms/providers";

interface GraphAlgorithmsVisualizerProps {}

const GraphAlgorithmsVisualizer: React.FC<
  GraphAlgorithmsVisualizerProps
> = () => {
  const graphSettings = useContext(GraphSettingsContext);
  const graphProps = useGraphPathDraw(graphSettings);

  const handleGraphRef = useCallback(
    (graphRef: SVGSVGElement | null) =>
      graphRef && graphSettings.initGraph(graphRef),
    []
  );

  return (
    <div className="h-[600px] bg-graphpage-secondary rounded-2xl scroll-x-sortingpage">
      <div className="relative flex min-w-[950px]">
        <svg className="absolute left-0 top-0 w-full h-full pointer-events-none">
          {Array(23)
            .fill(0)
            .map((_, index) => (
              <rect
                key={index}
                y={(index + 1) * 25 - 1}
                fill="var(--graphpage-background)"
                height={1}
                width={950}
              ></rect>
            ))}
          {Array(37)
            .fill(0)
            .map((_, index) => (
              <rect
                key={index}
                x={(index + 1) * 25 - 1}
                fill="var(--graphpage-background)"
                height={600}
                width={1}
              ></rect>
            ))}
        </svg>
        <svg
          ref={handleGraphRef}
          width="950"
          height="600"
          className="select-none"
          {...graphProps}
        >
          {Array(24)
            .fill(0)
            .map((_, row) =>
              Array(38)
                .fill(0)
                .map((_, col) => (
                  <rect
                    key={`${row}.${col}`}
                    data-row={row}
                    data-col={col}
                    x={col * 25}
                    y={row * 25}
                    width={24}
                    height={24}
                    fill="var(--graphpage-secondary-background)"
                  />
                ))
            )}
        </svg>
      </div>
    </div>
  );
};

export default GraphAlgorithmsVisualizer;
