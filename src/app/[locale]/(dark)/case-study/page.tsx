import { Header } from "@/components";
import {
  CaseStudyList,
  CaseStudyFilters,
  CaseStudyFiltersProvider,
} from "@/features/caseStudy";
import { ContentLayout } from "@/features/layouts";
import { getDictionary } from "@/helpers/dictionaries";
import type { PageProps } from "@/helpers/types";

export default async function Page({ params: { locale } }: PageProps) {
  const t = (await getDictionary(locale))["caseStudyPage"];

  return (
    <CaseStudyFiltersProvider>
      <Header
        subhead={t.subtitle}
        headline={t.title}
        className="slide-top-in py-8"
      />
      <CaseStudyFilters className="slide-top-in animation-delay-150" />
      <div className="slide-top-in mx-auto mt-4 max-w-[1220px] animation-delay-300">
        <CaseStudyList />
      </div>
    </CaseStudyFiltersProvider>
  );
}
