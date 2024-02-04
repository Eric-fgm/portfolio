import React, { useCallback } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Switch } from "@/components";

interface FieldItemProps {
  index: number;
  onRemove?: (index: number) => void;
}

const FieldItem: React.FC<FieldItemProps> = ({ index, onRemove }) => {
  const { register } = useFormContext();

  const handleRemove = useCallback(
    () => onRemove && onRemove(index),
    [index, onRemove]
  );

  return (
    <div className="py-2.5 flex items-center bg-[#234355] rounded-lg">
      <div className="px-4 flex-1">
        <label
          htmlFor=""
          className="text-xs text-[#a8c6d8] font-semibold block"
        >
          Typ
        </label>
        <input
          {...register(`fields.${index}.value`, {
            required: true,
          })}
          placeholder="Podaj typ"
          className="mt-0.5 bg-[transparent] text-sm font-medium w-full outline-none placeholder:text-[#658da4]"
        />
      </div>
      <div className="border-l border-[#47677a] flex-1 flex px-4">
        <div>
          <label
            htmlFor=""
            className="text-xs text-[#a8c6d8] font-semibold block"
          >
            Nazwa
          </label>
          <input
            {...register(`fields.${index}.name`, {
              required: true,
            })}
            placeholder="Podaj nazwe"
            className="mt-0.5 bg-[transparent] text-sm font-medium w-full outline-none placeholder:text-[#658da4]"
          />
        </div>
        <div className="ml-auto flex gap-2 items-center">
          <Controller
            name={`fields.${index}.state`}
            render={({ field }) => (
              <p>{field.value === "loading" ? "..." : ""}</p>
            )}
          />
          <Controller
            name={`fields.${index}.active`}
            render={({ field }) => (
              <Switch
                checked={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
          <button
            type="button"
            className="flex items-center text-xs justify-center w-6 h-6 rounded-full bg-[#3c6780]"
            onClick={handleRemove}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default FieldItem;
