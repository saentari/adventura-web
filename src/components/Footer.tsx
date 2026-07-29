import Link from "next/link";
import { LINKS } from "@/lib/links";

const FOOTER_LINKS = [
	{ label: "Terms of Use", href: "/terms" },
	{ label: "Privacy Policy", href: "/privacy" },
	{ label: "Support", href: "/support" },
	{ label: "Download", href: "/download" },
];

export default function Footer() {
	return (
		<footer className="mt-6 border-t border-line bg-card">
			<div className="mx-auto max-w-content px-4 py-8 medium:px-6 expanded:px-8">
				<div className="flex flex-col gap-6 medium:flex-row medium:items-center medium:justify-between">
					<nav className="flex flex-wrap gap-x-8 gap-y-3">
						{FOOTER_LINKS.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-body-sm text-ink transition-colors hover:text-link"
							>
								{link.label}
							</Link>
						))}
						<a
							href={LINKS.reddit}
							target="_blank"
							rel="noopener noreferrer"
							className="text-body-sm text-ink transition-colors hover:text-link"
						>
							Community
						</a>
					</nav>

					<p className="text-body-sm text-ink-muted">
						&copy; Saentari {new Date().getFullYear()}
					</p>
				</div>

				{/*
					SRD attribution. Required by the Creative Commons licence the 5e
					SRD is published under — the app ships that content, so the
					credit travels with the product rather than being tucked away in
					the app alone.
				*/}
				<p className="mt-6 border-t border-line-soft pt-6 text-caption text-ink-muted">
					Adventura is an independent product and is not affiliated with, endorsed by, or
					sponsored by Wizards of the Coast. Dungeons &amp; Dragons is a trademark of
					Wizards of the Coast LLC. SRD content is used under{" "}
					<a
						href={LINKS.srdLicense}
						target="_blank"
						rel="noopener noreferrer"
						className="text-link underline transition-colors hover:text-link-hover"
					>
						Creative Commons Attribution 4.0
					</a>
					.
				</p>
			</div>
		</footer>
	);
}
