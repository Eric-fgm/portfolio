import { Link } from "@/components";
import { useTheme } from "@/hooks";
import type { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>> | LucideIcon;
  text?: string;
  iconSize?: number;
  rounded?: boolean;
  blank?: boolean;
}

const variantMap = {
  dark: {
    bg: "bg-homepage-secondary",
    textColor: "text-light",
    iconColor: "text-light",
  },
  darkBlue: {
    bg: "bg-sortingpage",
    textColor: "text-white",
    iconColor: "text-muted",
  },
  lightBlue: {
    bg: "bg-graphpage",
    textColor: "text-white",
    iconColor: "text-graph",
  },
  seaBlue: {
    bg: "bg-[#132833]",
    textColor: "text-white",
    iconColor: "text-muted",
  },
};

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  text,
  type = "button",
  className = "",
  iconSize = 20,
  rounded = false,
  blank = false,
  href,
  ...props
}) => {
  const { variant } = useTheme();
  const { bg, iconColor, textColor } = variantMap[variant];
  const Tag = (href ? Link : "button") as any;
  return (
    <Tag
      type={type}
      className={`flex items-center justify-center gap-2 ${
        rounded ? "rounded-full" : "rounded-lg"
      } ${blank ? "" : bg} ${className}`}
      href={href}
      {...props}
    >
      {Icon && (
        <Icon width={iconSize} height={iconSize} className={iconColor} />
      )}
      {text && (
        <span className={`text-rg font-medium ${textColor}`}>{text}</span>
      )}
    </Tag>
  );
};

export default Button;
