import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/*
		No runtime image optimisation.

		OpenNext routes /_next/image through the Worker, but its handler only
		optimises when an `IMAGES` binding exists — and wrangler.jsonc has none,
		so it would fetch the original and hand it straight back, one Worker
		invocation per image for no benefit. Every image on the site is instead
		pre-sized to the widths it is actually displayed at (see the build note
		in src/components/Card.tsx) and served straight off the asset CDN.
	*/
	images: { unoptimized: true },

	async redirects() {
		return [
			// Paths that were app-scoped on saentari.com are now the site root here.
			{ source: "/adventura", destination: "/", permanent: true },
			{ source: "/adventura/:path*", destination: "/:path*", permanent: true },
		];
	},
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
