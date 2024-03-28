import { getDictionary } from "@/helpers/dictionaries";
import type { PageProps } from "@/helpers/types";

export default async function PhysicsPage({ params: { locale } }: PageProps) {
  const t = await getDictionary(locale);

  return <main className="relative h-full w-full bg-physicspage"></main>;
}
