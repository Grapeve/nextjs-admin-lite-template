import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { HandleOnComplete } from "@/lib/router-events";

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
      <body className={font.className} suppressHydrationWarning={true}>
        <HandleOnComplete />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
