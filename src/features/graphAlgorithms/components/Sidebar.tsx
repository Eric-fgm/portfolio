"use client";
import { GraphAlgorithmsList } from "@/features/graphAlgorithms";
import { useGraphSettings } from "@/features/graphAlgorithms/providers/graphSettings";

interface SidebarProps extends React.ComponentProps<"div"> {}

const Sidebar: React.FC<SidebarProps> = ({ className = "", ...props }) => {
  const { isOpened } = useGraphSettings();

  return (
    <div
      className={`fixed pl-6 left-0 bottom-[76px] transition-transform z-30 xl:static xl:pl-0 xl:transition-none ${
        isOpened ? "" : "-translate-x-full xl:translate-x-0"
      } ${className}`}
      {...props}
    >
      <div className="p-4 flex flex-col w-[264px] bg-graphpage rounded-2xl xl:p-0 xl:w-[248px]">
        <GraphAlgorithmsList />
      </div>
    </div>
  );
};

export default Sidebar;
