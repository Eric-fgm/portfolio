import Providers from "@/providers/Providers";
// import { Inter } from "next/font/google";
import "@/styles/main.scss";

interface RootLayoutProps {
  children: React.ReactNode;
}

// const inter = Inter({
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
