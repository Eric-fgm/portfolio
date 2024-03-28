interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  subhead: string;
  headline: string;
}

const Header: React.FC<HeaderProps> = ({
  subhead = "",
  headline = "",
  className = "",
  ...props
}) => {
  return (
    <header
      className={`flex flex-col items-center text-center ${className}`}
      {...props}
    >
      <h4 className="text-lg font-medium text-muted">{subhead}</h4>
      <h1 className="mt-1 text-6xl font-semibold text-white">{headline}</h1>
    </header>
  );
};

export default Header;
