import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

import StyledComponentsRegistry from "@/theme/AntdRegistry";
import { HandleOnComplete } from "@/lib/router-events";
import ThemeProvider from "@/theme/theme-provider";

// const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs Admin",
  description: "Nextjs Admin Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const themeSettings = JSON.parse(
    cookieStore.get("settings")?.value as string
  );

  return (
    <html lang="en">
      <body className={""} suppressHydrationWarning={true}>
        <HandleOnComplete />
        <ThemeProvider themeSettings={themeSettings}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
