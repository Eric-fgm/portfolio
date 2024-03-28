import type { LayoutProps } from "@/helpers/types";
import { Inter } from "next/font/google";
import "@/styles/main.scss";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({ children }: LayoutProps) {
  return <html className={`no-scrollbar ${inter.className}`}>{children}</html>;
}
