import { Header } from "@/components";
import {
  GraphVisualizer,
  GraphPanel,
  Topbar,
} from "@/features/graphAlgorithms";
import { GraphSettingsProvider } from "@/features/graphAlgorithms/providers/graphSettings";
import { ContentLayout } from "@/features/layouts";
import { getDictionary } from "@/helpers/dictionaries";
import type { PageProps } from "@/helpers/types";

export default async function Graphpage({ params: { locale } }: PageProps) {
  const t = (await getDictionary(locale))["graphPage"];

  return (
    <GraphSettingsProvider>
      <Header
        headline={t.title}
        subhead={t.subtitle}
        className="slide-top-in py-8"
      />
      <ContentLayout
        aside={<GraphPanel />}
        className="slide-top-in animation-delay-150"
      >
        <div className="mx-auto flex max-w-full flex-col gap-y-4">
          <Topbar />
          <GraphVisualizer />
        </div>
      </ContentLayout>
    </GraphSettingsProvider>
  );
}
