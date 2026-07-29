import type { Metadata, Viewport } from "next";
import { Sansita_Swashed } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AUTH_PRESENCE_SCRIPT } from "@/lib/auth-presence";

/**
 * Brand face, matching the app's `SansitaSwashed` family.
 *
 * The app bundles a single static TTF; Google's is the variable cut of the
 * same typeface, so the wordmark renders identically.
 */
const sansita = Sansita_Swashed({
	variable: "--font-sansita",
	subsets: ["latin"],
	weight: ["400", "500"],
	display: "swap",
});

/**
 * Body face, matching the app's `Satoshi` family.
 *
 * Not on Google Fonts — these are the app's own OTFs converted to WOFF2 and
 * self-hosted. Only the four cuts the site actually sets are shipped; the app
 * bundles Light and Black too, which nothing here uses.
 */
const satoshi = localFont({
	variable: "--font-satoshi",
	display: "swap",
	src: [
		{ path: "../fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
		{ path: "../fonts/Satoshi-Italic.woff2", weight: "400", style: "italic" },
		{ path: "../fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
		{ path: "../fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
	],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://adventura.gg"),
	title: {
		default: "Adventura — D&D 5e Character Creator & Solo Adventures",
		template: "%s | Adventura",
	},
	description:
		"Free homebrew tools for Dungeons & Dragons 5e and 5.5e. Build characters, run solo adventures, and browse the full SRD library — in your browser, on iOS and Android.",
	keywords: [
		"D&D character creator",
		"D&D 5e character sheet",
		"homebrew D&D tools",
		"solo D&D adventures",
		"5e character builder",
		"DnD SRD library",
	],
	alternates: { canonical: "/" },
	openGraph: {
		title: "Adventura — D&D 5e Character Creator & Solo Adventures",
		description:
			"Build D&D 5e characters, run solo adventures, and browse the full SRD library. Free in your browser, on iOS and Android.",
		type: "website",
		url: "https://adventura.gg",
		siteName: "Adventura",
		images: [{ url: "/images/encounter.webp", width: 1024, height: 1024 }],
	},
	twitter: {
		card: "summary_large_image",
		title: "Adventura — D&D 5e Character Creator & Solo Adventures",
		description:
			"Build D&D 5e characters, run solo adventures, and browse the full SRD library.",
		images: ["/images/encounter.webp"],
	},
};

/**
 * Browser chrome follows the theme, the same pair the app sets in its
 * `web/index.html` — so moving between adventura.gg and app.adventura.gg
 * doesn't flash a different colour behind the address bar.
 */
export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#F5F5F5" },
		{ media: "(prefers-color-scheme: dark)", color: "#121212" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${sansita.variable} ${satoshi.variable} bg-background text-ink antialiased`}
			>
				{/*
					First thing in the body so it runs before the nav is parsed, which
					is what keeps the signed-in button from flashing. The pages are
					statically prerendered and CDN-cached identically for everyone —
					this is the only personalisation, and it happens in the browser, so
					the cache stays intact.
				*/}
				<script dangerouslySetInnerHTML={{ __html: AUTH_PRESENCE_SCRIPT }} />
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
