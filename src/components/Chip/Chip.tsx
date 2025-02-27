import type { LucideIcon } from "lucide-react";

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.FC<React.SVGProps<SVGSVGElement>> | LucideIcon;
  text?: string;
}

const Chip: React.FC<ChipProps> = ({
  icon: Icon,
  text,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`bg-homepage-secondary text-light flex items-center gap-1.5 rounded-md py-1.5 pl-2 pr-2.5 ${className}`}
      {...props}
    >
      {Icon && <Icon size={16} />}
      <span className="text-xs font-medium">{text}</span>
    </div>
  );
};

export default Chip;
