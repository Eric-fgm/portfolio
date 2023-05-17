"use client";
import { ThemeContext } from "@/providers/theme";
import { useSelectedLayoutSegments } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

export type ThemeMapKeys = keyof typeof themeMap;
export type ThemeMapValues = (typeof themeMap)[ThemeMapKeys];

interface ThemeProviderProps {
  children: React.ReactNode;
}

const themeMap = {
  primary: "primary",
  "sorting-algorithms": "darkBlue",
  "graph-algorithms": "lightBlue",
} as const;

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [_, slug] = useSelectedLayoutSegments();

  const [isOpened, setIsOpened] = useState<boolean>(false);

  const type = useMemo(() => {
    setIsOpened(false);
    return themeMap[slug as ThemeMapKeys] ?? "primary";
  }, [slug]);

  const toggleNavigation = useCallback(
    () => setIsOpened((wasOpened) => !wasOpened),
    []
  );

  return (
    <ThemeContext.Provider value={{ isOpened, type, toggleNavigation }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
