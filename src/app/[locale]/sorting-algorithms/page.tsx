import { getDictionary } from "@/helpers/get-dictionary";
import type { Locale } from "@/helpers/i18n-config";

interface SortingPageProps {
  params: { locale: Locale };
}

export default async function SortingPage({
  params: { locale },
}: SortingPageProps) {
  const t = await getDictionary(locale);

  return <main className="relative w-full h-full bg-sortingpage"></main>;
}
