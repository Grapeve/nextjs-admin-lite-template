import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import StyledComponentsRegistry from "@/theme/AntdRegistry";
import { HandleOnComplete } from "@/lib/router-events";
import ThemeProvider from "@/theme/theme-provider";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs Admin",
  description: "Nextjs Admin Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={""} suppressHydrationWarning={true}>
        <HandleOnComplete />
        <ThemeProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
