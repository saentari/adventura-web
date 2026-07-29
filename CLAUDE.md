# adventura-web

Marketing site for Adventura — `adventura.gg`. Next.js 16 (App Router, Turbopack)
+ Tailwind v4 + React 19, deployed to Cloudflare Workers via OpenNext.

The product itself is the Flutter app in `../adventura`, served at
`app.adventura.gg`. This repo is the shop window in front of it.

---

## Design System (CRITICAL)

**The visual system is mirrored from the Flutter app. It is not designed here.**

Source of truth: `../adventura/lib/core/design_system/`. When the app's theme
changes, [`src/app/globals.css`](src/app/globals.css) changes to match — that
file is the only place raw hex values belong.

| Token | Utility | Mirrors |
| :--- | :--- | :--- |
| `--background` | `bg-background` | `AppTheme.scaffoldBackgroundColor` |
| `--surface` | `bg-surface` | `colorScheme.surface` |
| `--card` | `bg-card` | `context.cardBackgroundColor` (also the nav bar) |
| `--ink` / `--ink-muted` | `text-ink` / `text-ink-muted` | `onSurface` / `onSurfaceVariant` |
| `--line` / `--line-soft` | `border-line` / `border-line-soft` | `outline` / `outlineVariant` |
| `--color-button*` | `bg-button text-button-ink border-button-line` | `AppColors.buttonPrimary*` |
| `--radius-*` | `rounded-sm` (8) `rounded-md` (12) … | `AppRadius` |
| `--text-*` | `text-body`, `text-header`, `text-title-lg` … | `AppTextStyle` |
| `--breakpoint-medium` (840) | `medium:` | `BreakpointWidths.medium` |
| `--container-content` (1200) | `max-w-content` | `LayoutSizes.maxContentWidth` |

**Two deliberate divergences from the app**, both because a browser is not the app:

1. **`--link` is not `--accent`.** The app's green `#9BB1A1` is 2.2:1 on white —
   fine behind the large elements the app uses it for, unreadable as 14px link
   text. `--link` is a darkened cut that clears WCAG AA; `--accent` keeps the
   original for decoration. Never set body text in `--accent`.
2. **`.text-display` is fluid.** The app's type scale is fixed px for a
   fixed-density surface. Only the hero headline uses `clamp()`, so it survives
   the 360px-to-1200px range a website has to cover.

### Rules

- Never write a raw hex outside `globals.css`. Use the token utilities.
- `font-brand` (SansitaSwashed) is for the wordmark and card/section titles
  **only** — the app makes the same call in its nav bar: swashes slow down
  glance-reading, so navigation and body copy stay in Satoshi.
- Satoshi is self-hosted from the app's own OTFs, converted to WOFF2 in
  `src/fonts/`. Only Regular/Italic/Medium/Bold ship. To add a weight, convert
  from `../adventura/assets/fonts/Satoshi/` and register it in `layout.tsx`.

---

## Images

`next/image` optimisation is **off** (`next.config.ts`), and that is intentional:
OpenNext's `/_next/image` handler only optimises when the Worker has an `IMAGES`
binding, and `wrangler.jsonc` has none — so it would fetch the original, hand it
straight back, and bill a Worker invocation for it.

Instead every image is pre-sized to two widths at authoring time, and `Card`
builds the `srcset` from the basename. See the README for the `magick` commands.
Card art is copied from `../adventura/assets/images/`.

---

## Links out

All external destinations live in [`src/lib/links.ts`](src/lib/links.ts).
App deep links are **bare paths** (`/characters`, not `/#/characters`) — the
Flutter app runs `usePathUrlStrategy()`. They mirror `AppRoutes` in the app;
a route rename there breaks them silently, so they are worth re-checking when
the app's routing changes.

Note: the web build of the app hides destinations it cannot serve. Before adding
a new deep link, check `_destinations` in `../adventura/lib/presentation/shell/app_shell.dart`
for a `hiddenOnWeb` flag.

---

## Don't break

- **`/auth/callback`** is functional, not decorative. The app's
  `AppUrls.authCallbackSignup` / `authCallbackRecovery` point at it, and it runs
  the Supabase `verifyOtp` + `updateUser` password-reset flow. Restyle freely;
  leave the behaviour alone.
- **`next.config.ts` redirects** — `/adventura/*` came from the old
  saentari.com paths and is still linked from shipped app builds.
- **`public/.well-known/`** — the Apple App Site Association and Android
  assetlinks files back universal/app links. They are served with explicit
  headers from `public/_headers`.
- **Footer attribution** — the SRD credit and the Wizards of the Coast
  disclaimer are licence obligations, not decoration.

---

## Quick reference

| Task | Command |
| :--- | :--- |
| Dev server | `npm run dev` |
| Build + typecheck | `npm run check` |
| Preview the Worker build locally | `npm run preview` |
| Deploy | `npm run deploy` |
| Regenerate Cloudflare env types | `npm run cf-typegen` |
