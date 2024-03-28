"use client";

import { Button } from "@/components";
import { fetchGeneratedData } from "@/features/dataGenerator/api";
import { useExtendedForm } from "@/features/dataGenerator/providers";
import { DataBox, FieldItem } from "@/features/dataGenerator/components";
import { useTranslate } from "@/hooks";

const FieldsForm = () => {
  const {
    output,
    fields,
    formState,
    setValue,
    setOutput,
    handleSubmit,
    removeField,
  } = useExtendedForm();

  const t = useTranslate("dataGeneratorPage").formFields;

  const submit = handleSubmit(async ({ fields }) => {
    fields.forEach(
      ({ active }, index) =>
        active && setValue(`fields.${index}.state`, "loading"),
    );

    for (let index = 0; index < fields.length; index++) {
      const { name, value, active } = fields[index];
      if (!active) continue;
      const result = await fetchGeneratedData(value);
      if (result.length === 10) {
        setOutput((prevOutput) => [...prevOutput, { name, values: result }]);
      }
      setValue(`fields.${index}.state`, "idle");
    }
  });

  return (
    <>
      <form onSubmit={submit}>
        <fieldset
          className="rounded-2xl bg-[#1b3543] p-4"
          disabled={formState.isSubmitting}
        >
          {Boolean(fields.length) ? (
            <div className="flex flex-col gap-4">
              {fields.map((field, index) => (
                <FieldItem
                  key={field.id}
                  index={index}
                  onRemove={removeField}
                />
              ))}
              <Button
                type="submit"
                text="Generuj"
                className="self-start px-3.5 py-2"
              />
            </div>
          ) : (
            <p className="py-4 text-center text-sm leading-6 text-[#9cbbcc]">
              {t.placeholder.top} <br />
              {t.placeholder.bottom}
            </p>
          )}
        </fieldset>
      </form>
      {Boolean(output.length) && (
        <DataBox
          data={output}
          onChipClick={(name) =>
            setOutput(output.filter((v) => v.name !== name))
          }
        />
      )}
    </>
  );
};

export default FieldsForm;
