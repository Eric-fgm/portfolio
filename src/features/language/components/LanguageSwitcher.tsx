"use client";
import { Popover } from "@headlessui/react";
import { config } from "@/features/language";
import { SolidLanguage } from "@/icons";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useCallback } from "react";
import { useLocale } from "@/features/language/hooks";

interface LanguageSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
  minimal?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  minimal = false,
  className = "",
  ...props
}) => {
  const locale = useLocale();
  const pathname = useSelectedLayoutSegment();

  const getLocalizedHref = useCallback(
    (locale: string) => (pathname ? `/${locale}/${pathname}` : `/${locale}`),
    [pathname]
  );

  return (
    <Popover className="relative" {...props}>
      <Popover.Button
        className={`${className} flex items-center flex-col gap-0.5 cursor-pointer`}
      >
        <SolidLanguage />
        {!minimal && <span className="text-xs">{locale.name}</span>}
      </Popover.Button>

      <Popover.Panel className="absolute mt-1 px-2 py-1.5 -right-2 flex flex-col backdrop-blur-2xl shadow-2xl rounded-lg z-10">
        {config.locales.map((locale) => (
          <Link
            key={locale}
            href={getLocalizedHref(locale)}
            className="px-1.5 py-1 text-sm"
          >
            {config.names[locale]}
          </Link>
        ))}
      </Popover.Panel>
    </Popover>
  );
};

export default LanguageSwitcher;
