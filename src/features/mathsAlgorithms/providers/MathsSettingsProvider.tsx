"use client";

import { createContext, useCallback, useEffect, useState } from "react";
import { useFieldArray, useForm, type FieldArrayWithId } from "react-hook-form";

export interface MathsSettingsProps {
  algorithms: ("lagrange-matrix" | "lagrange" | "chebyshev" | "spline")[];
  equation: { f: (x: number) => number };
  points: { x: number; y: number }[];
  pointFields: FieldArrayWithId<
    {
      listOfX: {
        value: string;
      }[];
    },
    "listOfX",
    "id"
  >[];
  setAlgorithms: React.Dispatch<
    React.SetStateAction<MathsSettingsProps["algorithms"]>
  >;
  registerField: any;
  appendPoint: () => void;
  removePoint: (index: number) => void;
  setEquation: React.Dispatch<
    React.SetStateAction<MathsSettingsProps["equation"]>
  >;
}

const defaultProps: MathsSettingsProps = {
  algorithms: ["lagrange", "spline", "chebyshev"],
  equation: { f: (x) => 1 / (1 / 6 + (1 / 16) * x * x) },
  points: [],
  pointFields: [],
  registerField: () => {},
  setAlgorithms: () => {},
  appendPoint: () => {},
  removePoint: () => {},
  setEquation: () => {},
};

export const MathsSettingsContext = createContext(defaultProps);

const MathsSettingsProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [algorithms, setAlgorithms] = useState<
    MathsSettingsProps["algorithms"]
  >(defaultProps.algorithms);
  const [equation, setEquation] = useState<MathsSettingsProps["equation"]>(
    defaultProps.equation,
  );

  const { control, watch, register } = useForm<{
    listOfX: { value: string }[];
  }>();

  const { fields, append, remove } = useFieldArray({
    name: "listOfX",
    control,
    shouldUnregister: true,
  });

  const points = fields
    .map((_, index) => parseInt(watch(`listOfX.${index}.value`), 10))
    .filter((x, index, self) => !isNaN(x) && self.indexOf(x) === index)
    .sort((x1, x2) => x1 - x2)
    .map((x) => ({ x, y: Math.max(-20, Math.min(20, equation.f(x))) }));

  const appendPoint = useCallback(() => append({ value: "" }), [append]);
  const removePoint = useCallback((index: number) => remove(index), [remove]);

  useEffect(() => {
    append({ value: "-1" }, { shouldFocus: false });
    append({ value: "0" }, { shouldFocus: false });
    append({ value: "1" }, { shouldFocus: false });
  }, [append]);

  return (
    <MathsSettingsContext.Provider
      value={{
        algorithms,
        equation,
        points:
          points.length > 2
            ? points
            : [
                { x: -1, y: -1 },
                { x: 0, y: 0 },
                { x: 1, y: 1 },
              ],
        pointFields: fields,
        registerField: register,
        appendPoint,
        removePoint,
        setEquation,
        setAlgorithms,
      }}
    >
      {children}
    </MathsSettingsContext.Provider>
  );
};

export default MathsSettingsProvider;
