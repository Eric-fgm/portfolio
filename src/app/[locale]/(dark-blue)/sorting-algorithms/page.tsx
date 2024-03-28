import { Header } from "@/components";
import { ContentLayout } from "@/features/layouts";
import {
  SortingPanel,
  SortingAlgorithmList,
  SortingVisualizer,
  SortingSettingsProvider,
} from "@/features/sortingAlgorithms";
import { getDictionary } from "@/helpers/dictionaries";
import type { PageProps } from "@/helpers/types";

export default async function Page({ params: { locale } }: PageProps) {
  const t = (await getDictionary(locale))["sortingPage"];

  return (
    <SortingSettingsProvider>
      <Header
        subhead={t.subtitle}
        headline={t.title}
        className="slide-top-in py-8"
      />
      <SortingAlgorithmList className="slide-top-in animation-delay-150" />
      <ContentLayout
        aside={<SortingPanel />}
        className="slide-top-in mt-4 animation-delay-300"
      >
        <SortingVisualizer />
      </ContentLayout>
    </SortingSettingsProvider>
  );
}
