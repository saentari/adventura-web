# adventura-web

Marketing site for Adventura — [adventura.gg](https://adventura.gg).

Next.js 16 (App Router), exported as static files and served by Cloudflare Workers static assets. The app itself is a
separate Flutter project (`../adventura`) served at `app.adventura.gg`.

## What lives here

| Route | What it is |
| :--- | :--- |
| `/` | Home — the bento grid of product surfaces |
| `/download` | iOS, Android and browser |
| `/support` | FAQ and contact |
| `/privacy`, `/terms` | Legal, sourced from `src/content/legal/` |
| `/auth/callback` | **Functional.** Supabase email verification and password reset — deep-links into the native app on mobile, hands off to the web app on desktop |

`/auth/callback` is the one page that does real work; the app's
`AppUrls.authCallback*` point at it. Treat its behaviour as load-bearing.

## Design system

The look is **ported from the Flutter app**, not invented here — the two are
meant to read as one product. Tokens live in [`src/app/globals.css`](src/app/globals.css)
and mirror `adventura/lib/core/design_system/`. See
[CLAUDE.md](CLAUDE.md) for the mapping and the rules that go with it.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # build + typecheck
npm run preview    # build for Workers and run it locally
npm run deploy     # build and ship to Cloudflare
```

Environment: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
(`.env.local` / `.env.production`) — used only by the password-reset form.

## Assets

Card art is copied from the app's `assets/images/` and pre-sized at build
authoring time, not at runtime — the Worker has no `IMAGES` binding, so
`next/image` optimisation is off by design. To add an image:

```bash
magick source.png -resize 1024x1024 -quality 82 -define webp:method=6 public/images/name.webp
magick source.png -resize 640x640   -quality 82 -define webp:method=6 public/images/name-640.webp
```

Then reference it as `image={{ src: "name", alt: "…" }}` — `Card` builds the
srcset from that basename.
