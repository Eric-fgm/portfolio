export type Config = typeof config;
export type LocaleList = Config["locales"];
export type Locale = Config["locales"][number];

const config = {
  defaultLocale: "pl",
  locales: ["pl", "en"],
  names: { pl: "Polski", en: "English" },
} as const;

export default config;
