import { getDictionary } from "@/helpers/dictionaries";
import { PageProps } from "@/helpers/types";

export default async function CaseStudiesPage({
  params: { locale },
}: PageProps) {
  const t = await getDictionary(locale);

  return <main className="bg-casestudiespage relative h-full w-full"></main>;
}
