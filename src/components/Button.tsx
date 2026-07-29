import Link from "next/link";

/**
 * The unified action button, ported from `CustomTextButton.primary`.
 *
 * Deliberately identical in light and dark mode — near-black fill, dark-grey
 * outline, light text — exactly as `AppColors.buttonPrimary*` defines it. It is
 * the loudest thing on any page it appears on, so there is only ever one per
 * view competing for attention.
 */
export default function Button({
	href,
	children,
	size = "md",
	external = false,
	className = "",
}: {
	href: string;
	children: React.ReactNode;
	size?: "sm" | "md";
	external?: boolean;
	className?: string;
}) {
	const sizing =
		size === "sm" ? "px-4 py-2 text-body-sm" : "px-5 py-2.5 text-body";

	const classes = [
		"inline-flex items-center justify-center gap-2 rounded-[10px]",
		"bg-button text-button-ink border border-button-line font-medium",
		"transition-opacity hover:opacity-85",
		"focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
		sizing,
		className,
	].join(" ");

	// Absolute URLs leave the site (the app, the stores) — those get a plain
	// anchor; Link's prefetching has nothing to prefetch for them.
	if (external || href.startsWith("http")) {
		return (
			<a href={href} className={classes}>
				{children}
			</a>
		);
	}

	return (
		<Link href={href} className={classes}>
			{children}
		</Link>
	);
}
