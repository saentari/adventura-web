import Link from "next/link";
import Image from "next/image";
import { LINKS } from "@/lib/links";

export default function Footer() {
	return (
		<footer className="bg-background-surface border-t border-border">
			<div className="max-w-6xl mx-auto px-6 py-12">
				<div className="flex flex-col md:flex-row items-start justify-between gap-8">
					{/* Brand */}
					<div className="flex flex-col gap-3">
						<div className="flex items-center gap-3">
							<Image
								src="/adventura-logo.svg"
								alt="Adventura"
								width={24}
								height={24}
								className="invert"
							/>
							<span className="font-heading text-lg font-semibold text-foreground tracking-wide">
								Adventura
							</span>
						</div>
						<p className="text-sm text-foreground-muted">
							A Saentari product
						</p>
					</div>

					{/* Links */}
					<div className="flex gap-12">
						<div className="flex flex-col gap-3">
							<h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
								Product
							</h4>
							<Link
								href="/support"
								className="text-sm text-foreground-muted hover:text-gold transition-colors"
							>
								Support
							</Link>
							<a
								href={LINKS.reddit}
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm text-foreground-muted hover:text-gold transition-colors"
							>
								Reddit
							</a>
						</div>
						<div className="flex flex-col gap-3">
							<h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
								Legal
							</h4>
							<Link
								href="/privacy"
								className="text-sm text-foreground-muted hover:text-gold transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms"
								className="text-sm text-foreground-muted hover:text-gold transition-colors"
							>
								Terms & Conditions
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-xs text-foreground-muted">
						&copy; {new Date().getFullYear()} Saentari. All rights reserved.
					</p>
					<p className="text-xs text-foreground-muted">
						SRD content licensed under{" "}
						<a
							href="https://creativecommons.org/licenses/by/4.0/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gold/70 hover:text-gold transition-colors"
						>
							Creative Commons Attribution 4.0
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
