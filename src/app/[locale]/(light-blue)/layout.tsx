import { ThemeProvider } from "@/providers";
import { BaseLayout } from "@/features/layouts";
import type { LayoutProps } from "@/helpers/types";

export default async function LightBlueLayout({ children }: LayoutProps) {
  return (
    <ThemeProvider variant="lightBlue">
      <BaseLayout className="bg-graphpage">{children}</BaseLayout>
    </ThemeProvider>
  );
}
