import { useContext } from "react";
import { TranslateContext } from "@/providers";
import type { Dictionaries } from "@/helpers/types";

const useTranslate = <K extends keyof Dictionaries>(
  key: K,
): Dictionaries[K] => {
  const translateContext = useContext(TranslateContext) as Dictionaries;
  return translateContext[key];
};

export default useTranslate;
