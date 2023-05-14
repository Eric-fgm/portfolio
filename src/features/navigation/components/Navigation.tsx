"use client";
import { DesktopNavigation, MobileNavigation } from "@/features/navigation";
import { useTheme } from "@/providers/theme";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  const { isMobile } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full transition-[height] z-40">
      {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
    </nav>
  );
};

export default Navigation;
