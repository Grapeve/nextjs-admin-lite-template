import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { HandleOnComplete } from "@/lib/router-events";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className} suppressHydrationWarning={true}>
        <HandleOnComplete />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
