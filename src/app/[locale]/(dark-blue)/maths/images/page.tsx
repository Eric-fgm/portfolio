import { Header } from "@/components";
import {
  ImageCanvas,
  ImageSettingsProvider,
  ImageAlgorithmList,
} from "@/features/imageAlgorithms";
import { getDictionary } from "@/helpers/dictionaries";
import type { PageProps } from "@/helpers/types";

export default async function ImageAlgorithmsPage({
  params: { locale },
}: PageProps) {
  const t = (await getDictionary(locale)).mathsPage.images;

  return (
    <>
      <Header
        subhead={t.subtitle}
        headline={t.title}
        className="slide-top-in py-8"
      />
      <ImageSettingsProvider>
        <ImageAlgorithmList className="slide-top-in animation-delay-150" />
        <div className="slide-top-in mx-auto mt-4 flex max-w-[956px] flex-1 flex-col gap-4 animation-delay-300">
          <ImageCanvas />
        </div>
      </ImageSettingsProvider>
    </>
  );
}
