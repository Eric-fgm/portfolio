import type { Locale } from "@/features/language";
import { config, getDictionary } from "@/features/language";
import { TranslateProvider } from "@/features/language/providers/translate";
import { Navigation } from "@/features/navigation";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

export async function generateStaticParams() {
  return config.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: LocaleLayoutProps["params"];
}) {
  const t = await getDictionary(locale);

  return {
    title: t.meta.title,
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const t = await getDictionary(locale);

  return (
    <TranslateProvider dictionares={t}>
      <div id="app">
        <Navigation />
        {children}
      </div>
    </TranslateProvider>
  );
}
