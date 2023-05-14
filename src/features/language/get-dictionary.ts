"use server";
import type { Locale } from "@/features/language/config";

export type Dictionaries = Awaited<ReturnType<typeof getDictionary>>;

const dictionaries = {
  en: () =>
    import("@/features/language/dictionaries/en.json").then(
      (module) => module.default
    ),
  pl: () =>
    import("@/features/language/dictionaries/pl.json").then(
      (module) => module.default
    ),
};

const getDictionary = async (locale: Locale) => dictionaries[locale]();

export default getDictionary;
