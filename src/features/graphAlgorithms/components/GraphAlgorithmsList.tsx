"use client";
import { GraphAlgorithmsItem } from "@/features/graphAlgorithms";
import { graphAlgorithms } from "@/features/graphAlgorithms/helpers";
import { useGraphSettings } from "@/features/graphAlgorithms/providers/graphSettings";
import { useTranslate } from "@/hooks";

interface GraphAlgorithmsListProps {}

const GraphAlgorithmsList: React.FC<GraphAlgorithmsListProps> = () => {
  const { type, changeType, toggleSettings } = useGraphSettings();
  const t = useTranslate("graphPage");

  return (
    <div className="flex flex-col gap-4">
      {graphAlgorithms.map(({ key, icon, name }) => (
        <GraphAlgorithmsItem
          key={key}
          icon={icon}
          name={name}
          caption={t.algorithms[key].caption}
          isActive={key === type}
          onClick={() => {
            changeType(key);
            toggleSettings();
          }}
        />
      ))}
    </div>
  );
};

export default GraphAlgorithmsList;
