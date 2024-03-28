import { Link } from "@/components";
import { Zap } from "lucide-react/";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

const Logo: React.FC<LogoProps> = ({ className = "", ...props }) => {
  return (
    <div className={`flex ${className}`} {...props}>
      <Link href="/">
        <Zap width={28} height={28} fill="#fff" />
      </Link>
    </div>
  );
};

export default Logo;
