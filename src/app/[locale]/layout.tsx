import { config, getDictionary } from "@/features/language";
import type { Locale } from "@/features/language";
import { TranslateProvider } from "@/features/language/providers/translate";
import "@/styles/main.scss";
// import { Navigation } from "@/features/navigation";
import dynamic from "next/dynamic";

const Navigation = dynamic(
  () => import("@/features/navigation/components/Navigation"),
  { ssr: false }
);

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
