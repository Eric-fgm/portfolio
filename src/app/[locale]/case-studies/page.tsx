import { getDictionary } from "@/features/language";
import type { Locale } from "@/features/language";

interface CaseStudiesPageProps {
  params: { locale: Locale };
}

export default async function CaseStudiesPage({
  params: { locale },
}: CaseStudiesPageProps) {
  const t = await getDictionary(locale);

  return <main className="relative w-full h-full bg-casestudiespage"></main>;
}
