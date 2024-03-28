"use client";

import { createContext } from "react";

type TranslateProps = Record<string, any>;

interface LanguageProvider extends React.PropsWithChildren {
  dictionares: TranslateProps;
}

export const TranslateContext = createContext<TranslateProps>({});

const TranslateProvider: React.FC<LanguageProvider> = ({
  children,
  dictionares = {},
}) => {
  return (
    <TranslateContext.Provider value={dictionares}>
      {children}
    </TranslateContext.Provider>
  );
};

export default TranslateProvider;
