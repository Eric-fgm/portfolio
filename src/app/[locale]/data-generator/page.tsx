import { Aside, Button, Container, Header } from "@/components";
import {
  TopBar,
  FieldsForm,
  ControlPanel,
  HistoryDataBoxList,
} from "@/features/dataGenerator/components";
import { ExtendedFormProvider } from "@/features/dataGenerator/providers";
import { getDictionary, type Locale } from "@/features/language";
import { SolidSorting } from "@/icons";

interface DataGeneratorPageProps {
  params: { locale: Locale };
}

export default async function DataGeneratorPage({
  params: { locale },
}: DataGeneratorPageProps) {
  const t = (await getDictionary(locale)).dataGeneratorPage;

  return (
    <Container className="bg-[#132833]">
      <Header headline={t.title} subhead={t.subtitle} className="py-8" />
      <ExtendedFormProvider>
        <div className="pt-4 flex gap-4">
          <div className="hidden w-64 xl:block">
            <ControlPanel />
          </div>
          <Aside.Root>
            <div className="fixed left-6 bottom-5 flex gap-2 slide-bottom-in z-30 xl:hidden">
              <Aside.Button>
                <Button icon={SolidSorting} className="p-3" rounded />
              </Aside.Button>
            </div>
            <Aside.Panel className="pl-6 bottom-20 xl:hidden">
              <ControlPanel className="shadow-2xl" />
            </Aside.Panel>
          </Aside.Root>
          <div className="mx-auto max-w-[980px] flex-1 flex flex-col gap-4 min-w-0">
            <TopBar />
            <FieldsForm />
            <HistoryDataBoxList />
          </div>
        </div>
      </ExtendedFormProvider>
    </Container>
  );
}
