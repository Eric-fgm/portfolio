import { getDictionary } from "@/features/language";
import type { Locale } from "@/features/language";

interface PhysicsPageProps {
  params: { locale: Locale };
}

export default async function PhysicsPage({
  params: { locale },
}: PhysicsPageProps) {
  const t = await getDictionary(locale);

  return <main className="relative w-full h-full bg-physicspage"></main>;
}
