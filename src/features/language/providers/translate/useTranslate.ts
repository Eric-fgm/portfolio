import { useContext } from "react";
import { TranslateContext } from "@/features/language/providers/translate";
import type { Dictionaries } from "@/features/language";

const useTranslate = <K extends keyof Dictionaries>(
  key: K
): Dictionaries[K] => {
  const translateContext = useContext(TranslateContext) as Dictionaries;
  return translateContext[key];
};

export default useTranslate;
