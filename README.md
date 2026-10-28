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
- The homepage presents four selected campaigns: Trace Magnesium Glycinate, Trace Electrolytes, Mt. Angel Vitamins Joint Solution and Phil’s Daily Facial Cleanser.
- Every homepage campaign opens on its extreme macro and links to a dedicated campaign page.
- Each campaign contains the same five-image system: hero, hero with copy space, slight macro, messaging macro and extreme macro.
- Every campaign ends with three practical placement examples: an extreme-macro website banner, a copy-space advertisement and a slight-macro Instagram preview.
- Advertisement copy stays in the photographed negative space and never overlaps the product.

## Inquiry form

The inquiry form uses Formspree through `@formspree/react`. Confirm the configured Formspree project remains owned and monitored before publishing. The UI and validation were tested locally; no live submission was sent during the latest review.

Campaign-page inquiry links include a campaign reference in the URL and pass that reference into a hidden form field. All links labeled “Start a project” lead to `/#contact`.

## Publishing checks

- Confirm a business email before adding a visible email alternative.
- Confirm pricing, timing, revision allowance, payment terms and usage rights before publishing those details.
- No analytics service is currently configured.
- `vercel.json` and `public/_redirects` preserve direct project routes for supported hosts.
