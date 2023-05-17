"use client";
import type { ThemeMapValues } from "@/providers/theme/ThemeProvider";
import { createContext } from "react";

interface ThemeProps {
  isOpened: boolean;
  type: ThemeMapValues;
  toggleNavigation: () => void;
}

const defaultValue: ThemeProps = {
  isOpened: false,
  type: "primary",
  toggleNavigation: () => {},
};

export default createContext(defaultValue);
