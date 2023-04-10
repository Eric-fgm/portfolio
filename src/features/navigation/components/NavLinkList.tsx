import { NavLink } from "@/features/navigation";
import {
  SolidBucket,
  SolidCaseStudies,
  SolidGraph,
  SolidLightning,
  SolidSorting,
} from "@/icons";

interface NavLinkListProps {}

const NavLinkList: React.FC<NavLinkListProps> = ({}) => {
  return (
    <div className="flex gap-12">
      <NavLink icon={SolidSorting} text="Sorting" href="/sorting-algorithms" />
      <NavLink icon={SolidGraph} text="Graphs" href="/graphs-algorithms" />
      <NavLink
        icon={SolidLightning}
        text="Dynamic"
        href="/dynamic-algorithms"
      />
      <NavLink icon={SolidBucket} text="Physics" href="/physics" />
      <NavLink
        icon={SolidCaseStudies}
        text="Case Studies"
        href="/case-studies"
      />
    </div>
  );
};

export default NavLinkList;
