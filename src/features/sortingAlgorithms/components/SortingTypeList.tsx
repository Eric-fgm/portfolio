"use client";
import { SortingTypeItem } from "@/features/sortingAlgorithms";
import type { SortTypes } from "@/features/sortingAlgorithms/helpers";
import { sortSpecification } from "@/features/sortingAlgorithms/helpers";
import { SortingSettingsContext } from "@/features/sortingAlgorithms/providers/sortingSettings";
import { useContext } from "react";

interface SortingTypeListProps {}

const SortingTypeList: React.FC<SortingTypeListProps> = () => {
  const { type, changeType } = useContext(SortingSettingsContext);

  return (
    <div className="relative flex justify-center overflow-hidden">
      <ul className="px-4 py-1 flex gap-4 scroll-x-sortingpage">
        {(Object.keys(sortSpecification) as SortTypes[]).map((sortType) => (
          <SortingTypeItem
            key={sortType}
            icon={sortSpecification[sortType].icon}
            type={sortSpecification[sortType].type}
            name={sortSpecification[sortType].name}
            isActive={type === sortType}
            onClick={() => changeType(sortType)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SortingTypeList;
