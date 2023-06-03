"use client";
import { HamburgerMenu, Logo } from "@/components";
import { LanguageSwitcher } from "@/features/language";
import { NavLinkList } from "@/features/navigation";
import { useTheme } from "@/providers/theme";

interface MobileNavigationProps {}

const MobileNavigation: React.FC<MobileNavigationProps> = () => {
  const { type, isOpened, toggleNavigation } = useTheme();

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full no-scrollbar overflow-auto navigation-flyout ${type} ${
          isOpened ? "navigation-flyout--opened h-screen" : "h-0"
        }`}
      >
        <NavLinkList className="pt-28 flex-col items-center gap-y-16" />
      </div>
      <div className="relative p-4 flex items-center justify-between w-full backdrop-blur-2xl">
        <HamburgerMenu isOpened={isOpened} onClick={toggleNavigation} />
        <Logo />
        <LanguageSwitcher minimal />
      </div>
    </>
  );
};

export default MobileNavigation;
