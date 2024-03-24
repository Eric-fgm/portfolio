"use client";

import { Button, FormField } from "@/components";
import Wrapper from "./Wrapper";
import { useTranslate } from "@/features/language/providers/translate";
import useMathsSettings from "../hooks/useMathsSettings";
import React from "react";
import { SolidCount } from "@/icons";

interface ControlPanelProps {}

const ControlPanel: React.FC<ControlPanelProps> = () => {
  const t = useTranslate("mathsPage");
  const { pointFields, appendPoint, removePoint, registerField } =
    useMathsSettings();

  return (
    <div className="flex flex-col gap-4">
      {/* <Wrapper title="Funkcja" className="shadow-2xl">
        <div className="flex flex-col gap-3">
          <Button
            icon={SolidCount}
            className="px-1.5 h-9"
            onClick={appendPoint}
            text="Dodaj"
          />
        </div>
      </Wrapper> */}
      <Wrapper
        title={t.interpolationNodes}
        className="shadow-2xl xl:shadow-none"
      >
        <div className="flex flex-col gap-3">
          <FormField name={t.points} atTop>
            <div className="flex flex-col gap-1.5">
              {pointFields.map((field, index) => (
                <div key={field.id} className="flex gap-1.5 items-center">
                  {index > 2 && (
                    <button
                      type="button"
                      className="-ml-[30px] flex items-center text-xs flex-shrink-0 justify-center w-6 h-6 rounded-full bg-sortingpage"
                      onClick={() => removePoint(index)}
                    >
                      x
                    </button>
                  )}
                  <input
                    type="text"
                    className="px-3 h-9 text-sm bg-sortingpage rounded-lg outline-none placeholder:text-placeholder w-full"
                    {...registerField(`listOfX.${index}.value`, {
                      valueAsNumber: true,
                      required: true,
                    })}
                  />
                </div>
              ))}
            </div>
          </FormField>
          <button type="submit" className="hidden"></button>

          <Button
            icon={SolidCount}
            className="px-1.5 h-9"
            onClick={appendPoint}
            text={t.add}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default ControlPanel;
