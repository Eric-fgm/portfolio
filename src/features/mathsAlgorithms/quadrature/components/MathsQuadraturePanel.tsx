"use client";

import React from "react";
import { Card, FormField } from "@/components";
import { useTranslate } from "@/hooks";
import useMathsQuadrature from "@/features/mathsAlgorithms/quadrature/hooks/useMathsQuadrature";

interface MathsQuadraturePanelProps {}

const MathsQuadraturePanel: React.FC<MathsQuadraturePanelProps> = () => {
  const t = useTranslate("mathsPage").quadrature;
  const {
    lowerBound,
    upperBound,
    partitionCount,
    setLowerBound,
    setUpperBound,
    setPartitionCount,
  } = useMathsQuadrature();

  return (
    <div className="flex flex-col gap-4">
      <Card title={t.panelTitle} className="shadow-2xl xl:shadow-none">
        <div className="flex flex-col gap-3">
          <FormField name={t.boundary} atTop>
            <div className="flex flex-col gap-1.5">
              <input
                type="text"
                className="h-9 w-full rounded-lg bg-sortingpage px-3 text-sm outline-none placeholder:text-placeholder"
                value={lowerBound}
                onChange={(event) => setLowerBound(event.target.value)}
              />
              <input
                type="text"
                className="h-9 w-full rounded-lg bg-sortingpage px-3 text-sm outline-none placeholder:text-placeholder"
                value={upperBound}
                onChange={(event) => setUpperBound(event.target.value)}
              />
            </div>
          </FormField>
          <FormField name={t.patition}>
            <input
              type="text"
              className="h-9 w-full rounded-lg bg-sortingpage px-3 text-sm outline-none placeholder:text-placeholder"
              value={partitionCount}
              onChange={(event) => setPartitionCount(event.target.value)}
            />
          </FormField>
        </div>
      </Card>
    </div>
  );
};

export default MathsQuadraturePanel;
