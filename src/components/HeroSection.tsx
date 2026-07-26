import Image from "next/image";
import GoldDivider from "./GoldDivider";
import { LINKS } from "@/lib/links";

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background image */}
			<div className="absolute inset-0">
				<Image
					src="/images/hero-landscape.webp"
					alt=""
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
			</div>

			{/* Content */}
			<div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
				<h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
					Your Table, Your{" "}
					<span className="text-gold">Rules</span>
				</h1>
				<p className="text-lg sm:text-xl text-foreground-muted mb-10 max-w-2xl mx-auto leading-relaxed">
					Create and manage your 5E characters with ease.
					The companion app for players and dungeon masters alike.
				</p>

				<GoldDivider />

				{/* Primary action: play right now in the browser, no install. */}
				<div className="mt-8">
					<a
						href={LINKS.webApp}
						className="inline-block px-8 py-4 bg-gold text-background font-semibold text-lg rounded-lg hover:bg-gold-light transition-colors"
					>
						Play in your browser
					</a>
				</div>

				<p className="mt-6 text-sm text-foreground-muted">or get the app</p>

				<div
					id="download"
					className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4 scroll-mt-20"
				>
					<a
						href={LINKS.appStore}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/images/apple_app_store.png"
							alt="Download on the App Store"
							width={180}
							height={60}
							className="hover:opacity-80 transition-opacity"
						/>
					</a>
					<a
						href={LINKS.playStore}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/images/google_play.png"
							alt="Get it on Google Play"
							width={202}
							height={60}
							className="hover:opacity-80 transition-opacity"
						/>
					</a>
				</div>
			</div>
		</section>
	);
}
