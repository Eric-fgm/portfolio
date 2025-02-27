"use client";

import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { useSelectedLayoutSegment, usePathname } from "next/navigation";
import { useLocale } from "@/hooks";

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  unActiveClassName?: string;
  exact?: boolean;
  rel?: string;
  target?: string;
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  className = "",
  activeClassName = "",
  unActiveClassName = "",
  exact = true,
  ...props
}) => {
  const locale = useLocale();
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = usePathname();

  const getLocalizedHref = (originalHref: string) => {
    return originalHref.replace(/^\//, "/" + locale.code + "/");
  };

  const localizedHref =
    typeof href === "string"
      ? getLocalizedHref(href)
      : href.pathname != null
        ? { ...href, pathname: getLocalizedHref(href.pathname) }
        : href;

  const isActive = exact
    ? localizedHref === pathname
    : `/${selectedLayoutSegment}` === href;

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
