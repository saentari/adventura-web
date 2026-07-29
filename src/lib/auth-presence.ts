/**
 * Cross-subdomain "is someone signed in?" signal.
 *
 * `adventura.gg` and `app.adventura.gg` are separate origins, so this site
 * cannot read the app's Supabase session — localStorage is partitioned per
 * origin, and the browser hands each host its own bucket. The app therefore
 * publishes one bit deliberately: a cookie scoped to `.adventura.gg`, which
 * both hosts can see.
 *
 * The cookie carries **no token and no identifier** — just `1`. It is enough
 * to choose between "Sign in" and "Open app", and useless to anyone who
 * intercepts it. Sharing the real session instead would mean putting a refresh
 * token in a JS-readable cookie on the marketing origin, which is a much wider
 * blast radius for a cosmetic label change.
 *
 * Written by the Flutter app in `core/services/auth_presence_cookie_web.dart`.
 * Both sides must agree on this name.
 */
export const AUTH_PRESENCE_COOKIE = "adv_signed_in";

/**
 * Runs before the page paints, so the nav renders the correct button the first
 * time rather than swapping after hydration.
 *
 * Stringified into an inline script rather than shipped as a module: by the
 * time a bundle has loaded and React has hydrated, the wrong button has
 * already been on screen for a frame or two. Defaults to signed-out, which is
 * both the safe assumption and the common case.
 *
 * The signal can be stale — the app's refresh token may have expired since it
 * was written. That degrades to showing "Open app" to someone who then meets a
 * sign-in screen, which is a mild misstep rather than a broken state, so it is
 * not worth a network round trip on every page load to prevent.
 */
export const AUTH_PRESENCE_SCRIPT = `try{document.documentElement.dataset.auth=document.cookie.split("; ").some(function(c){return c==="${AUTH_PRESENCE_COOKIE}=1"})?"in":"out"}catch(e){}`;
