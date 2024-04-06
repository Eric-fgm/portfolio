"use client";
import MathsAlgorithmItem from "@/features/mathsAlgorithms/interpolation/components/MathsAlgorithmItem";
import { icons } from "@/features/mathsAlgorithms/interpolation/helpers";
import useMathsSettings from "../hooks/useMathsSettings";
import { useTranslate } from "@/hooks";

interface MathsAlgorithmListProps extends React.ComponentProps<"div"> {}

const MathsAlgorithmList: React.FC<MathsAlgorithmListProps> = ({
  className = "",
  ...props
}) => {
  const t = useTranslate("mathsPage").interpolation;
  const { algorithms, setAlgorithms } = useMathsSettings();

  return (
    <div className={`relative flex justify-center ${className}`} {...props}>
      <ul className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 py-1">
        {t.algorithms.map(({ key, name, type }) => (
          <MathsAlgorithmItem
            key={key}
            icon={(icons as any)[key]}
            name={name}
            type={type}
            isActive={algorithms.includes(key as any)}
            onClick={() => {
              const include = algorithms.includes(key as any);

              setAlgorithms(
                include
                  ? algorithms.filter((algorithm) => algorithm !== key)
                  : [...algorithms, key as any],
              );
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default MathsAlgorithmList;
