import { Header } from "@/components";
import { ContentLayout } from "@/features/layouts";
import {
  MathsQuadratureProvider,
  MathsQuadratureList,
  MathsQuadraturePanel,
  MathsQuadratureVisualizer,
} from "@/features/mathsAlgorithms";
import { getDictionary } from "@/helpers/dictionaries";
import type { PageProps } from "@/helpers/types";

export default async function MathsQuadraturePage({
  params: { locale },
}: PageProps) {
  const t = (await getDictionary(locale)).mathsPage.quadrature;

  return (
    <MathsQuadratureProvider>
      <Header
        subhead={t.subtitle}
        headline={t.title}
        className="slide-top-in py-8"
      />
      <MathsQuadratureList className="slide-top-in animation-delay-150" />
      <ContentLayout
        aside={<MathsQuadraturePanel />}
        className="slide-top-in mt-4 animation-delay-300"
      >
        <div className="mx-auto flex max-w-[956px] flex-1 flex-col gap-4">
          <MathsQuadratureVisualizer />
        </div>
      </ContentLayout>
    </MathsQuadratureProvider>
  );
}
