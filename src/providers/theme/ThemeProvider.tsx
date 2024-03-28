"use client";

import { createContext } from "react";

interface ThemeContextProps {
  variant: "dark" | "darkBlue" | "lightBlue" | "seaBlue";
}

export const ThemeContext = createContext<ThemeContextProps>({
  variant: "dark",
});

const ThemeProvider: React.FC<React.PropsWithChildren & ThemeContextProps> = ({
  children,
  variant,
}) => {
  return (
    <ThemeContext.Provider value={{ variant }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
