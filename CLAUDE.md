# CLAUDE.md

Adeola Adeyemo's personal site (deolaj.com): a Next.js portfolio with dev projects, notes
(blog), art, and the odd personal page such as a party or celebration invite. Content for
notes, projects and art comes from Contentful.

## Stack

Next.js 12 (Pages Router), React 17, TypeScript 4.2 (`strict: false`), Tailwind CSS 2 (no JIT,
so no arbitrary values like `top-[14%]`), Emotion for styled components, Framer Motion 4 for
page motion, three.js + GSAP for the 3D reveal on celebration pages.

## Commands

```bash
yarn dev      # local server
yarn build    # production build; also runs ESLint and regenerates public/sitemap.xml
yarn format   # Prettier over the repo
npx eslint pages src --ext .ts,.tsx
npx tsc --noEmit -p .
```

`yarn build` needs `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` (see `.sample-env`).
Without them it compiles, then stops at "Collecting page data". That's expected locally.

## Layout

```
pages/                 routes (one file per page) and pages/api
src/components/        sections/, partials/, pages/ (page bodies), celebration/
src/constants/         editable page data (e.g. naming-ceremony.ts)
src/hooks/             shared React hooks
src/animation/         Framer Motion variants and scroll hooks
src/utils/             pure helpers (calendar links, sitemap, Contentful mapping)
public/                static assets
```

A page file in `pages/` sets the `<Head>` and renders a body component from
`src/components/pages/`.

## Celebration pages

`/celebration/naming-ceremony` is a private invite, not portfolio content:

- It's `noindex` and excluded from the sitemap (`src/utils/generateSitemap.js`). Keep it that
  way, and do the same for any new page under `pages/celebration/`.
- Guests check the page for the Zoom link instead of waiting for a message. Paste the link,
  meeting ID and passcode into `ZOOM` in `src/constants/naming-ceremony.ts` and deploy.
- First visits get a three.js envelope reveal (`src/components/celebration/envelope-scene.ts`).
  Returning visitors, reduced-motion users and anyone whose 3D code takes over 4 seconds to
  load skip it.
- The share image `public/celebration/naming-ceremony-og.png` is a static 1200x630 render.

## Design preferences

- **No em dashes** in user-facing copy, alt text or meta tags. Use commas, colons or periods.
- **No pill shapes or status-bar designs**: no `rounded-full` badges, eyebrow chips, "live"
  pills or progress bars. Section labels are plain uppercase text (see `SectionTitle`).
  Buttons use `rounded-sm`.
- **No glows**: no blurred colour blobs, radial-glow backgrounds or coloured shadow halos.
  Accent colours are solid fills, borders or text.
- **Accessible contrast**: WCAG AA (4.5:1) for text. Never put orange/rose text on an
  orange/rose-tinted background.
- **Typography**: Nunito is the site font. Labels are uppercase, tracked and semibold.
  Cormorant Garamond (`font-display`) is only for invitation-style headings.
- **Icons**: inline SVG for one-offs. If an icon library is ever needed, use Phosphor.
- **Respect reduced motion** in anything animated.

## Code conventions

- Comments: two lines max, only for the non-obvious. No comments restating the code.
- Search before creating a file, component or hook; reuse what's in `src/components/partials`,
  `src/hooks` and `src/utils`.
- Formatting: `.prettierrc` uses `bracketSameLine` (JSX `>` stays on the last prop line).
  ESLint enforces Prettier during `yarn build`, so a formatting error fails the deploy.
- three.js is pinned to `0.183.0`. Newer releases use ES2022 class static blocks, which
  Next 12's Terser can't minify. Don't bump it without upgrading Next.
- Framer Motion variants use the labels `initial` / `animate` (set by `Layout`).

## Git

- Commit as the human operator (local config only): `Adeola Adeyemo <adeola.adeyemoj@yahoo.com>`.
- No Claude or Anthropic attribution anywhere: no `Co-Authored-By` trailers, session links or
  "Generated with" lines in commits or PR descriptions. `.claude/settings.json` turns these off.
- Ask for the branch name prefix before the first commit of a conversation. A pre-assigned
  branch name is not an answer.
- `develop` is the working branch.
