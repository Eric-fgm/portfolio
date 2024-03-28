import { ThemeProvider } from "@/providers";
import { BaseLayout } from "@/features/layouts";
import type { LayoutProps } from "@/helpers/types";

export default async function SeaBlueLayout({ children }: LayoutProps) {
  return (
    <ThemeProvider variant="seaBlue">
      <BaseLayout className="bg-[#132833]">{children}</BaseLayout>
    </ThemeProvider>
  );
}
