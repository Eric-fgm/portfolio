import { useTranslate } from "@/features/language/providers/translate";
import { NavLink } from "@/features/navigation";
import {
  SolidBucket,
  SolidCaseStudies,
  SolidGraph,
  SolidLightning,
  SolidSorting,
} from "@/icons";

interface NavLinkListProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavLinkList: React.FC<NavLinkListProps> = ({
  className = "",
  ...props
}) => {
  const t = useTranslate("navigation");

  return (
    <div className={`flex gap-x-12 ${className}`} {...props}>
      <div className="animate-child" data-delay="50">
        <NavLink
          icon={SolidSorting}
          text={t.sorting}
          href="/sorting-algorithms"
        />
      </div>
      <div className="animate-child" data-delay="100">
        <NavLink icon={SolidGraph} text={t.graphs} href="/graph-algorithms" />
      </div>
      <div className="animate-child" data-delay="150">
        <NavLink
          icon={SolidLightning}
          text={t.generator}
          href="/data-generator"
        />
      </div>
      {/* <div className="animate-child" data-delay="150">
        <NavLink
          icon={SolidLightning}
          text={t.dynamic}
          href="/dynamic-algorithms"
        />
      </div> */}
      <div className="animate-child" data-delay="200">
        <NavLink icon={SolidBucket} text={t.physics} href="/physics" />
      </div>
      <div className="animate-child" data-delay="250">
        <NavLink
          icon={SolidCaseStudies}
          text={t.caseStudies}
          href="/case-studies"
        />
      </div>
    </div>
  );
};

export default NavLinkList;
