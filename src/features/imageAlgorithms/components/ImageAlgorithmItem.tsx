import type { LucideIcon } from "lucide-react";

interface ImageAlgorithmItemProps extends React.ComponentProps<"li"> {
  name: string;
  icon: LucideIcon;
  isActive?: boolean;
}

const ImageAlgorithmItem: React.FC<ImageAlgorithmItemProps> = ({
  name = "",
  icon: Icon,
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
          <h4 className="text-sm font-medium">{name}</h4>
        </div>
      </button>
    </li>
  );
};

export default ImageAlgorithmItem;
