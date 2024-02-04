import { Container, Header } from "@/components";
import { GraphVisualizer, Sidebar, Topbar } from "@/features/graphAlgorithms";
import { GraphSettingsProvider } from "@/features/graphAlgorithms/providers/graphSettings";
import type { Locale } from "@/features/language";
import { getDictionary } from "@/features/language";

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
        <Header
          headline={t.title}
          subhead={t.subtitle}
          className="py-8 slide-top-in"
        />
        <div className="pt-4 flex gap-4">
          <Sidebar className="slide-top-in-xl animation-delay-150" />
          <div className="mx-auto flex flex-col flex-1 gap-4 max-w-[950px] overflow-x-hidden slide-top-in animation-delay-150">
            <Topbar />
            <GraphVisualizer />
          </div>
        </div>
      </Container>
      {/* <FloatingButtons className="animation-delay-150" /> */}
    </GraphSettingsProvider>
  );
}
