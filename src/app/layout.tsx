import "@/styles/main.scss";
import { Inter } from "next/font/google";

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
