import { Link } from "@/components";

interface NavLinkProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  href: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  text,
  href,
  icon: Icon,
  className = "",
  ...props
}) => {
  return (
    <Link
      href={href}
      className={`flex items-center flex-col gap-0.5 ${className}`}
      activeClassName="opacity-100"
      unActiveClassName="opacity-60 transition-opacity hover:opacity-100"
      {...props}
    >
      <Icon />
      <span className="text-xs">{text}</span>
    </Link>
  );
};

export default NavLink;
