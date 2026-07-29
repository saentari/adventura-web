import Link from "next/link";
import Button from "./Button";
import { LINKS } from "@/lib/links";

/**
 * Persistent top navigation, ported from the app's `AppShell` bar.
 *
 * 72px tall, card-coloured with a hairline bottom border, the wordmark
 * anchoring the left, and a single filled button at the right end.
 *
 * No destinations: the home grid already leads to every page the site has,
 * and the footer carries them on every other page. A bar with two lonely
 * links beside a wordmark reads as an unfinished menu rather than a
 * navigation system.
 */
export default function Navbar() {
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
					Both states ship in the markup; CSS shows one. See
					`lib/auth-presence.ts` for why the choice is made from a cookie
					before paint rather than after hydration.
				*/}
				<div className="ml-auto">
					<span data-auth-visible="out">
						<Button href={LINKS.webApp} size="sm">
							Sign in
						</Button>
					</span>
					<span data-auth-visible="in">
						<Button href={LINKS.webApp} size="sm">
							Open app
						</Button>
					</span>
				</div>
			</div>
		</nav>
	);
}
