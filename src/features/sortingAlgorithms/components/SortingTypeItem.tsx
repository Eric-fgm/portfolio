import { sortingTypeMap } from "@/helpers/mapping";
import { SortSpecification } from "@/features/sortingAlgorithms/helpers";

interface SortingTypeItemProps
  extends React.HTMLAttributes<HTMLLIElement>,
    Omit<SortSpecification, "desc"> {
  iconClassName?: string;
  isActive: boolean;
}

const SortingTypeItem: React.FC<SortingTypeItemProps> = ({
  type = 1,
  name = "",
  icon: Icon,
  iconClassName = "",
  isActive,
  ...props
}) => {
  const { speed, className } = sortingTypeMap[type];
  return (
    <li
      className={`flex-shrink-0 bg-sortingpage-secondary rounded-2xl cursor-pointer ${
        isActive ? "active-sortingpage-accent active-offset-sortingpage" : ""
      }`}
      {...props}
    >
      <button
        type="button"
        className="pl-4 pr-5 flex items-center h-13 gap-3 rounded-2xl"
      >
        <Icon className={`text-muted ${iconClassName}`} />
        <div>
          <h5 className={`text-left text-[10px] font-semibold ${className}`}>
            {speed}
          </h5>
          <h4 className="text-sm font-medium">{name}</h4>
        </div>
      </button>
    </li>
  );
};

export default SortingTypeItem;
