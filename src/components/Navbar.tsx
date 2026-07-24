"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="sticky top-0 z-50 bg-background-surface/80 backdrop-blur-md border-b border-border">
			<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-3">
					<Image
						src="/adventura-logo.svg"
						alt="Adventura"
						width={28}
						height={28}
						className="invert"
					/>
					<span className="font-heading text-xl font-semibold text-foreground tracking-wide">
						Adventura
					</span>
				</Link>

				{/* Desktop nav */}
				<div className="hidden md:flex items-center gap-8">
					<Link
						href="/support"
						className="text-foreground-muted hover:text-foreground transition-colors"
					>
						Support
					</Link>
					<a
						href="#download"
						className="px-5 py-2 bg-gold text-background font-semibold rounded-lg hover:bg-gold-light transition-colors"
					>
						Download
					</a>
				</div>

				{/* Mobile menu button */}
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className="md:hidden p-2 text-foreground-muted hover:text-foreground transition-colors"
					aria-label="Toggle menu"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						{menuOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>
			</div>

			{/* Mobile menu */}
			{menuOpen && (
				<div className="md:hidden border-t border-border bg-background-surface/95 backdrop-blur-md">
					<div className="px-6 py-4 flex flex-col gap-4">
						<Link
							href="/support"
							onClick={() => setMenuOpen(false)}
							className="text-foreground-muted hover:text-foreground transition-colors py-2"
						>
							Support
						</Link>
						<a
							href="#download"
							onClick={() => setMenuOpen(false)}
							className="px-5 py-2.5 bg-gold text-background font-semibold rounded-lg hover:bg-gold-light transition-colors text-center"
						>
							Download
						</a>
					</div>
				</div>
			)}
		</nav>
	);
}
