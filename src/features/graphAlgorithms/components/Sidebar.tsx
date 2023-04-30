import { GraphAlgorithmsList } from "@/features/graphAlgorithms";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="hidden flex-col w-[248px] xl:flex">
      <GraphAlgorithmsList />
      <div className="mt-auto h-16 bg-graphpage-secondary rounded-2xl"></div>
    </div>
  );
};

export default Sidebar;
