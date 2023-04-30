"use client";

import { useEventListener } from "@/hooks";
import { ThemeContext } from "@/providers/theme";
import { useCallback, useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  const handleSize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEventListener("resize", handleSize);

  return (
    <ThemeContext.Provider value={{ isMobile }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
