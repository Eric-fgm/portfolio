import { getDictionary } from "@/helpers/get-dictionary";
import type { Locale } from "@/helpers/i18n-config";

interface GraphsPageProps {
  params: { locale: Locale };
}

export default async function GraphsPage({
  params: { locale },
}: GraphsPageProps) {
  const t = await getDictionary(locale);

  return <main className="relative w-full h-full bg-graphspage"></main>;
}
