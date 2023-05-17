"use client";
import { DesktopNavigation, MobileNavigation } from "@/features/navigation";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <nav className="fixed top-0 left-0 w-full transition-[height] z-40">
      <div className="md:hidden">
        <MobileNavigation />
      </div>
      <div className="hidden md:block">
        <DesktopNavigation />
      </div>
    </nav>
  );
};

export default Navigation;
