import { SortingSettingsContext } from "@/features/sortingAlgorithms/providers/sortingSettings";
import { useContext } from "react";

const useSortingSettings = () => useContext(SortingSettingsContext);

export default useSortingSettings;
