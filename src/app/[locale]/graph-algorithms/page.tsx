import { Header } from "@/components";
import {
  GraphAlgorithmsVisualizer,
  Sidebar,
  Topbar,
} from "@/features/graphAlgorithms";
import { GraphSettingsProvider } from "@/features/graphAlgorithms/providers";
import { getDictionary } from "@/helpers/get-dictionary";
import type { Locale } from "@/helpers/i18n-config";

interface graphpageProps {
  params: { locale: Locale };
}

export default async function graphpage({
  params: { locale },
}: graphpageProps) {
  const t = await getDictionary(locale);

  return (
    <GraphSettingsProvider>
      <main className="relative pt-18 pb-4 h-full bg-graphpage scroll-y-sortingpage">
        <Header
          headline="Graphs Algorithms"
          subhead="Visuzalizer & Interactive"
          className="py-8"
        />
        <div className="mx-auto px-4 pt-5 flex gap-4 max-w-[1214px] xl:px-0">
          <Sidebar />
          <div className="mx-auto flex flex-col flex-1 gap-4 max-w-[950px] overflow-hidden">
            <Topbar />
            <GraphAlgorithmsVisualizer />
          </div>
        </div>
      </main>
    </GraphSettingsProvider>
  );
}
