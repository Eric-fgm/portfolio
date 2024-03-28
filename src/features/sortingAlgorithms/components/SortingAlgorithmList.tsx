"use client";

import { SortingAlgorithmItem } from "@/features/sortingAlgorithms";
import { sortingAlgorithms } from "@/features/sortingAlgorithms/helpers";
import { useSortingSettings } from "@/features/sortingAlgorithms/providers/sortingSettings";
import { useTranslate } from "@/hooks";

interface SortingAlgorithmListProps extends React.ComponentProps<"div"> {}

const SortingAlgorithmList: React.FC<SortingAlgorithmListProps> = ({
  className = "",
  ...props
}) => {
  const t = useTranslate("sortingPage");
  const { type, changeType } = useSortingSettings();

  return (
    <div className={`relative flex justify-center ${className}`} {...props}>
      <ul className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 py-1">
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
