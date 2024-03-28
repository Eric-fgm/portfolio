import { getDictionary } from "@/helpers/dictionaries";
import type { PageProps } from "@/helpers/types";

export default async function DynamicPage({ params: { locale } }: PageProps) {
  const t = await getDictionary(locale);

  return <main className="bg-dynamicpage relative h-full w-full"></main>;
}
