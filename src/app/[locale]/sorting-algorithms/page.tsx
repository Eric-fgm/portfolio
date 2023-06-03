import { Container, Header } from "@/components";
import type { Locale } from "@/features/language";
import { getDictionary } from "@/features/language";
import {
  ControlPanel,
  SortingAlgorithmList,
  SortingVisualizer,
} from "@/features/sortingAlgorithms";
import { SortingSettingsProvider } from "@/features/sortingAlgorithms/providers/sortingSettings";

interface SortingPageProps {
  params: { locale: Locale };
}

export default async function SortingPage({
  params: { locale },
}: SortingPageProps) {
  const t = (await getDictionary(locale))["sortingPage"];

  return (
    <SortingSettingsProvider>
      <Container className="bg-sortingpage">
        <Header
          subhead={t.subtitle}
          headline={t.title}
          className="py-8 slide-top-in"
        />
        <SortingAlgorithmList className="slide-top-in animation-delay-150" />
        <div className="pt-4 flex gap-4 lg:pt-12">
          <ControlPanel className="slide-top-in-xl animation-delay-300" />
          <SortingVisualizer className="slide-top-in animation-delay-300" />
        </div>
      </Container>
    </SortingSettingsProvider>
  );
}
