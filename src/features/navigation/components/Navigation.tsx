import { LanguageSwitcher, NavLinkList } from "@/features/navigation";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <nav className="fixed top-0 left-0 px-6 flex items-center justify-between h-18 w-full z-40">
      <div className="basis-1/6">L</div>
      <NavLinkList />
      <div className="flex basis-1/6">
        <LanguageSwitcher className="ml-auto" />
      </div>
    </nav>
  );
};

export default Navigation;
