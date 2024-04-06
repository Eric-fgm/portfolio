"use client";

import MathsAlgorithmItem from "@/features/mathsAlgorithms/interpolation/components/MathsAlgorithmItem";
import { icons } from "@/features/mathsAlgorithms/quadrature/helpers";
import useMathsQuadrature from "@/features/mathsAlgorithms/quadrature/hooks/useMathsQuadrature";
import { useTranslate } from "@/hooks";

interface MathsQuadratureListProps extends React.ComponentProps<"div"> {}

const MathsQuadratureList: React.FC<MathsQuadratureListProps> = ({
  className = "",
  ...props
}) => {
  const t = useTranslate("mathsPage").quadrature;
  const { algorithm, setAlgorithm } = useMathsQuadrature();

  return (
    <div className={`relative flex justify-center ${className}`} {...props}>
      <ul className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 py-1">
        {t.algorithms.map(({ key, name, type }) => (
          <MathsAlgorithmItem
            key={key}
            icon={(icons as any)[key]}
            name={name}
            type={type}
            isActive={algorithm === key}
            onClick={() => setAlgorithm(key as any)}
          />
        ))}
      </ul>
    </div>
  );
};

export default MathsQuadratureList;
