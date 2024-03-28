import { config, getDictionary } from "@/helpers/dictionaries";

export type Locale = (typeof config)["locales"][number];

export type Dictionaries = Awaited<ReturnType<typeof getDictionary>>;

export interface PageProps {
  params: { locale: Locale };
}

export interface LayoutProps extends React.PropsWithChildren {
  params: { locale: Locale };
}

export interface MetadataProps extends PageProps {}
