/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Button from "@/components/Button";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
	title: "Download",
	description:
		"Get Adventura for iOS and Android, or play free in your browser. Build D&D 5e characters, run solo adventures, and browse the full SRD library.",
	alternates: { canonical: "/download" },
	openGraph: {
		title: "Download Adventura — D&D 5e on iOS, Android and the web",
		description:
			"Get Adventura for iOS and Android, or play free in your browser.",
		url: "https://adventura.gg/download",
		images: [{ url: "/images/download.webp", width: 1024, height: 1024 }],
	},
};

const PLATFORM_NOTES = [
	{
		title: "Works offline on mobile",
		body: "Create and manage characters with no connection and no account. Sign in only if you want your characters to sync across devices.",
	},
	{
		title: "The browser needs an account",
		body: "A browser has no local storage to fall back on, so the web app signs you in and keeps everything in the cloud.",
	},
	{
		title: "Solo adventures travel with you",
		body: "Adventure packs run on-device, so a campaign started on the sofa carries on wherever you are — signal or not.",
	},
];

export default function DownloadPage() {
	return (
		<div className="mx-auto max-w-content px-4 py-4 medium:px-6 expanded:px-8">
			<div className="overflow-hidden rounded-md border border-line-soft bg-card p-2 shadow-[var(--shadow-card)]">
				{/* The art is square, so an even split would drive the card's height
				    off the image and leave the copy floating in dead space. */}
				<div className="grid gap-2 medium:grid-cols-[2fr_3fr]">
					<img
						src="/images/download.webp"
						srcSet="/images/download-640.webp 640w, /images/download.webp 1024w"
						sizes="(min-width: 840px) 470px, 100vw"
						alt="A robed wizard channelling swirling arcane magic"
						width={1024}
						height={1024}
						fetchPriority="high"
						decoding="async"
						className="aspect-[5/3] w-full rounded-sm object-cover medium:aspect-auto medium:h-full"
					/>

					<div className="flex flex-col justify-center px-3 py-6 medium:px-8 medium:py-10">
						<h1 className="font-brand text-display text-ink">
							Get Adventura
						</h1>
						<p className="mt-3 text-body text-ink-muted">
							Free on iOS and Android, and free in your browser. Build
							Dungeons &amp; Dragons 5e characters, run solo adventures, and
							search the whole SRD library.
						</p>

						<div className="mt-8 flex flex-wrap items-center gap-3">
							<a
								href={LINKS.appStore}
								target="_blank"
								rel="noopener noreferrer"
								className="transition-opacity hover:opacity-80"
							>
								<img
									src="/images/apple_app_store.png"
									alt="Download on the App Store"
									width={180}
									height={60}
								/>
							</a>
							<a
								href={LINKS.playStore}
								target="_blank"
								rel="noopener noreferrer"
								className="transition-opacity hover:opacity-80"
							>
								<img
									src="/images/google_play.png"
									alt="Get it on Google Play"
									width={202}
									height={60}
								/>
							</a>
						</div>

						<div className="mt-8 border-t border-line-soft pt-6">
							<p className="text-body-sm text-ink-muted">
								Not on a phone? Nothing to install.
							</p>
							<div className="mt-3">
								<Button href={LINKS.webApp}>Play in your browser</Button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-3 grid gap-3 medium:grid-cols-3">
				{PLATFORM_NOTES.map((note) => (
					<section
						key={note.title}
						className="rounded-md border border-line-soft bg-card px-5 py-6 shadow-[var(--shadow-card)]"
					>
						<h2 className="font-brand text-header-sm text-ink">{note.title}</h2>
						<p className="mt-2 text-body-sm text-ink-muted">{note.body}</p>
					</section>
				))}
			</div>
		</div>
	);
}
