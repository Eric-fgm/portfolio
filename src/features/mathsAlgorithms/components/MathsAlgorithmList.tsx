"use client";
import { useTranslate } from "@/features/language/providers/translate";
import MathsAlgorithmItem from "@/features/mathsAlgorithms/components/MathsAlgorithmItem";
import { icons } from "@/features/mathsAlgorithms/helpers";
import useMathsSettings from "../hooks/useMathsSettings";

interface MathsAlgorithmListProps extends React.ComponentProps<"div"> {}

const MathsAlgorithmList: React.FC<MathsAlgorithmListProps> = ({
  className = "",
  ...props
}) => {
  const t = useTranslate("mathsPage");
  const { algorithms, setAlgorithms } = useMathsSettings();

  return (
    <div className={`relative flex justify-center ${className}`} {...props}>
      <ul className="-mx-4 px-4 py-1 flex gap-4 no-scrollbar overflow-x-auto">
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
                  : [...algorithms, key as any]
              );
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default MathsAlgorithmList;
