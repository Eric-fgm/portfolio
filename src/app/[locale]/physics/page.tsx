import { getDictionary } from "@/helpers/get-dictionary";
import type { Locale } from "@/helpers/i18n-config";

interface PhysicsPageProps {
  params: { locale: Locale };
}

export default async function PhysicsPage({
  params: { locale },
}: PhysicsPageProps) {
  const t = await getDictionary(locale);

  return <main className="relative w-full h-full bg-physicspage"></main>;
}
