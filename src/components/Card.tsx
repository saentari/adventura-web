/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

/*
	`next/image` is deliberately not used for card art.

	The Worker has no `IMAGES` binding (see wrangler.jsonc), so OpenNext's
	`/_next/image` handler falls through and returns the original bytes — the
	optimisation never happens, and every request pays a Worker invocation for
	the privilege. A plain `<img>` with a hand-built srcset skips the round trip
	entirely and serves the pre-sized WebP variants straight from the asset CDN,
	which is what the build already produces.
*/

type CardImage = {
	/** Basename in /public/images; `-640` variant is assumed to exist. */
	src: string;
	alt: string;
};

type CardCta =
	| { label: string; href: string; external?: boolean }
	| { label: string; disabled: true };

function isDisabled(cta: CardCta): cta is { label: string; disabled: true } {
	return "disabled" in cta;
}

/**
 * Base card, ported from the app's `ThemedCard` proportions: card-coloured
 * fill, 12px corners, a hairline border and the same soft elevation shadow.
 *
 * The image sits inset rather than bleeding to the card edge — it reads as
 * something the card contains rather than something it is, which keeps the
 * title as the primary element even when the art is loud.
 */
export default function Card({
	image,
	title,
	description,
	cta,
	lead = false,
	fill = false,
	className = "",
}: {
	image: CardImage;
	title: string;
	description: string;
	cta?: CardCta;
	/**
	 * The page's opening card. Styled identically to every other one — it
	 * differs only in carrying the `h1` and in loading its image eagerly,
	 * since it is the largest thing above the fold.
	 */
	lead?: boolean;
	/**
	 * Absorb whatever height is left at the bottom of its column.
	 *
	 * Seven equal cards cannot tile two columns evenly — one column always
	 * carries a fourth, leaving roughly a card's worth of dead space under the
	 * other. Rather than pad it out or drop a card, the last card in the short
	 * column takes the slack: its crop grows instead of being fixed at 5:3, so
	 * both columns land flush. Nothing else about it changes.
	 */
	fill?: boolean;
	className?: string;
}) {
	const Heading = lead ? "h1" : "h2";

	return (
		<div
			className={`flex flex-col overflow-hidden rounded-md border border-line-soft bg-card p-2 shadow-[var(--shadow-card)] ${fill ? "medium:flex-1" : ""} ${className}`}
		>
			<img
				src={`/images/${image.src}.webp`}
				srcSet={`/images/${image.src}-640.webp 640w, /images/${image.src}.webp 1024w`}
				sizes="(min-width: 840px) 592px, 100vw"
				alt={image.alt}
				width={1024}
				height={614}
				loading={lead ? "eager" : "lazy"}
				fetchPriority={lead ? "high" : "auto"}
				decoding="async"
				className={`aspect-[5/3] w-full rounded-sm object-cover ${
					fill ? "medium:aspect-auto medium:min-h-0 medium:flex-1" : ""
				}`}
			/>

			<div
				className={`flex flex-col px-3 pt-4 pb-2 ${fill ? "flex-none" : "flex-1"}`}
			>
				<Heading className="font-brand text-header text-ink">{title}</Heading>

				<p className="mt-2 text-body-sm text-ink-muted">{description}</p>

				{cta && (
					<div className="mt-auto pt-4">
						{isDisabled(cta) ? (
							<span className="inline-flex items-center gap-2 text-body-sm text-ink-muted">
								{cta.label}
							</span>
						) : (
							<CardLink {...cta} />
						)}
					</div>
				)}
			</div>
		</div>
	);
}

/**
 * The card's action. A text link rather than a button: every card on the home
 * grid carries one, and six filled buttons would leave nothing to lead the eye.
 * The arrow nudges on hover so the affordance survives without colour alone.
 */
function CardLink({
	label,
	href,
	external,
}: {
	label: string;
	href: string;
	external?: boolean;
}) {
	const classes =
		"group inline-flex items-center gap-2 text-body-sm text-link transition-colors hover:text-link-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link";

	const content = (
		<>
			{label}
			<span
				aria-hidden
				className="transition-transform group-hover:translate-x-1"
			>
				&rarr;
			</span>
		</>
	);

	if (external || href.startsWith("http")) {
		return (
			<a
				href={href}
				target={external ? "_blank" : undefined}
				rel={external ? "noopener noreferrer" : undefined}
				className={classes}
			>
				{content}
			</a>
		);
	}

	return (
		<Link href={href} className={classes}>
			{content}
		</Link>
	);
}
