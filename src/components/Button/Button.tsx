interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  text?: string;
  iconSize?: number;
  rounded?: boolean;
  theme?: keyof typeof themeMap;
}

const themeMap = {
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
};

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  text,
  type = "button",
  className = "",
  iconSize = 24,
  theme = "darkBlue",
  rounded = false,
  ...props
}) => {
  const { bg, iconColor, textColor } = themeMap[theme];
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-2 ${
        rounded ? "rounded-full" : "rounded-lg"
      } ${bg} ${className}`}
      {...props}
    >
      {Icon && (
        <Icon width={iconSize} height={iconSize} className={iconColor} />
      )}
      {text && (
        <span className={`text-rg font-medium ${textColor}`}>{text}</span>
      )}
    </button>
  );
};

export default Button;
