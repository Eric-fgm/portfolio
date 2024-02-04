"use client";

import { UseFormReturn, useFormContext } from "react-hook-form";
import {
  type FormFields,
  type ExtendedFormProviderProps,
} from "@/features/dataGenerator/providers";

const useExtendedForm = () =>
  useFormContext() as UseFormReturn<FormFields> & ExtendedFormProviderProps;

export default useExtendedForm;
