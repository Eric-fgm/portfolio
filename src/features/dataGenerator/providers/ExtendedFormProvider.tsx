"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
import {
  useForm,
  useFieldArray,
  FormProvider as _FormProvider,
  type FieldArrayWithId,
} from "react-hook-form";

export interface FormFields {
  fields: {
    name: string;
    value: string;
    active: boolean;
    state: "idle" | "loading";
  }[];
}

export interface ExtendedFormProviderProps {
  fields: FieldArrayWithId<FormFields, "fields", "id">[];
  output: { name: string; values: string[] }[];
  setOutput: Dispatch<SetStateAction<ExtendedFormProviderProps["output"]>>;
  appendField: (name: string) => void;
  removeField: (index: number) => void;
}

const FormProvider = _FormProvider as any;

const ExtendedFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [output, setOutput] = useState<ExtendedFormProviderProps["output"]>([]);

  const methods = useForm<FormFields>();

  const { fields, append, remove } = useFieldArray({
    name: "fields",
    control: methods.control,
    shouldUnregister: true,
  });

  const appendField = (name: string) => {
    append({ name, active: true, state: "idle", value: "" });
  };

  const removeField = (index: number) => {
    remove(index);
  };

  return (
    <FormProvider
      {...methods}
      output={output}
      fields={fields}
      appendField={appendField}
      removeField={removeField}
      setOutput={setOutput}
    >
      {children}
    </FormProvider>
  );
};

export default ExtendedFormProvider;
