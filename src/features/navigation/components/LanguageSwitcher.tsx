import { SolidLanguage } from "@/icons";

interface LanguageSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
  minimal?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  minimal = false,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`${className} flex items-center flex-col gap-0.5 cursor-pointer`}
      {...props}
    >
      <SolidLanguage />
      {!minimal && <span className="text-xs">English</span>}
    </div>
  );
};

export default LanguageSwitcher;
