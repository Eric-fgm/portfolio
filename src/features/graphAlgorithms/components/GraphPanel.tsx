"use client";
import { GraphAlgorithmsList } from "@/features/graphAlgorithms";

interface GraphPanelProps extends React.ComponentProps<"div"> {}

const GraphPanel: React.FC<GraphPanelProps> = ({
  className = "",
  ...props
}) => {
  return (
    <div
      className="rounded-2xl bg-graphpage p-4 shadow-2xl xl:bg-[transparent] xl:p-0 xl:shadow-none"
      {...props}
    >
      <GraphAlgorithmsList />
    </div>
    //{/* <FloatingButtons className="animation-delay-150" /> */}
  );
};

export default GraphPanel;
