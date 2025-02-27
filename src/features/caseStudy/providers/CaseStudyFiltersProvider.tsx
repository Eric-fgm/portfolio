"use client";

import { createContext, useContext, useState } from "react";

export interface CaseStudyFiltersProps {
  categories: string[];
  setCategories: React.Dispatch<
    React.SetStateAction<CaseStudyFiltersProps["categories"]>
  >;
}

const defaultProps: CaseStudyFiltersProps = {
  categories: [],
  setCategories: () => {},
};

const CaseStudyFiltersContext = createContext(defaultProps);

export const useCaseStudyFilters = () => useContext(CaseStudyFiltersContext);

const CaseStudyFiltersProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [categories, setCategories] = useState<
    CaseStudyFiltersProps["categories"]
  >(defaultProps.categories);

  return (
    <CaseStudyFiltersContext.Provider value={{ categories, setCategories }}>
      {children}
    </CaseStudyFiltersContext.Provider>
  );
};

export default CaseStudyFiltersProvider;
