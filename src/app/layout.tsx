import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cinzel = Cinzel({
	variable: "--font-heading",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const inter = Inter({
	variable: "--font-body",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://adventura.gg"),
	title: {
		default: "Adventura - 5E Character Manager",
		template: "%s | Adventura",
	},
	description:
		"Create and manage your 5E characters with ease. Adventura is the companion app for players and dungeon masters alike.",
	openGraph: {
		title: "Adventura - 5E Character Manager",
		description: "Create and manage your 5E characters with ease. The companion app for players and dungeon masters alike.",
		type: "website",
		url: "https://adventura.gg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${cinzel.variable} ${inter.variable} font-body antialiased bg-background text-foreground`}
			>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
