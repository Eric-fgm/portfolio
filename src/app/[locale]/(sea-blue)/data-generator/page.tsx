import { Header } from "@/components";
import {
  TopBar,
  FieldsForm,
  DataGeneratorPanel,
  HistoryDataBoxList,
} from "@/features/dataGenerator/components";
import { ExtendedFormProvider } from "@/features/dataGenerator/providers";
import { ContentLayout } from "@/features/layouts";
import { getDictionary } from "@/helpers/dictionaries";
import type { PageProps } from "@/helpers/types";

export default async function DataGeneratorPage({
  params: { locale },
}: PageProps) {
  const t = (await getDictionary(locale)).dataGeneratorPage;

  return (
    <ExtendedFormProvider>
      <Header
        headline={t.title}
        subhead={t.subtitle}
        className="slide-top-in py-8"
      />
      <ContentLayout
        aside={<DataGeneratorPanel />}
        className="slide-top-in animation-delay-150"
      >
        <div className="mx-auto flex w-full max-w-[956px] flex-1 flex-col gap-4">
          <TopBar />
          <FieldsForm />
          <HistoryDataBoxList />
        </div>
      </ContentLayout>
    </ExtendedFormProvider>
  );
}
