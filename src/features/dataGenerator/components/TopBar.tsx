"use client";

import React from "react";
import { Button } from "@/components";
import { SolidBubble } from "@/icons";
import { useExtendedForm } from "@/features/dataGenerator/providers";
import { useTranslate } from "@/features/language/providers/translate";

const TopBar = () => {
  const t = useTranslate("dataGeneratorPage").topBar;

  const { output, fields, removeField } = useExtendedForm();

  return (
    <div className="p-4 flex gap-2 bg-[#1b3543] rounded-2xl">
      <Button
        icon={SolidBubble}
        text={t.save}
        className="pl-2 pr-3.5 py-1.5 flex-shrink-0"
        onClick={() => {
          if (output.length === 0) return;

          try {
            const lastHistory = JSON.parse(
              localStorage.getItem("HISTORY") ?? "[]"
            );
            if (lastHistory.length === 10) lastHistory.shift();

            localStorage.setItem(
              "HISTORY",
              JSON.stringify([...lastHistory, output])
            );
          } catch (error) {
            console.log(error);
            localStorage.removeItem("HISTORY");
          }
        }}
      />
      {/* <Button
        icon={SolidBubble}
        text="Pokaż zapisane"
        className="pl-2 pr-3.5 py-1.5 flex-shrink-0"
      /> */}
      <div className="ml-auto">
        {Boolean(fields.length) && (
          <Button
            icon={SolidBubble}
            className="p-1.5"
            onClick={() =>
              fields.forEach((_, index) =>
                removeField(fields.length - index - 1)
              )
            }
          />
        )}
      </div>
    </div>
  );
};

export default TopBar;
