# Concrete Orbit

React + TypeScript + Vite portfolio website.

## Run locally

```bash
pnpm install
pnpm dev
pnpm build
```

## Portfolio content

- Campaign data and image sets live in `src/projectData.ts`.
- Homepage campaign selections live in `src/selectedWork.ts`.
- Optimized website assets live in `public/images`.
- The homepage campaign set begins with Alice Focus + Sleep, followed by Mt. Angel Vitamins Joint Solution, Before SuperMint Toothpaste, ACURE Shampoo, Trace Magnesium Glycinate, EO, OM Lion's Mane and ACURE Body Wash.
- The Alice homepage card alternates between the Sleep and Focus extreme macros every 15 seconds. Its case-study page keeps the variants as separate photographs in five matched pairs.
- In the Alice placement examples, the website banner alternates between Focus and Sleep every 30 seconds, the ad uses the slight macro, and the social post uses the straight hero.
- Each campaign page includes website, ad and social placement examples.
- Featured brand work is labeled as independent study work and should remain factually identified that way.

## Inquiry form

The inquiry form uses Formspree through `@formspree/react`. Confirm the configured Formspree project remains owned and monitored before publishing. The UI and validation were tested locally; no live submission was sent during the latest review.

Campaign-page inquiry links include a campaign reference in the URL and pass that reference into a hidden form field. All links labeled “Start a project” lead to `/#contact`.

## Publishing checks

- Confirm a business email before adding a visible email alternative.
- Confirm pricing, timing, revision allowance, payment terms and usage rights before publishing those details.
- No analytics service is currently configured.
- `vercel.json` and `public/_redirects` preserve direct project routes for supported hosts.
