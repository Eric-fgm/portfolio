"use client";

import { Button, Card, FormField } from "@/components";
import useMathsSettings from "../hooks/useMathsSettings";
import React from "react";
import { CirclePlus, X } from "lucide-react";
import { useTranslate } from "@/hooks";

interface MathsPanelProps {}

const MathsPanel: React.FC<MathsPanelProps> = () => {
  const t = useTranslate("mathsPage");
  const { pointFields, appendPoint, removePoint, registerField } =
    useMathsSettings();

  return (
    <div className="flex flex-col gap-4">
      {/* <Wrapper title="Funkcja" className="shadow-2xl">
        <div className="flex flex-col gap-3">
          <Button
            icon={}
            className="px-1.5 h-9"
            onClick={appendPoint}
            text="Dodaj"
          />
        </div>
      </Wrapper> */}
      <Card title={t.interpolationNodes} className="shadow-2xl xl:shadow-none">
        <div className="flex flex-col gap-3">
          <FormField name={t.points} atTop>
            <div className="flex flex-col gap-1.5">
              {pointFields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-1.5">
                  {index > 2 && (
                    <button
                      type="button"
                      className="-ml-[30px] flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sortingpage text-xs"
                      onClick={() => removePoint(index)}
                    >
                      <X width={12} height={12} />
                    </button>
                  )}
                  <input
                    type="text"
                    className="h-9 w-full rounded-lg bg-sortingpage px-3 text-sm outline-none placeholder:text-placeholder"
                    {...registerField(`listOfX.${index}.value`)}
                  />
                </div>
              ))}
            </div>
          </FormField>
          <button type="submit" className="hidden"></button>

          <Button
            icon={CirclePlus}
            className="h-9 px-2"
            onClick={appendPoint}
            text={t.add}
          />
        </div>
      </Card>
    </div>
  );
};

export default MathsPanel;
