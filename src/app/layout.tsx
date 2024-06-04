import type { Metadata } from "next";

import "./globals.scss";
import Gnb from "./gnb";

export const metadata: Metadata = {
  title: "UI",
  description: "UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Gnb />
        <main>{children}</main>
      </body>
    </html>
  );
}
