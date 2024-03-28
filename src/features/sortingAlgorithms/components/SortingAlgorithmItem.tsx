import type { LucideIcon } from "lucide-react";

interface SortingAlgorithmItemProps extends React.ComponentProps<"li"> {
  name: string;
  icon: LucideIcon;
  metadata: { name: string; className?: string };
  iconClassName?: string;
  isActive: boolean;
}

const SortingAlgorithmItem: React.FC<SortingAlgorithmItemProps> = ({
  name = "",
  icon: Icon,
  metadata,
  iconClassName = "",
  isActive,
  ...props
}) => {
  return (
    <li
      className={`flex-shrink-0 cursor-pointer rounded-2xl bg-sortingpage-secondary ${
        isActive ? "active-offset-sortingpage active-sortingpage-accent" : ""
      }`}
      {...props}
    >
      <button
        type="button"
        className="flex h-13 items-center gap-3 rounded-2xl pl-4 pr-5"
      >
        <Icon className={`text-muted ${iconClassName}`} />
        <div>
          <h5
            className={`text-left text-[10px] font-semibold ${
              metadata.className ?? ""
            }`}
          >
            {metadata.name}
          </h5>
          <h4 className="text-sm font-medium">{name}</h4>
        </div>
      </button>
    </li>
  );
};

export default SortingAlgorithmItem;
