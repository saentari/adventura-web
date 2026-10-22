import type { MetadataRoute } from "next";

// Written out as a file by the static export
export const dynamic = "force-static";

/**
 * Web manifest, mirroring the app's `web/manifest.json` — same name, same
 * background and theme colours, same icon set.
 *
 * One deliberate difference: `display` is `browser`, not `standalone`. The app
 * is an installable application and says so; this is a marketing site in front
 * of it. Claiming `standalone` here would make Chrome offer to install the
 * brochure, and anyone accepting would get a chromeless window onto a page
 * whose whole job is to send them somewhere else. The manifest is here for the
 * icons and the home-screen name, not for installability.
 */
export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Adventura",
		short_name: "Adventura",
		description:
			"Homebrew tools for Dungeons & Dragons 5e and 5.5e: character creation, custom sheets, an SRD library, and single-player adventures.",
		start_url: "/",
		display: "browser",
		background_color: "#F5F5F5",
		theme_color: "#F5F5F5",
		icons: [
			{ src: "/icons/Icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
			{ src: "/icons/Icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
			{
				src: "/icons/Icon-maskable-192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "maskable",
			},
			{
				src: "/icons/Icon-maskable-512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
		],
	};
}
