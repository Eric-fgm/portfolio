"use client";

import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useLocale } from "@/hooks";

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  unActiveClassName?: string;
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  className = "",
  activeClassName = "",
  unActiveClassName = "",
  ...props
}) => {
  const locale = useLocale();
  const pathname = useSelectedLayoutSegment();

  const getLocalizedHref = (originalHref: string) => {
    return originalHref.replace(/^\//, "/" + locale.code + "/");
  };

  const localizedHref =
    typeof href === "string"
      ? getLocalizedHref(href)
      : href.pathname != null
        ? { ...href, pathname: getLocalizedHref(href.pathname) }
        : href;

  const isActive = `/${pathname}` === href;

  return (
    <NextLink
      href={localizedHref}
      className={
        isActive
          ? `${activeClassName} ${className}`
          : `${unActiveClassName} ${className}`
      }
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
