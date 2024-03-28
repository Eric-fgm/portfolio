import { config, getDictionary } from "@/helpers/dictionaries";
import { TranslateProvider } from "@/providers";
import type { LayoutProps, MetadataProps } from "@/helpers/types";

export async function generateStaticParams() {
  return config.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const t = await getDictionary(locale);

  return {
    title: t.meta.title,
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LayoutProps) {
  const t = await getDictionary(locale);

  return <TranslateProvider dictionares={t}>{children}</TranslateProvider>;
}
