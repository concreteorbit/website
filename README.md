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
- The homepage presents four selected campaigns: Alice Focus + Sleep, Mt. Angel Vitamins Joint Solution, Before SuperMint Toothpaste and Phil’s Daily Facial Cleanser.
- Every homepage campaign opens on its extreme macro and links to a dedicated campaign page.
- Campaign pages lead with an extreme macro, then a slight macro and angled hero before the placement examples.
- Campaign pages keep the public sequence focused on the extreme macro, slight macro and angled hero. Additional hero and copy-space photographs support the placement examples.
- Every campaign ends with a website banner and a two-option advertising presentation. Campaign text stays in the photographed negative space, away from the product.
- Featured brand work is labeled as independent study work and should remain factually identified that way.

## Inquiry form

The inquiry form uses Formspree through `@formspree/react`. Confirm the configured Formspree project remains owned and monitored before publishing. The UI and validation were tested locally; no live submission was sent during the latest review.

Campaign-page inquiry links include a campaign reference in the URL and pass that reference into a hidden form field. All links labeled “Start a project” lead to `/#contact`.

## Publishing checks

- Confirm a business email before adding a visible email alternative.
- Confirm pricing, timing, revision allowance, payment terms and usage rights before publishing those details.
- No analytics service is currently configured.
- `vercel.json` and `public/_redirects` preserve direct project routes for supported hosts.
