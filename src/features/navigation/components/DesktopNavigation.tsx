import { Logo } from "@/components";
import NavLinkList from "./NavLinkList";
import { LanguageSwitcher } from "@/features/language";

interface DesktopNavigationProps {}

const DesktopNavigation: React.FC<DesktopNavigationProps> = () => {
  return (
    <div className="px-6 py-4 flex items-center justify-between backdrop-blur-2xl">
      <Logo className="basis-1/6" />
      <NavLinkList />
      <div className="flex justify-end basis-1/6">
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default DesktopNavigation;
