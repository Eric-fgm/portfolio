"use client";

import NavLink from "@/features/layouts/components/NavLink";
import {
  HamburgerMenu,
  Logo,
  LanguageSwitcher,
  Popover,
  Link,
} from "@/components";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowDownNarrowWide, Database, Sigma, Waypoints } from "lucide-react";
import { useTranslate } from "@/hooks";

interface NavigationProps { }

const Navigation: React.FC<NavigationProps> = () => {
  const pathname = usePathname();
  const t = useTranslate("navigation");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "inherit";
  }, [isOpen]);

  return (
    <nav className="fixed left-0 top-0 z-40 flex h-18 w-full items-center justify-between px-4 md:px-6">
      <HamburgerMenu
        isOpened={isOpen}
        onClick={() => setIsOpen((wasOpened) => !wasOpened)}
        className="md:hidden"
      />
      <Logo />
      <div
        className={`absolute left-0 top-0 -z-10 w-full overflow-hidden pt-18 backdrop-blur-2xl transition-[height] duration-200 md:h-full md:overflow-visible md:pt-0 md:transition-none ${isOpen ? "h-screen" : "h-full"}`}
      >
        <div className="no-scrollbar flex h-full flex-col items-center gap-x-12 gap-y-16 overflow-auto py-16 md:flex-row md:justify-center md:overflow-visible md:py-0">
          <NavLink
            icon={ArrowDownNarrowWide}
            text={t.sorting}
            href="/sorting-algorithms"
          />
          <NavLink icon={Waypoints} text={t.graphs} href="/graph-algorithms" />
          <NavLink icon={Database} text={t.generator} href="/data-generator" />
          <Popover
            button={
              <NavLink
                icon={Sigma}
                text={t.maths}
                href="/maths"
                exact={false}
                disabled
              />
            }
          >
            {({ close }) => (
              <>
                <Link
                  href="/maths/interpolation"
                  className="px-4 py-2 text-sm"
                  unActiveClassName="opacity-60 hover:opacity-100"
                  onClick={() => close()}
                >
                  {t.interpolation}
                </Link>
                <Link
                  href="/maths/quadrature"
                  className="px-4 py-2 text-sm"
                  unActiveClassName="opacity-60 hover:opacity-100"
                  onClick={() => close()}
                >
                  {t.quadrature}
                </Link>
                <Link
                  href="/maths/images"
                  className="px-4 py-2 text-sm"
                  unActiveClassName="opacity-60 hover:opacity-100"
                  onClick={() => close()}
                >
                  {t.images}
                </Link>
              </>
            )}
          </Popover>
          {/* <NavLink
        icon={}
        text={t.dynamic}
        href="/dynamic-algorithms"
        className="animation-delay-[105ms]"
      /> */}
          {/* <NavLink
        icon={}
        text={t.physics}
        href="/physics"
        className="animation-delay-[185ms]"
      /> */}
          {/* <NavLink
            icon={}
            text={t.caseStudies}
            href="/case-studies"
          /> */}
        </div>
      </div>
      <LanguageSwitcher />
    </nav>
  );
};

export default Navigation;
