interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  text?: string;
  iconSize?: number;
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  text,
  type = "button",
  className = "",
  iconSize = 24,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-2 bg-sortingpage rounded-lg ${className}`}
      {...props}
    >
      {Icon && (
        <Icon width={iconSize} height={iconSize} className="text-muted" />
      )}
      {text && <span className="text-sm">{text}</span>}
    </button>
  );
};

export default Button;
