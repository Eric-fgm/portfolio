import { ThemeProvider } from "@/providers";
import { BaseLayout } from "@/features/layouts";
import type { LayoutProps } from "@/helpers/types";

export default async function DarkLayout({ children }: LayoutProps) {
  return (
    <ThemeProvider variant="dark">
      <BaseLayout className="bg-homepage">{children}</BaseLayout>
    </ThemeProvider>
  );
}
