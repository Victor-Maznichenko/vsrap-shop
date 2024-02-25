import { ReactNode } from "react";

import { RFDewiExtended } from "@/assets/fonts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "react-loading-skeleton/dist/skeleton.css";
import "@/styles/global.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VSRAP - бренд одежды и мерчендайза популярных артистов",
  description: "Копия сайта vsrap.shop в учебных целях",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={RFDewiExtended.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
