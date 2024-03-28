"use client";

import React from "react";
import { Button } from "@/components";
import { useExtendedForm } from "@/features/dataGenerator/providers";
import { Pin, X } from "lucide-react";
import { useTranslate } from "@/hooks";

const TopBar = () => {
  const t = useTranslate("dataGeneratorPage").topBar;

  const { output, fields, removeField } = useExtendedForm();

  return (
    <div className="flex gap-2 rounded-2xl bg-[#1b3543] p-4">
      <Button
        icon={Pin}
        text={t.save}
        className="flex-shrink-0 py-2 pl-2 pr-3.5"
        onClick={() => {
          if (output.length === 0) return;

          try {
            const lastHistory = JSON.parse(
              localStorage.getItem("HISTORY") ?? "[]",
            );
            if (lastHistory.length === 10) lastHistory.shift();

            localStorage.setItem(
              "HISTORY",
              JSON.stringify([...lastHistory, output]),
            );
          } catch (error) {
            console.log(error);
            localStorage.removeItem("HISTORY");
          }
        }}
      />
      <div className="ml-auto">
        {Boolean(fields.length) && (
          <Button
            icon={X}
            className="p-1.5"
            onClick={() =>
              fields.forEach((_, index) =>
                removeField(fields.length - index - 1),
              )
            }
          />
        )}
      </div>
    </div>
  );
};

export default TopBar;
