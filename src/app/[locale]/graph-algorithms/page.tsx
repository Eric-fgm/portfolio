import { Container, Header } from "@/components";
import {
  FloatingButtons,
  GraphVisualizer,
  Sidebar,
  Topbar,
} from "@/features/graphAlgorithms";
import { GraphSettingsProvider } from "@/features/graphAlgorithms/providers/graphSettings";
import { getDictionary } from "@/features/language";
import type { Locale } from "@/features/language";

interface graphpageProps {
  params: { locale: Locale };
}

export default async function graphpage({
  params: { locale },
}: graphpageProps) {
  const t = (await getDictionary(locale))["graphPage"];

  return (
    <GraphSettingsProvider>
      <Container className="bg-graphpage">
        <Header headline={t.title} subhead={t.subtitle} className="py-8" />
        <div className="pt-4 flex gap-4">
          <Sidebar />
          <div className="mx-auto flex flex-col flex-1 gap-4 max-w-[950px] overflow-hidden">
            <Topbar />
            <FloatingButtons />
            <GraphVisualizer />
          </div>
        </div>
      </Container>
    </GraphSettingsProvider>
  );
}
