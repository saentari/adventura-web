import Image from "next/image";
import GoldDivider from "./GoldDivider";
import { LINKS } from "@/lib/links";

export default function CTASection() {
	return (
		<section className="py-24 px-6 bg-background-alt relative overflow-hidden">
			{/* Decorative background glow */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent-purple)/8%,transparent_70%)]" />

			<div className="relative z-10 max-w-2xl mx-auto text-center">
				<h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
					Ready to Begin Your Adventure?
				</h2>
				<GoldDivider />
				<p className="mt-4 text-foreground-muted mb-10 text-lg">
					Join adventurers managing their characters with Adventura.
					Play free in your browser, or on iOS and Android.
				</p>

				<div className="mb-8">
					<a
						href={LINKS.webApp}
						className="inline-block px-8 py-4 bg-gold text-background font-semibold text-lg rounded-lg hover:bg-gold-light transition-colors"
					>
						Play in your browser
					</a>
				</div>

				<p className="text-sm text-foreground-muted mb-4">or get the app</p>

				<div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
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

				<a
					href={LINKS.reddit}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 text-foreground-muted hover:text-gold transition-colors"
				>
					<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.508 13.533c.063.236.097.48.097.73 0 2.427-2.837 4.397-6.335 4.397s-6.335-1.97-6.335-4.398c0-.257.036-.508.103-.749a1.726 1.726 0 01-.627-1.323c0-.956.776-1.731 1.732-1.731.465 0 .886.183 1.198.481 1.178-.824 2.79-1.35 4.563-1.418l.87-4.09a.342.342 0 01.406-.265l2.894.617c.2-.397.606-.667 1.076-.667.662 0 1.2.537 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.655 0-1.187-.527-1.199-1.182l-2.584-.55-.775 3.645c1.727.088 3.29.614 4.438 1.42a1.724 1.724 0 011.194-.473c.956 0 1.732.775 1.732 1.731 0 .548-.256 1.036-.656 1.352zM9.5 12.8c-.662 0-1.2.538-1.2 1.2 0 .663.538 1.2 1.2 1.2.663 0 1.2-.537 1.2-1.2 0-.662-.537-1.2-1.2-1.2zm5 0c-.663 0-1.2.538-1.2 1.2 0 .663.537 1.2 1.2 1.2.662 0 1.2-.537 1.2-1.2 0-.662-.538-1.2-1.2-1.2zm-4.63 3.68a.34.34 0 01.477-.05c.6.476 1.37.738 2.163.738.793 0 1.563-.262 2.163-.738a.34.34 0 01.477.05.34.34 0 01-.05.477 4.159 4.159 0 01-2.59.891 4.159 4.159 0 01-2.59-.891.34.34 0 01-.05-.477z" />
					</svg>
					Join our Reddit community
				</a>
			</div>
		</section>
	);
}
