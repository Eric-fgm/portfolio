import { SolidLanguage } from "@/icons";

interface LanguageSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = "",
  ...props
}) => {
  return (
    <div
      className={`${className} flex items-center flex-col gap-0.5 cursor-pointer`}
      {...props}
    >
      <SolidLanguage />
      <span className="text-xs">English</span>
    </div>
  );
};

export default LanguageSwitcher;
