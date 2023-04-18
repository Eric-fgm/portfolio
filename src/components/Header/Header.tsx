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
    <header className={`text-center ${className}`} {...props}>
      <h4 className="text-lg text-muted font-medium">{subhead}</h4>
      <h1 className="mt-2 text-6xl text-white font-semibold">{headline}</h1>
    </header>
  );
};

export default Header;
