"use client";

import { createContext, useState } from "react";

export interface MathsQuadratureProps {
  algorithm: "rectangle" | "trapeze";
  lowerBound: string;
  upperBound: string;
  partitionCount: string;
  setAlgorithm: React.Dispatch<
    React.SetStateAction<MathsQuadratureProps["algorithm"]>
  >;
  setLowerBound: React.Dispatch<
    React.SetStateAction<MathsQuadratureProps["lowerBound"]>
  >;
  setUpperBound: React.Dispatch<
    React.SetStateAction<MathsQuadratureProps["upperBound"]>
  >;
  setPartitionCount: React.Dispatch<
    React.SetStateAction<MathsQuadratureProps["partitionCount"]>
  >;
}

const defaultProps: MathsQuadratureProps = {
  algorithm: "rectangle",
  lowerBound: "-6",
  upperBound: "6",
  partitionCount: "10",
  setAlgorithm: () => {},
  setLowerBound: () => {},
  setUpperBound: () => {},
  setPartitionCount: () => {},
};

export const MathsQuadratureContext = createContext(defaultProps);

const MathsQuadratureProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [algorithm, setAlgorithm] = useState<MathsQuadratureProps["algorithm"]>(
    defaultProps.algorithm,
  );
  const [lowerBound, setLowerBound] = useState<
    MathsQuadratureProps["lowerBound"]
  >(defaultProps.lowerBound);
  const [upperBound, setUpperBound] = useState<
    MathsQuadratureProps["upperBound"]
  >(defaultProps.upperBound);
  const [partitionCount, setPartitionCount] = useState<
    MathsQuadratureProps["partitionCount"]
  >(defaultProps.partitionCount);

  return (
    <MathsQuadratureContext.Provider
      value={{
        algorithm,
        partitionCount,
        lowerBound,
        upperBound,
        setAlgorithm,
        setPartitionCount,
        setLowerBound,
        setUpperBound,
      }}
    >
      {children}
    </MathsQuadratureContext.Provider>
  );
};

export default MathsQuadratureProvider;
