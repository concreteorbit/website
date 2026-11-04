# Concrete Orbit

React, TypeScript and Vite portfolio website.

## Develop and build

```sh
pnpm install
pnpm dev
pnpm build
```

Production output: `dist/`. Vercel routing is configured in `vercel.json`; `public/_redirects` provides a fallback for static hosts that support it.

## Portfolio content

- `src/projectData.ts` contains the five current campaigns and their galleries.
- `src/selectedWork.ts` selects five homepage campaigns.
- PS5, Trace Magnesium and Harry's each have a full-page homepage feature. Xbox Elite and HOKA share the final desktop page and stack on mobile.
- PS5 opens at `/work/playstation-5`. Its homepage cover and opening photograph are the controller button macro.
- PS5 gallery: controller button macro, console hero, console logo macro, console upper detail, controller hero, and controller trigger macro.
- PS5 images use the approved finished 4K PNGs, with responsive lossless WebP exports from 480 to 3840 pixels wide. Native-size exports preserve the source pixels exactly.
- Harry's opens at `/work/harrys-taming-cream`, with its approved five-image gallery and top-macro homepage cover.
- Campaigns include website, advertisement, and social placement examples. Placement copy stays outside the product photograph.
- `public/images` contains website image assets.

The active portfolio is PS5, Harry’s, HOKA, Xbox Elite, and Trace Magnesium. The studio photographs, founder hover interaction, and inquiry form are retained.

## Validation

TypeScript and Vite production build passed. Campaign order, image references, responsive dimensions, and native PS5 image pixels were checked. Local browser preview was unavailable; visual desktop/mobile verification remains outstanding. This package has not been deployed to the live site.

## Retired campaign routes

Mt. Angel Joint Solution, Phil’s Daily Facial Cleanser, and Trace Electrolytes have been removed from active campaign data. Alice was already absent from the active router. Their previous campaign URLs resolve to the site’s not-found page.
