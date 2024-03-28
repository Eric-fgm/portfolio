import { useTheme } from "@/hooks";

interface CardProps
  extends React.PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  withoutPadding?: boolean;
}

const variantMap = {
  dark: {
    bg: "bg-homepage-secondary",
  },
  darkBlue: {
    bg: "bg-sortingpage-secondary",
  },
  lightBlue: {
    bg: "bg-graphpage-secondary",
  },
  seaBlue: {
    bg: "bg-[#1b3543]",
  },
};

const Card: React.FC<CardProps> = ({
  children,
  title,
  className,
  withoutPadding = false,
  ...props
}) => {
  const { variant } = useTheme();
  const { bg } = variantMap[variant];
  return (
    <div
      className={`rounded-2xl ${bg} ${className} ${withoutPadding ? "p-0" : "p-4"}`}
      {...props}
    >
      {title ? (
        <>
          <h5 className="mb-2 text-xs font-medium">{title}</h5>
          {children}
        </>
      ) : (
        children
      )}
    </div>
  );
};

export default Card;
