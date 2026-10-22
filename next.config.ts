import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Exported as plain files that Cloudflare serves as static assets, so no
	// Worker code runs per request. Redirects live in public/_redirects and
	// headers in public/_headers, since an export can't run Next's own.
	output: "export",

	/*
		No image optimisation: an export has no optimiser. Every image on the
		site is instead pre-sized to the widths it is actually displayed at (see
		the build note in src/components/Card.tsx) and served straight off the
		asset CDN.
	*/
	images: { unoptimized: true },
};

export default nextConfig;
