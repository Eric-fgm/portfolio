"use client";
import { SortingType } from "@/features/sortingAlgorithms";
import {
  SolidBubble,
  SolidCount,
  SolidCursor,
  SolidMerge,
  SolidQuick,
  SolidSorting,
} from "@/icons";
import { useContext } from "react";
import { SortingSettingsContext } from "@/features/sortingAlgorithms/providers";

interface SortingTypeListProps {}

const SortingTypeList: React.FC<SortingTypeListProps> = () => {
  const { handleChangeType } = useContext(SortingSettingsContext);

  return (
    <div className="relative flex justify-center overflow-hidden">
      <ul className="px-4 flex gap-4 scroll-x-sortingpage">
        <SortingType
          icon={SolidBubble}
          type={1}
          name="Bubble Sort"
          onClick={() => handleChangeType("bubbleSort")}
        />
        <SortingType
          icon={SolidCursor}
          type={1}
          name="Selection Sort"
          onClick={() => handleChangeType("selectionSort")}
        />
        <SortingType
          icon={SolidMerge}
          type={2}
          name="Merge Sort"
          onClick={() => handleChangeType("mergeSort")}
        />
        <SortingType
          icon={SolidQuick}
          type={2}
          name="Quick Sort"
          onClick={() => handleChangeType("quickSort")}
        />
        <SortingType
          icon={SolidCount}
          type={3}
          name="Counting Sort"
          onClick={() => handleChangeType("countingSort")}
        />
      </ul>
    </div>
  );
};

export default SortingTypeList;
