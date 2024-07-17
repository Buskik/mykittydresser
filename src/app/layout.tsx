import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "MyKittyDresser",
	description: "Dressing game inspired in Hello Kitty",
	icons: {
		icon: "/Logo.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={caveat.className}>{children}</body>
		</html>
	);
}
