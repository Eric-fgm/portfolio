"use client";
import GraphsAlgorithmsItem from "./GraphAlgorithmsItem";
import { graphAlgorithms } from "../helpers";
import { useContext } from "react";
import { GraphSettingsContext } from "../providers";

interface GraphAlgorithmsListProps {}

const GraphAlgorithmsList: React.FC<GraphAlgorithmsListProps> = () => {
  const { type, setType } = useContext(GraphSettingsContext);

  return (
    <div className="flex flex-col gap-4">
      {graphAlgorithms.map((props) => (
        <GraphsAlgorithmsItem
          key={props.type}
          isActive={props.type === type}
          onClick={() => setType(props.type)}
          {...props}
        />
      ))}
    </div>
  );
};

export default GraphAlgorithmsList;
