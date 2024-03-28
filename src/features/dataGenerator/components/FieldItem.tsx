import React, { useCallback } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Switch } from "@/components";
import { X } from "lucide-react";

interface FieldItemProps {
  index: number;
  onRemove?: (index: number) => void;
}

const FieldItem: React.FC<FieldItemProps> = ({ index, onRemove }) => {
  const { register } = useFormContext();

  const handleRemove = useCallback(
    () => onRemove && onRemove(index),
    [index, onRemove],
  );

  return (
    <div className="flex items-center rounded-lg bg-[#234355] py-2.5">
      <div className="flex-1 px-4">
        <label
          htmlFor=""
          className="block text-xs font-semibold text-[#a8c6d8]"
        >
          Typ
        </label>
        <input
          {...register(`fields.${index}.value`, {
            required: true,
          })}
          placeholder="Podaj typ"
          className="mt-0.5 w-full bg-[transparent] text-sm font-medium outline-none placeholder:text-[#658da4]"
        />
      </div>
      <div className="flex flex-1 border-l border-[#47677a] px-4">
        <div>
          <label
            htmlFor=""
            className="block text-xs font-semibold text-[#a8c6d8]"
          >
            Nazwa
          </label>
          <input
            {...register(`fields.${index}.name`, {
              required: true,
            })}
            placeholder="Podaj nazwe"
            className="mt-0.5 w-full bg-[transparent] text-sm font-medium outline-none placeholder:text-[#658da4]"
          />
        </div>
        <div className="ml-auto flex items-center gap-2">
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
            className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3c6780] text-xs"
            onClick={handleRemove}
          >
            <X width={16} height={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FieldItem;
