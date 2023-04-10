import { getDictionary } from "@/helpers/get-dictionary";
import type { Locale } from "@/helpers/i18n-config";

interface CaseStudiesPageProps {
  params: { locale: Locale };
}

export default async function CaseStudiesPage({
  params: { locale },
}: CaseStudiesPageProps) {
  const t = await getDictionary(locale);

  return <main className="relative w-full h-full bg-casestudiespage"></main>;
}
