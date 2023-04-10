import { getDictionary } from "@/helpers/get-dictionary";
import type { Locale } from "@/helpers/i18n-config";

interface DynamicPageProps {
  params: { locale: Locale };
}

export default async function DynamicPage({
  params: { locale },
}: DynamicPageProps) {
  const t = await getDictionary(locale);

  return <main className="relative w-full h-full bg-dynamicpage"></main>;
}
