import { Header } from "@/components";
import {
  ControlPanel,
  FloatingButtons,
  SortingTypeList,
  SortingVisualizer,
} from "@/features/sortingAlgorithms";
import { SortingSettingsProvider } from "@/features/sortingAlgorithms/providers";
import { getDictionary } from "@/helpers/get-dictionary";
import type { Locale } from "@/helpers/i18n-config";

interface SortingPageProps {
  params: { locale: Locale };
}

export default async function SortingPage({
  params: { locale },
}: SortingPageProps) {
  const t = await getDictionary(locale);

  return (
    <SortingSettingsProvider>
      <main className="relative pt-18 pb-4 h-full bg-sortingpage scroll-y-sortingpage">
        <Header
          subhead="Visualizer"
          headline="Sorting Algorithms"
          className="py-8"
        />
        <SortingTypeList />
        <div className="mx-auto pt-4 flex gap-4 max-w-[1220px] lg:pt-12">
          <ControlPanel />
          <FloatingButtons />
          <SortingVisualizer />
        </div>
      </main>
    </SortingSettingsProvider>
  );
}
