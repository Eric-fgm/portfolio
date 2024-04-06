"use client";

import { Mafs, Coordinates, Plot, Polygon } from "mafs";
import useMathsQuadrature from "../hooks/useMathsQuadrature";
import { useMemo } from "react";

interface MathsQuadratureVisualizerProps {}

const equation = (x: number) => 1 / (1 / 6 + (1 / 16) * x * x);

const MathsQuadratureVisualizer: React.FC<
  MathsQuadratureVisualizerProps
> = () => {
  const { lowerBound, upperBound, partitionCount, algorithm } =
    useMathsQuadrature();

  const polygonsPoints = useMemo(() => {
    const lowerBoundNumeric = parseFloat(lowerBound);
    const upperBoundNumeric = parseFloat(upperBound);
    const partitionCountNumeric = parseInt(partitionCount);
    if (
      isNaN(lowerBoundNumeric) ||
      isNaN(upperBoundNumeric) ||
      isNaN(partitionCountNumeric)
    ) {
      return [];
    }

    const output = [];
    const partitionLength =
      (upperBoundNumeric - lowerBoundNumeric) / partitionCountNumeric;
    for (let i = 0; i < partitionCountNumeric; i++) {
      const startX = i * partitionLength + lowerBoundNumeric;
      const endX = (i + 1) * partitionLength + lowerBoundNumeric;
      if (algorithm === "rectangle") {
        const midX = (endX + startX) / 2;
        output.push({
          points: [
            [startX, 0],
            [startX, equation(midX)],
            [endX, equation(midX)],
            [endX, 0],
          ],
          color: "#c54f6b",
        });
      } else if (algorithm === "trapeze") {
        output.push({
          points: [
            [startX, 0],
            [startX, equation(startX)],
            [endX, equation(endX)],
            [endX, 0],
          ] as any,
          color: "#c54f6b",
        });
      }
    }
    return output;
  }, [lowerBound, upperBound, partitionCount, algorithm]);

  return (
    <div className="overflow-hidden rounded-2xl">
      <Mafs zoom={{ min: 0.5, max: 4 }} viewBox={{ x: [-12, 12] }} height={564}>
        <Coordinates.Cartesian subdivisions={10} />
        <Plot.OfX y={equation} />
        {polygonsPoints.map((props, index) => (
          <Polygon key={index} {...props} />
        ))}
      </Mafs>
    </div>
  );
};

export default MathsQuadratureVisualizer;
