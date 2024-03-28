interface GraphAlgorithmsItemProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  caption: string;
  isActive: boolean;
}

const GraphAlgorithmsItem: React.FC<GraphAlgorithmsItemProps> = ({
  icon: Icon,
  name,
  caption,
  isActive,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`flex h-16 items-center gap-4 rounded-2xl bg-graphpage-secondary px-5 ${
        isActive ? "active-graphpage-accent active-offset-graphpage" : ""
      }`}
      {...props}
    >
      <Icon className="flex-shrink-0 text-muted-graph" />
      <div className="overflow-hidden text-left">
        <h4 className="truncate text-md font-medium">{name}</h4>
        <h5 className="truncate text-xs font-semibold text-muted-graph">
          {caption}
        </h5>
      </div>
    </button>
  );
};

export default GraphAlgorithmsItem;
