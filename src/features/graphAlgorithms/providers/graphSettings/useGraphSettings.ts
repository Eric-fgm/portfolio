import { GraphSettingsContext } from "@/features/graphAlgorithms/providers/graphSettings";
import { useContext } from "react";

const useGraphSettings = () => useContext(GraphSettingsContext);

export default useGraphSettings;
