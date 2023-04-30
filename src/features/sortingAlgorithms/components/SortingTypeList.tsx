"use client";
import { SortingTypeItem } from "@/features/sortingAlgorithms";
import {
  SolidBubble,
  SolidCount,
  SolidCursor,
  SolidMerge,
  SolidQuick,
} from "@/icons";
import { useContext } from "react";
import { SortingSettingsContext } from "@/features/sortingAlgorithms/providers";
import {
  sortList,
  sortSpecification,
} from "@/features/sortingAlgorithms/helpers";

interface SortingTypeListProps {}

const SortingTypeList: React.FC<SortingTypeListProps> = () => {
  const { type, handleChangeType } = useContext(SortingSettingsContext);

  return (
    <div className="relative flex justify-center overflow-hidden">
      <ul className="px-4 py-1 flex gap-4 scroll-x-sortingpage">
        {sortList.map((id) => (
          <SortingTypeItem
            key={id}
            icon={sortSpecification[id].icon}
            type={sortSpecification[id].type}
            name={sortSpecification[id].name}
            isActive={type === id}
            onClick={() => handleChangeType(id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SortingTypeList;
