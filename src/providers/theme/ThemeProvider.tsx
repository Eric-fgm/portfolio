"use client";

import { useEventListener } from "@/hooks";
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

  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const type = useMemo(() => {
    setIsOpened(false);
    return themeMap[slug as ThemeMapKeys] ?? "primary";
  }, [slug]);

  const handleSize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const toggleNavigation = useCallback(
    () => setIsOpened((wasOpened) => !wasOpened),
    []
  );

  useEventListener("resize", handleSize);

  return (
    <ThemeContext.Provider
      value={{ isMobile, isOpened, type, toggleNavigation }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
