interface GraphAlgorithmsItemProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "type"> {
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
      className={`px-5 flex gap-4 items-center h-16 bg-graphpage-secondary rounded-2xl ${
        isActive ? "active-graphpage-accent active-offset-graphpage" : ""
      }`}
      {...props}
    >
      <Icon className="text-muted-graph" />
      <div className="text-left">
        <h4 className="text-md font-medium">{name}</h4>
        <h5 className="text-xs text-muted-graph font-semibold">{caption}</h5>
      </div>
    </button>
  );
};

export default GraphAlgorithmsItem;
