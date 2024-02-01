"use client";

import { useMemo, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import JSONPretty from "react-json-pretty";
import { Button } from "@/components";
import { SolidBubble } from "@/icons";

interface FieldsFormProps {}

const FieldsForm: React.FC<FieldsFormProps> = () => {
  const { formState, control, register, setValue, handleSubmit } = useForm<{
    fields: {
      name: string;
      value?: string;
      active: boolean;
      state: "loading" | "idle";
    }[];
    overwrite: boolean;
  }>({ defaultValues: { overwrite: false } });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    reset: reset2,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
    shouldUnregister: true,
  });

  const [output, setOutput] = useState<{ name: string; values: string[] }[]>(
    []
  );

  const data = useMemo(
    () =>
      [...Array(10)].map((_, index) => {
        const s: Record<string, string> = {};
        output.forEach(({ name, values }) => (s[name] = values[index]));
        return s;
      }),
    [output]
  );

  return (
    <>
      <div className="flex items-start gap-4">
        <form
          onSubmit={handleSubmit2(({ name }) => {
            append({ name, active: true, state: "idle" });
            reset2();
          })}
          className="p-4 w-64 bg-[#1b3543] rounded-2xl"
        >
          <fieldset disabled={formState.isSubmitting}>
            <h5 className="mb-2 text-xs font-medium">USTAWIENIA</h5>
            <label className="flex items-center justify-between ">
              <span className="text-xs">Nazwa</span>
              <span className="w-[172px]">
                <input
                  type="text"
                  placeholder="Wymagane"
                  className="px-3 py-2 text-sm font-medium bg-[#234355] rounded-lg w-full outline-none placeholder:text-[#658da4]"
                  {...register2("name", { required: true })}
                />
              </span>
            </label>

            <Button
              type="submit"
              text="Dodaj"
              className="mt-2 px-3.5 py-2"
              disabled={formState.isSubmitting}
            />
          </fieldset>
        </form>
        <div className="flex-1 flex flex-col gap-4">
          <div className="p-4 flex gap-8 bg-[#1b3543] rounded-2xl">
            <Button
              icon={SolidBubble}
              text="Pokaż historie"
              className="pl-2 pr-3.5 py-1.5 flex-shrink-0"
            />
            <div className="ml-auto">
              <Button icon={SolidBubble} className="p-1.5" />
            </div>
          </div>
          <form
            className="p-4 bg-[#1b3543] rounded-2xl"
            onSubmit={handleSubmit(async (data) => {
              if (data.overwrite) setOutput([]);

              fields.forEach(
                ({ active }, index) =>
                  active && setValue(`fields.${index}.state`, "loading")
              );

              for (let index = 0; index < data.fields.length; index++) {
                const { name, value, active } = data.fields[index];
                if (!active) continue;
                const response = await fetch(`/api?payload=${value}`);
                const result = await response.json();
                if (result.data.length === 10) {
                  setOutput((prevOutput) => [
                    ...prevOutput,
                    { name, values: result.data },
                  ]);
                }
                setValue(`fields.${index}.state`, "idle");
              }
            })}
          >
            {Boolean(fields.length) ? (
              <fieldset disabled={formState.isSubmitting}>
                <div className="flex flex-col gap-4">
                  {fields.map((field, index) => (
                    <div
                      key={field.id}
                      className="py-2.5 flex items-center bg-[#234355] rounded-lg"
                    >
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
                          <p className="mt-0.5 text-sm font-medium">
                            {field.name}
                          </p>
                        </div>
                        <div className="ml-auto">
                          <Controller
                            name={`fields.${index}.state`}
                            control={control}
                            render={({ field }) => (
                              <p>
                                {field.value === "loading" ? "loading..." : ""}
                              </p>
                            )}
                          />
                          <input
                            type="checkbox"
                            {...register(`fields.${index}.active`)}
                          />
                          <button type="button" onClick={() => remove(index)}>
                            x
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <input type="checkbox" {...register("overwrite")} />
                  <Button
                    type="submit"
                    text="Generuj"
                    className="mt-4 px-3.5 py-2"
                  />
                </div>
              </fieldset>
            ) : (
              <>
                <p className="pt-4 text-center text-sm text-[#9cbbcc]">
                  Brak wybranych pól.
                </p>
                <p className="pt-2 pb-4 text-center text-sm text-[#9cbbcc]">
                  Dodaj pole w pasku zadań.
                </p>
              </>
            )}
          </form>
          {Boolean(data.length) && (
            <div className="p-4 flex gap-8 flex-wrap bg-[#1b3543] rounded-2xl">
              <JSONPretty data={data}></JSONPretty>
              {/* <code>{JSON.stringify(data)}</code> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FieldsForm;
