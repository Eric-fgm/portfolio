import { getDictionary } from "@/features/language";
import type { Locale } from "@/features/language";

interface DynamicPageProps {
  params: { locale: Locale };
}

export default async function DynamicPage({
  params: { locale },
}: DynamicPageProps) {
  const t = await getDictionary(locale);

  return <main className="relative w-full h-full bg-dynamicpage"></main>;
}
