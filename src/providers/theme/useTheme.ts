import { ThemeContext } from "@/providers/theme";
import { useContext } from "react";

const useTheme = () => useContext(ThemeContext);

export default useTheme;
