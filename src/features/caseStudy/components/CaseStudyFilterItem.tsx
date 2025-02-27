import type { LucideIcon } from "lucide-react";

interface CaseStudyFilterItemProps extends React.ComponentProps<"li"> {
  name: string;
  icon: LucideIcon;
  iconClassName?: string;
  isActive: boolean;
}

const CaseStudyFilterItem: React.FC<CaseStudyFilterItemProps> = ({
  name = "",
  icon: Icon,
  iconClassName = "",
  isActive,
  ...props
}) => {
  return (
    <li
      className={`bg-homepage-secondary flex-shrink-0 cursor-pointer rounded-2xl ${
        isActive ? "active-homepage-accent active-offset-homepage" : ""
      }`}
      {...props}
    >
      <button
        type="button"
        className="flex h-13 items-center gap-3 rounded-2xl pl-4 pr-5"
      >
        <Icon className={`text-light ${iconClassName}`} />
        <h4 className="text-sm font-medium">{name}</h4>
      </button>
    </li>
  );
};

export default CaseStudyFilterItem;
