import { RFDewiExtended } from "@/assets/fonts";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/global.scss";
import type { Metadata } from "next";
import { ReactNode } from "react";

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
