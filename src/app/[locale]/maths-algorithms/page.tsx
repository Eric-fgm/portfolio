import { Aside, Button, Container, Header } from "@/components";
import type { Locale } from "@/features/language";
import { getDictionary } from "@/features/language";
import {
  MathsAlgorithmList,
  MathsVisualizer,
} from "@/features/mathsAlgorithms";
import ControlPanel from "@/features/mathsAlgorithms/components/ControlPanel";
import MathsSettingsProvider from "@/features/mathsAlgorithms/providers/MathsSettingsProvider";
import { SolidSorting } from "@/icons";

interface PageProps {
  params: { locale: Locale };
}

export default async function MathsAlgorithmsPage({
  params: { locale },
}: PageProps) {
  const t = (await getDictionary(locale)).mathsPage;

  return (
    <MathsSettingsProvider>
      <Container className="bg-sortingpage">
        <Header
          subhead={t.subtitle}
          headline={t.title}
          className="py-8 slide-top-in"
        />
        <Aside.Root>
          <div className="fixed left-6 bottom-5 flex gap-2 slide-bottom-in z-30 xl:hidden">
            <Aside.Button>
              <Button icon={SolidSorting} className="p-3" rounded />
            </Aside.Button>
          </div>
          <Aside.Panel className="pl-6 bottom-20 xl:hidden">
            <ControlPanel />
          </Aside.Panel>
        </Aside.Root>
        <MathsAlgorithmList className="slide-top-in animation-delay-150" />
        <div className="pt-4 flex gap-4 lg:pt-12 slide-top-in animation-delay-300">
          <div className="hidden w-64 xl:block">
            <ControlPanel />
          </div>

          <div className="mx-auto max-w-[980px] flex-1 flex flex-col gap-4 min-w-0">
            <MathsVisualizer />
          </div>
        </div>
      </Container>
    </MathsSettingsProvider>
  );
}
