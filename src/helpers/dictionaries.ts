import { Locale } from "@/helpers/types";

export const config = {
  defaultLocale: "pl",
  locales: ["pl", "en"],
  names: { pl: "Polski", en: "English" },
} as const;

const dictionaries = {
  en: () =>
    import("@public/dictionaries/en.json").then((module) => module.default),
  pl: () =>
    import("@public/dictionaries/pl.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
