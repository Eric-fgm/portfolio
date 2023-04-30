"use client";

import { createContext } from "react";

interface ThemeProps {
  isMobile: boolean;
}

const defaultValue: ThemeProps = {
  isMobile: typeof window !== "undefined" ? window.innerWidth < 768 : false,
};

export default createContext(defaultValue);
