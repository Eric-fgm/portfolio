import { Container, Header } from "@/components";
import { FieldsForm } from "@/features/dataGenerator";
import { getDictionary } from "@/features/language";
import type { Locale } from "@/features/language";

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
      <div className="pt-4">
        <FieldsForm />
      </div>
    </Container>
  );
}
