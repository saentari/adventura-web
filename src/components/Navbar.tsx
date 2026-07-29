"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { LINKS } from "@/lib/links";

/**
 * Persistent top navigation, ported from the app's `AppShell` bar.
 *
 * Same anatomy: 72px tall, card-coloured with a hairline bottom border, the
 * wordmark anchoring the left in the brand face, destinations in plain Satoshi
 * beside it, and a single filled button at the right end. The active
 * destination is marked by a 2px rule hanging off the bar's bottom edge rather
 * than sitting under its label — it reads as marking the bar's boundary, and
 * keeps the labels on the same baseline as the wordmark.
 */

const DESTINATIONS = [
	{ label: "Download", href: "/download" },
	{ label: "Support", href: "/support" },
];

export default function Navbar() {
	const pathname = usePathname();

	return (
		<nav className="sticky top-0 z-50 border-b border-line bg-card">
			<div className="mx-auto flex h-[72px] max-w-content items-center px-4 medium:px-6 expanded:px-8">
				<Link
					href="/"
					className="font-brand text-header text-ink transition-opacity hover:opacity-80"
				>
					Adventura
				</Link>

				{/*
					Hidden below the app's `medium` breakpoint, matching the mockup and
					the app — which is a pass-through at those widths. Both destinations
					are reachable from the home grid and the footer on a phone.
				*/}
				<div className="ml-10 hidden h-full items-stretch medium:flex">
					{DESTINATIONS.map((destination) => {
						const active =
							pathname === destination.href ||
							pathname.startsWith(`${destination.href}/`);

						return (
							<Link
								key={destination.href}
								href={destination.href}
								aria-current={active ? "page" : undefined}
								className="group relative flex items-center px-4 text-body text-ink-muted transition-colors hover:text-ink"
							>
								{destination.label}
								<span
									aria-hidden
									className={`absolute inset-x-0 bottom-0 h-0.5 transition-colors ${
										active ? "bg-ink" : "bg-transparent"
									}`}
								/>
							</Link>
						);
					})}
				</div>

				<div className="ml-auto">
					<Button href={LINKS.webApp} size="sm">
						Sign in
					</Button>
				</div>
			</div>
		</nav>
	);
}
