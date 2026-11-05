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
- `src/selectedWork.ts` selects four full-page homepage campaigns: PS5, Trace Magnesium, Harry's, and HOKA. Xbox is temporarily hidden from the homepage while its campaign route remains active.
- HOKA's homepage cover is the top macro.
- PS5 opens at `/work/playstation-5`. Its homepage cover and opening photograph are the controller button macro.
- PS5 gallery: controller button macro, console hero, console logo macro, console upper detail, controller hero, and controller trigger macro.
- PS5 images use the approved finished 4K PNGs, with responsive lossless WebP exports from 480 to 3840 pixels wide. Native-size exports preserve the source pixels exactly.
- Harry's opens at `/work/harrys-taming-cream`, with its approved five-image gallery and top-macro homepage cover.
- All campaign pages use the HOKA format: one large opening photograph, then two-column rows with tight gutters. Slight-macro/close views appear first in those rows; a final unpaired photograph spans the full row.
- Galleries fill the available page width with small gutters and preserve the photographs' original aspect ratios.
- Dedicated copy-space variants stay in the source image records but are omitted from the displayed campaign gallery.
- Website, advertisement, and social placement examples are temporarily hidden. Their component is retained for a later revision.
- The introduction identifies Simon as Photographer + Creative Director, with a short first-person paragraph.
- Campaign headers contain the campaign/product names. A small number on each photograph matches a compact image-name guide and photographer credit below the gallery; the former role/deliverables panels and descriptive taglines are not displayed.
- `public/images` contains website image assets.

The active portfolio is PS5, Harry’s, HOKA, Xbox Elite, and Trace Magnesium. The studio photographs, founder hover interaction, and inquiry form are retained.

## Validation

TypeScript and Vite production builds pass. The compact galleries have been checked in an isolated browser at desktop and phone sizes for image counts, proportions, hierarchy, missing assets, horizontal overflow and working inquiry links. Preview screenshots and verification results are saved in the workspace under `output/compact-campaign-layout/`. Publication is tracked through the GitHub Pages workflow.

## Retired campaign routes

Mt. Angel Joint Solution, Phil’s Daily Facial Cleanser, and Trace Electrolytes have been removed from active campaign data. Alice was already absent from the active router. Their previous campaign URLs resolve to the site’s not-found page.
