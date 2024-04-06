import { Link } from "@/components";
import type { LucideIcon } from "lucide-react";

interface NavLinkProps {
  icon: LucideIcon;
  text: string;
  href: string;
  disabled?: boolean;
  className?: string;
  exact?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  text,
  href,
  icon: Icon,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center gap-0.5 ${disabled ? "pointer-events-none" : ""} ${className}`}
      unActiveClassName="opacity-60 transition-opacity hover:opacity-100"
      aria-disabled={disabled}
      {...props}
    >
      <Icon />
      <span className="text-xs">{text}</span>
    </Link>
  );
};

export default NavLink;
