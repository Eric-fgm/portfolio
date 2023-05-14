"use client";

import type { TranslateProps } from "@/features/language/providers/translate";
import { TranslateContext } from "@/features/language/providers/translate";

interface LanguageProvider {
  children: React.ReactNode;
  dictionares: TranslateProps;
}

const SortingSettingsProvider: React.FC<LanguageProvider> = ({
  children,
  dictionares = {},
}) => {
  return (
    <TranslateContext.Provider value={dictionares}>
      {children}
    </TranslateContext.Provider>
  );
};

export default SortingSettingsProvider;
