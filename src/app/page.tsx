import Card from "@/components/Card";
import { LINKS } from "@/lib/links";

/**
 * Home — a bento grid of the product's surfaces.
 *
 * Two columns above the app's `medium` breakpoint, one below. The columns are
 * `display: contents` on a phone so all six cards become direct children of
 * the stack and can be re-sequenced with `order`: the desktop reading order is
 * column-by-column, which is not the order they should be met in on a phone.
 * One DOM tree either way — nothing is duplicated or hidden.
 */
export default function Home() {
	return (
		<div className="mx-auto max-w-content px-4 py-4 medium:px-6 expanded:px-8">
			<div className="flex flex-col gap-3 medium:flex-row">
				<div className="contents medium:flex medium:flex-1 medium:flex-col medium:gap-3">
					<Card
						lead
						className="order-1 medium:order-none"
						image={{
							src: "encounter",
							alt: "An armoured adventurer raising a glowing weapon against a towering beast in a dark forest",
						}}
						title="Homebrew Dungeons & Dragons Tools"
						description="Adventura is compatible with Dungeons & Dragons 5e and 5.5e. Build your own characters, customise their sheets, and put them to the test in single-player adventures."
						cta={{ label: "Start playing", href: LINKS.webApp }}
					/>
					<Card
						className="order-2 medium:order-none"
						image={{
							src: "characters",
							alt: "A blacksmith's forge with an anvil and glowing coals",
						}}
						title="Character Creation"
						description="Build your D&D character from scratch, pick one from the premade list, or import a character you already have. Start anywhere from level 1 to 20."
						cta={{ label: "Go to characters", href: LINKS.appCharacters }}
					/>
					<Card
						className="order-4 medium:order-none"
						image={{
							src: "library",
							alt: "An open spellbook wreathed in arcane light",
						}}
						title="The Library"
						description="Every SRD rule, spell, monster and item in one searchable place — plus everything you import yourself as custom content."
						cta={{ label: "Open the library", href: LINKS.appLibrary }}
					/>
					<Card
						className="order-7 medium:order-none"
						image={{
							src: "premium",
							alt: "A dragon curled around an open treasure chest",
						}}
						title="Premium"
						description="Unlimited characters, the full power-builds collection, and unrestricted access to every feature."
						cta={{ label: "Coming soon to the web", disabled: true }}
					/>
				</div>

				<div className="contents medium:flex medium:flex-1 medium:flex-col medium:gap-3">
					<Card
						className="order-3 medium:order-none"
						image={{
							src: "adventures",
							alt: "A party of adventurers making their way through a misty forest",
						}}
						title="Solo Adventures"
						description="Play a full campaign on your own. Adventura runs the rules, the dice and the encounters — every choice is still yours."
						cta={{ label: "Select an adventure", href: LINKS.appAdventures }}
					/>
					<Card
						className="order-5 medium:order-none"
						image={{
							src: "community",
							alt: "Adventurers raising tankards together in a crowded tavern",
						}}
						title="Social media"
						description="Connect with other players, share your builds, and help shape what gets made next."
						cta={{
							label: "Join our community",
							href: LINKS.reddit,
							external: true,
						}}
					/>
					<Card
						fill
						className="order-6 medium:order-none"
						image={{
							src: "download",
							alt: "A robed wizard channelling swirling arcane magic",
						}}
						title="Download mobile"
						description="Get the best experience on iOS and Android — and keep playing offline, wherever the table is."
						cta={{ label: "Download now", href: "/download" }}
					/>
				</div>
			</div>

			<script
				type="application/ld+json"
				// Structured data for the app itself. Search engines use this for the
				// rich result; it is the same set of facts the page states in prose.
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "Adventura",
						applicationCategory: "GameApplication",
						operatingSystem: "iOS, Android, Web",
						description:
							"Homebrew tools for Dungeons & Dragons 5e and 5.5e: character creation, custom sheets, an SRD library, and single-player adventures.",
						url: "https://adventura.gg",
						offers: {
							"@type": "Offer",
							price: "0",
							priceCurrency: "USD",
						},
					}),
				}}
			/>
		</div>
	);
}
