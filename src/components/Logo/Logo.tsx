import { Link } from "@/components";
import { SolidLightning } from "@/icons";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

const Logo: React.FC<LogoProps> = ({ className = "", ...props }) => {
  return (
    <div className={`flex ${className}`} {...props}>
      <Link href="/">
        <SolidLightning width={32} height={32} />
      </Link>
    </div>
  );
};

export default Logo;
