interface MathsAlgorithmItemProps extends React.ComponentProps<"li"> {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  type: { name: string; className?: string };
  isActive?: boolean;
}

const MathsAlgorithmItem: React.FC<MathsAlgorithmItemProps> = ({
  name = "",
  icon: Icon,
  type,
  isActive = false,
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
        <Icon className="text-muted" />
        <div>
          <h5
            className={`text-left text-[10px] font-semibold ${
              type.className ?? ""
            }`}
          >
            {type.name}
          </h5>
          <h4 className="text-sm font-medium">{name}</h4>
        </div>
      </button>
    </li>
  );
};

export default MathsAlgorithmItem;
