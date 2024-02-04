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
      <NavLink
        icon={SolidSorting}
        text={t.sorting}
        href="/sorting-algorithms"
        className="animation-delay-[25ms]"
      />
      <NavLink
        icon={SolidGraph}
        text={t.graphs}
        href="/graph-algorithms"
        className="animation-delay-[65ms]"
      />
      <NavLink
        icon={SolidLightning}
        text={t.generator}
        href="/data-generator"
        className="animation-delay-[105ms]"
      />
      {/* <NavLink
        icon={SolidLightning}
        text={t.dynamic}
        href="/dynamic-algorithms"
        className="animation-delay-[105ms]"
      /> */}
      <NavLink
        icon={SolidBucket}
        text={t.physics}
        href="/physics"
        className="animation-delay-[145ms]"
      />
      <NavLink
        icon={SolidCaseStudies}
        text={t.caseStudies}
        href="/case-studies"
        className="animation-delay-[185ms]"
      />
    </div>
  );
};

export default NavLinkList;
