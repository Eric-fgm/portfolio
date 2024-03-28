import { ThemeProvider } from "@/providers";
import { BaseLayout } from "@/features/layouts";
import type { LayoutProps } from "@/helpers/types";

export default async function DarkBlueLayout({ children }: LayoutProps) {
  return (
    <ThemeProvider variant="darkBlue">
      <BaseLayout className="bg-sortingpage">{children}</BaseLayout>
    </ThemeProvider>
  );
}
