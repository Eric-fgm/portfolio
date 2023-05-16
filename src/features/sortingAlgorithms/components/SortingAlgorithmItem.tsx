interface SortingAlgorithmItemProps extends React.ComponentProps<"li"> {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
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
