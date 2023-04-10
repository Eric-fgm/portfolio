import Navigation from "@/features/navigation";
import { getDictionary } from "@/helpers/get-dictionary";
import { Locale, i18n } from "@/helpers/i18n-config";
import "@/styles/main.scss";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: LocaleLayoutProps["params"];
}) {
  const t = await getDictionary(locale);

  return {
    title: t["meta.title"],
    // hrefs: [{ rel: "preconnect", href: "https://fonts.googleapis.com" }],
    preconnects: [{ href: "https://fonts.googleapis.com" }],
    // link: [
    //   {
    //     rel: "preconnect",
    //     href: "https://fonts.googleapis.com",
    //   },
    //   {
    //     rel: "preconnect",
    //     href: "https://fonts.gstatic.com",
    //     crossorigin: true,
    //   },
    //   {
    //     rel: "stylesheet",
    //     href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
    //   },
    // ],
  };
}

export default async function LocaleLayout({ children }: LocaleLayoutProps) {
  return (
    <div id="app">
      <Navigation />
      {children}
    </div>
  );
}
