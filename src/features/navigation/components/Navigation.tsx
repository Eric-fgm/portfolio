"use client";

import { LanguageSwitcher, NavLinkList } from "@/features/navigation";
import { SolidMenu } from "@/icons";
import { useTheme } from "@/providers/theme";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  const { isMobile } = useTheme();

  return (
    <nav
      className={`fixed top-0 left-0 px-4 flex items-center justify-between w-full z-40 md:px-6 ${
        isMobile ? "h-13" : "h-18"
      }`}
    >
      {isMobile ? (
        <>
          <SolidMenu />
          <LanguageSwitcher minimal />
        </>
      ) : (
        <>
          <div className="basis-1/6">L</div>
          <NavLinkList />
          <div className="flex basis-1/6">
            <LanguageSwitcher className="ml-auto" />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
