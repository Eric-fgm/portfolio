"use client";
import { useTranslate } from "@/features/language/providers/translate";
import { SortingTypeItem } from "@/features/sortingAlgorithms";
import type { SortTypes } from "@/features/sortingAlgorithms/helpers";
import { sortingAlgorithms } from "@/features/sortingAlgorithms/helpers";
import { useSortingSettings } from "@/features/sortingAlgorithms/providers/sortingSettings";

interface SortingTypeListProps {}

const SortingTypeList: React.FC<SortingTypeListProps> = () => {
  const t = useTranslate("sortingPage");
  const { type, changeType } = useSortingSettings();

  return (
    <div className="relative flex justify-center">
      <ul className="-mx-4 px-4 py-1 flex gap-4 scroll-x-sortingpage">
        {sortingAlgorithms.map(({ key, icon, name }) => (
          <SortingTypeItem
            key={key}
            icon={icon}
            name={name}
            metadata={t.algorithms[key].metadata}
            isActive={type === key}
            onClick={() => changeType(key)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SortingTypeList;
