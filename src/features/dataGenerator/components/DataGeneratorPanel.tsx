"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button, Card } from "@/components";
import { useExtendedForm } from "@/features/dataGenerator/providers";
import { useTranslate } from "@/hooks";

interface DataGeneratorPanelProps extends React.HTMLAttributes<HTMLElement> {}

const DataGeneratorPanel: React.FC<DataGeneratorPanelProps> = ({
  className = "",
  ...props
}) => {
  const t = useTranslate("dataGeneratorPage").controlPanel;

  const { register, handleSubmit, reset } = useForm();

  const { appendField } = useExtendedForm();

  return (
    <form
      {...props}
      onSubmit={handleSubmit(({ name }) => {
        appendField(name);
        reset();
      })}
    >
      <Card className="shadow-2xl xl:shadow-none">
        <fieldset>
          <h5 className="mb-2 text-xs font-medium">{t.title}</h5>
          <label className="flex items-center justify-between ">
            <span className="text-xs">{t.field.label}</span>
            <span className="w-[172px]">
              <input
                type="text"
                placeholder={t.field.placeholder}
                className="w-full rounded-lg bg-[#234355] px-3 py-2 text-sm font-medium outline-none placeholder:text-[#658da4]"
                {...register("name", { required: true })}
              />
            </span>
          </label>

          <Button type="submit" text={t.submit} className="mt-2 px-3.5 py-2" />
        </fieldset>
      </Card>
    </form>
  );
};

export default DataGeneratorPanel;
