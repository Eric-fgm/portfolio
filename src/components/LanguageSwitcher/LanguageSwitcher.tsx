"use client";

import { useCallback } from "react";
import { Languages } from "lucide-react";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useLocale, useTheme } from "@/hooks";
import { config } from "@/helpers/dictionaries";

interface LanguageSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {}

const variantMap = {
  dark: {
    bg: "bg-homepage-secondary",
  },
  darkBlue: {
    bg: "bg-sortingpage-secondary",
  },
  lightBlue: {
    bg: "bg-graphpage-secondary",
  },
  seaBlue: {
    bg: "bg-[#1b3543]",
  },
};

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = "",
  ...props
}) => {
  const { variant } = useTheme();
  const locale = useLocale();
  const pathname = useSelectedLayoutSegment();

  const getLocalizedHref = useCallback(
    (locale: string) => (pathname ? `/${locale}/${pathname}` : `/${locale}`),
    [pathname],
  );

  return (
    <Popover className="relative" {...props}>
      <Popover.Button
        className={`${className} flex cursor-pointer flex-col items-center gap-0.5`}
      >
        <Languages />
        <span className="hidden text-xs md:block">{locale.name}</span>
      </Popover.Button>

      <Popover.Panel
        className={`absolute -right-2 z-10 mt-1 flex flex-col rounded-lg ${variantMap[variant].bg}`}
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
      </Popover.Panel>
    </Popover>
  );
};

export default LanguageSwitcher;
