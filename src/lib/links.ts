/**
 * Every destination the site links out to.
 *
 * App links are bare paths, not `/#/…` — the Flutter app runs
 * `usePathUrlStrategy()` (see `adventura/lib/core/routing/url_strategy_web.dart`),
 * so its routes are real URLs. They mirror `AppRoutes`; a rename there is a
 * breaking change here.
 */
const APP = "https://app.adventura.gg";

export const LINKS = {
	appStore: "https://apps.apple.com/us/app/adventura-ttrpg/id6759534191",
	playStore:
		"https://play.google.com/store/apps/details?id=com.saentari.adventura",
	reddit: "https://www.reddit.com/r/adventura/",
	srdLicense: "https://creativecommons.org/licenses/by/4.0/",
	email: "contact@saentari.com",

	/** The Flutter web app. Account-only — a browser has no local storage to
	 *  fall back on, so there is no offline mode there. */
	webApp: APP,
	appCharacters: `${APP}/characters`,
	appAdventures: `${APP}/adventures`,
	appLibrary: `${APP}/library`,
	appCommunity: `${APP}/community`,
} as const;
