import { useParams } from "next/navigation";
import { config } from "@/helpers/dictionaries";
import type { Locale } from "@/helpers/types";

const useLocale = (): {
  code: Locale;
  name: (typeof config.names)[Locale];
} => {
  const { locale } = useParams();

  if ((config.locales as ReadonlyArray<string>).includes(locale as string))
    return {
      code: locale as Locale,
      name: config.names[locale as Locale],
    };

  return {
    code: config.defaultLocale,
    name: config.names[config.defaultLocale],
  };
};

export default useLocale;
