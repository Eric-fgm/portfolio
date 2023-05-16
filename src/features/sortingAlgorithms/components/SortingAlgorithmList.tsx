"use client";
import { useTranslate } from "@/features/language/providers/translate";
import { SortingAlgorithmItem } from "@/features/sortingAlgorithms";
import { sortingAlgorithms } from "@/features/sortingAlgorithms/helpers";
import { useSortingSettings } from "@/features/sortingAlgorithms/providers/sortingSettings";

interface SortingAlgorithmListProps {}

const SortingAlgorithmList: React.FC<SortingAlgorithmListProps> = () => {
  const t = useTranslate("sortingPage");
  const { type, changeType } = useSortingSettings();

  return (
    <div className="relative flex justify-center">
      <ul className="-mx-4 px-4 py-1 flex gap-4 scroll-x-sortingpage">
        {sortingAlgorithms.map(({ key, icon, name }) => (
          <SortingAlgorithmItem
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

export default SortingAlgorithmList;
