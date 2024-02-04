"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components";
import { useExtendedForm } from "@/features/dataGenerator/providers";
import { useTranslate } from "@/features/language/providers/translate";

interface ControlPanelProps extends React.HTMLAttributes<HTMLElement> {}

const ControlPanel: React.FC<ControlPanelProps> = ({
  className = "",
  ...props
}) => {
  const t = useTranslate("dataGeneratorPage").controlPanel;

  const { register, handleSubmit, reset } = useForm();

  const { appendField } = useExtendedForm();

  return (
    <form
      {...props}
      className={`p-4 bg-[#1b3543] rounded-2xl w-full ${className}`}
      onSubmit={handleSubmit(({ name }) => {
        appendField(name);
        reset();
      })}
    >
      <fieldset>
        <h5 className="mb-2 text-xs font-medium">{t.title}</h5>
        <label className="flex items-center justify-between ">
          <span className="text-xs">{t.field.label}</span>
          <span className="w-[172px]">
            <input
              type="text"
              placeholder={t.field.placeholder}
              className="px-3 py-2 text-sm font-medium bg-[#234355] rounded-lg w-full outline-none placeholder:text-[#658da4]"
              {...register("name", { required: true })}
            />
          </span>
        </label>

        <Button type="submit" text={t.submit} className="mt-2 px-3.5 py-2" />
      </fieldset>
    </form>
  );
};

export default ControlPanel;
