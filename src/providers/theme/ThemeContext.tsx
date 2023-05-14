"use client";

import { createContext } from "react";
import type { ThemeMapValues } from "@/providers/theme/ThemeProvider";

interface ThemeProps {
  isMobile: boolean;
  isOpened: boolean;
  type: ThemeMapValues;
  toggleNavigation: () => void;
}

const defaultValue: ThemeProps = {
  isMobile: typeof window !== "undefined" ? window.innerWidth < 768 : false,
  isOpened: false,
  type: "primary",
  toggleNavigation: () => {},
};

export default createContext(defaultValue);
