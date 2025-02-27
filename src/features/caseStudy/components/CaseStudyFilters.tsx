"use client";

import { CaseStudyFilterItem, useCaseStudyFilters } from "@/features/caseStudy";
import { useTranslate } from "@/hooks";
import {
  AlignLeft,
  Archive,
  DatabaseZap,
  Library,
  MessageCircleMore,
  SquareDashedMousePointer,
} from "lucide-react";

export const iconsMap = {
  library: Library,
  crud: Archive,
  realtime: MessageCircleMore,
  frontend: SquareDashedMousePointer,
  backend: DatabaseZap,
};

interface CaseStudyFiltersProps extends React.ComponentProps<"div"> {}

const CaseStudyFilters: React.FC<CaseStudyFiltersProps> = ({
  className = "",
  ...props
}) => {
  const t = useTranslate("caseStudyPage");
  const { categories, setCategories } = useCaseStudyFilters();

  return (
    <div className={`relative flex justify-center ${className}`} {...props}>
      <ul className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 py-1">
        <CaseStudyFilterItem
          icon={AlignLeft}
          name={t.all}
          isActive={!categories.length}
          onClick={() => setCategories([])}
        />
        {t.filters.map(({ key, name }) => (
          <CaseStudyFilterItem
            key={key}
            icon={iconsMap[key as keyof typeof iconsMap]}
            name={name}
            isActive={categories.includes(key)}
            onClick={() => {
              if (categories.includes(key))
                setCategories((prevCategories) =>
                  prevCategories.filter((category) => category !== key),
                );
              else setCategories((prevCategories) => [...prevCategories, key]);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default CaseStudyFilters;
