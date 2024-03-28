import { useContext } from "react";
import { ThemeContext } from "@/providers";

const useTheme = () => useContext(ThemeContext);

export default useTheme;
