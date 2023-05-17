"use client";
import { Logo } from "@/components";
import { LanguageSwitcher } from "@/features/language";
import { NavLinkList } from "@/features/navigation";
import { SolidMenu } from "@/icons";
import { useTheme } from "@/providers/theme";

interface MobileNavigationProps {}

const MobileNavigation: React.FC<MobileNavigationProps> = () => {
  const { type, isOpened, toggleNavigation } = useTheme();

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full no-scrollbar overflow-auto mobile-navigation ${type} ${
          isOpened ? "h-screen" : "h-0"
        }`}
      >
        <NavLinkList
          className={`pt-28 flex-col items-center gap-y-16 ${
            isOpened ? "animating-navigation" : "animate-navigation"
          }`}
        />
      </div>
      <div className="relative p-4 flex items-center justify-between w-full backdrop-blur-2xl">
        <button type="button" onClick={toggleNavigation}>
          <SolidMenu />
        </button>
        <Logo />
        <LanguageSwitcher minimal />
      </div>
    </>
  );
};

export default MobileNavigation;
