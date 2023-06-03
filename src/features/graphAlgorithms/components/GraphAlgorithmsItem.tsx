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
      className={`px-5 flex gap-4 items-center h-16 bg-graphpage-secondary rounded-2xl ${
        isActive ? "active-graphpage-accent active-offset-graphpage" : ""
      }`}
      {...props}
    >
      <Icon className="flex-shrink-0 text-muted-graph" />
      <div className="text-left overflow-hidden">
        <h4 className="text-md font-medium truncate">{name}</h4>
        <h5 className="text-xs text-muted-graph font-semibold truncate">
          {caption}
        </h5>
      </div>
    </button>
  );
};

export default GraphAlgorithmsItem;
