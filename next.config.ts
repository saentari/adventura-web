import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
