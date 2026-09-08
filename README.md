# Concrete Orbit

React + TypeScript + Vite. Run `pnpm install`, `pnpm dev`, and `pnpm build` (type checking followed by a production build). Preview with `pnpm preview`.

## Portfolio content

Edit `src/projects.ts`. Each project has its own `/work/:slug` route using the shared project template. Replace `cover: null` with `{ src, alt, width, height, srcSet? }`, add gallery images, and replace the null description with approved copy. Store optimized AVIF/WebP assets in `public/images` and use `/images/...` paths. Supply descriptive alt text and responsive srcSet variants where available. Supporting images are lazy loaded. The homepage campaign hero is an explicitly labeled CSS placeholder in `Home`; replace its ImageFrame image prop when approved imagery is available. No project images, personal details, testimonials, or client credits are fabricated.

## Launch setup

- Replace the founder name placeholder and confirm project disciplines before publishing.
- Connect the inquiry form to a real submission and upload service. Currently it validates the inquiry and downloads a local text brief; it does not send anything or upload files. The UI explains this limitation.
- Configure the host to rewrite unknown paths to `index.html` for direct project route visits. A sample Netlify-compatible `_redirects` file is included.
- Add the final site URL/canonical URLs and social share image once supplied. Metadata titles update per project; use prerendering if the deployment requires route-specific social crawler metadata.
- Fonts load from Google Fonts with system fallbacks.
