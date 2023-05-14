import { useParams } from "next/navigation";
import { config } from "@/features/language";
import type { Locale } from "@/features/language";

const useLocale = (): { code: Locale; name: (typeof config.names)[Locale] } => {
  const { locale } = useParams();

  if ((config.locales as ReadonlyArray<string>).includes(locale))
    return { code: locale as Locale, name: config.names[locale as Locale] };

  return {
    code: config.defaultLocale,
    name: config.names[config.defaultLocale],
  };
};

export default useLocale;
