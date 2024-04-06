"use client";

import { useCallback } from "react";
import { Languages } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegment, usePathname } from "next/navigation";
import { useLocale } from "@/hooks";
import { Popover } from "@/components";
import { config } from "@/helpers/dictionaries";

interface LanguageSwitcherProps {}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = () => {
  const locale = useLocale();
  const pathname = usePathname().split("/").slice(2).join("/");

  const getLocalizedHref = useCallback(
    (locale: string) => (pathname ? `/${locale}/${pathname}` : `/${locale}`),
    [pathname],
  );

  return (
    <Popover
      button={
        <>
          <Languages />
          <span className="hidden text-xs md:block">{locale.name}</span>
        </>
      }
    >
      {config.locales.map((currLocale) => (
        <Link
          key={currLocale}
          href={getLocalizedHref(currLocale)}
          className={`${currLocale === locale.code ? "cursor-default" : "opacity-60 hover:opacity-100"} px-4 py-2 text-sm`}
        >
          {config.names[currLocale]}
        </Link>
      ))}
    </Popover>
  );
};

export default LanguageSwitcher;
