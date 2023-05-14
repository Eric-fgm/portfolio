import { Container, Header } from "@/components";
import {
  ControlPanel,
  FloatingButtons,
  SortingTypeList,
  SortingVisualizer,
} from "@/features/sortingAlgorithms";
import { SortingSettingsProvider } from "@/features/sortingAlgorithms/providers/sortingSettings";
import { getDictionary } from "@/features/language";
import type { Locale } from "@/features/language";

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
        <Header subhead={t.subtitle} headline={t.title} className="py-8" />
        <SortingTypeList />
        <div className="pt-4 flex gap-4 lg:pt-12">
          <ControlPanel />
          <FloatingButtons />
          <SortingVisualizer />
        </div>
      </Container>
    </SortingSettingsProvider>
  );
}
