import React from "react";
import type { Metadata } from "next";

import "@/assets/styles/global.scss";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { RFDewiExtended } from "@/assets/fonts";

export const metadata: Metadata = {
	title: "VSRAP - бренд одежды и мерчендайза популярных артистов",
	description: "Копия сайта vsrap.shop в учебных целях", // аваы аыв вы аываыв а ыва ыва ыа ыва ыва
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
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
