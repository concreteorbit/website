import './placements.css';

const examples = [
  {
    "id": "website-banner",
    "file": "trace-banner-slogan-v1-concept",
    "title": "Homepage banner",
    "detail": "An extreme macro becomes the first impression. Copy sits beside the photograph, with a clear path to shop.",
    "width": 1600,
    "height": 930,
    "format": "Website / Desktop"
  },
  {
    "id": "product-page",
    "file": "trace-product-concept",
    "title": "Product page",
    "detail": "The hero leads, with two supporting details below. A complete image set brings consistency to the product page.",
    "width": 1600,
    "height": 1192,
    "format": "E-commerce / Desktop"
  },
  {
    "id": "email",
    "file": "trace-email-slogan-v1-concept",
    "title": "Email campaign",
    "detail": "A short benefits message leads into the macro photograph, followed by a clear shop button and a savings message.",
    "width": 1000,
    "height": 1302,
    "format": "Email / Campaign",
    "portrait": true
  },
  {
    "id": "popup-detail",
    "file": "trace-popup-slogan-v1-concept",
    "title": "Popup / Detail",
    "detail": "The slight macro anchors a promotional popup against a softly blurred website.",
    "width": 1600,
    "height": 940,
    "format": "Website / Alternate crop"
  },
  {
    "id": "social",
    "file": "trace-social-slogan-v1-concept",
    "title": "Instagram ad",
    "detail": "The photograph fills the creative. A short line stays on the image; the rest of the copy lives in the caption.",
    "width": 1000,
    "height": 1100,
    "format": "Social / Mobile",
    "portrait": true
  },
  {
    "id": "trace-wide-popup",
    "file": "trace-wide-popup-v2-concept",
    "title": "Wide website popup",
    "detail": "A wide product photograph pairs with campaign copy, a close control and a clear shop button.",
    "width": 1600,
    "height": 900,
    "format": "Website / Wide popup",
    "portrait": false
  },
  {
    "id": "sidebar",
    "file": "trace-sidebar-slogan-v1-concept",
    "title": "Website sidebar ad",
    "detail": "A vertical layout places the headline above the product and the call to action directly below.",
    "width": 1000,
    "height": 1000,
    "format": "Display / Vertical",
    "portrait": true
  }
];

const seedExamples = [
  {
    "id": "seed-website-banner",
    "file": "seed-banner-slogan-v1-concept",
    "title": "Homepage banner",
    "detail": "A wide stacked hero pairs product photography with a clear headline and a direct path to shop.",
    "width": 1600,
    "height": 900,
    "format": "Website / Desktop",
    "portrait": false
  },
  {
    "id": "seed-product-page",
    "file": "seed-product-v1-concept",
    "title": "Product page",
    "detail": "The bottle hero leads, with box and label macros below. One image set supports the full product story.",
    "width": 1600,
    "height": 1282,
    "format": "E-commerce / Desktop",
    "portrait": false
  },
  {
    "id": "seed-email",
    "file": "seed-email-slogan-v1-concept",
    "title": "Email campaign",
    "detail": "The box macro anchors a nighttime routine message, followed by a clear shop button.",
    "width": 1000,
    "height": 1307,
    "format": "Email / Campaign",
    "portrait": true
  },
  {
    "id": "seed-popup",
    "file": "seed-popup-slogan-v1-concept",
    "title": "Website popup",
    "detail": "A close crop draws attention to an email signup offer against a softly blurred website.",
    "width": 1600,
    "height": 940,
    "format": "Website / Promotion",
    "portrait": false
  },
  {
    "id": "seed-social",
    "file": "seed-social-slogan-v1-concept",
    "title": "Instagram ad",
    "detail": "The upper-half macro fills the creative, with a short line on the image and supporting copy in the caption.",
    "width": 1000,
    "height": 1100,
    "format": "Social / Mobile",
    "portrait": true
  },
  {
    "id": "seed-wide-popup",
    "file": "seed-wide-popup-v2-concept",
    "title": "Wide website popup",
    "detail": "A wide product photograph pairs with campaign copy, a close control and a clear shop button.",
    "width": 1600,
    "height": 900,
    "format": "Website / Wide popup",
    "portrait": false
  },
  {
    "id": "seed-sidebar",
    "file": "seed-sidebar-slogan-v1-concept",
    "title": "Website sidebar ad",
    "detail": "A vertical layout places the headline above the tilted bottle and a clear call to action below.",
    "width": 1000,
    "height": 1000,
    "format": "Display / Vertical",
    "portrait": true
  }
];

const neuroExamples = [
  {
    "id": "neuro-banner",
    "file": "neuro-banner-premium-v4-concept",
    "title": "Homepage banner",
    "detail": "The tilted billboard photograph pairs with copy in its open space, a white sale strip and dark-purple framing.",
    "width": 1600,
    "height": 1000,
    "format": "Website / Desktop",
    "portrait": false
  },
  {
    "id": "neuro-product",
    "file": "neuro-product-premium-v4-concept",
    "title": "Product page",
    "detail": "A single product photograph anchors the product page.",
    "width": 1600,
    "height": 1093,
    "format": "E-commerce / Desktop",
    "portrait": false
  },
  {
    "id": "neuro-email",
    "file": "neuro-email-premium-v4-concept",
    "title": "Email campaign",
    "detail": "The extreme macro is cropped at the bottom for a tighter email image.",
    "width": 1000,
    "height": 1346,
    "format": "Email / Campaign",
    "portrait": true
  },
  {
    "id": "neuro-popup",
    "file": "neuro-popup-premium-v4-concept",
    "title": "Website popup",
    "detail": "The upright hero is scaled to fill the promotional popup panel.",
    "width": 1600,
    "height": 940,
    "format": "Website / Promotion",
    "portrait": false
  },
  {
    "id": "neuro-instagram",
    "file": "neuro-social-premium-v4-concept",
    "title": "Instagram ad",
    "detail": "The extreme macro fills the social post.",
    "width": 540,
    "height": 1040,
    "format": "Social / Mobile",
    "portrait": true
  },
  {
    "id": "neuro-billboard",
    "file": "neuro-billboard-premium-v4-concept",
    "title": "Billboard",
    "detail": "The tilted product sits beside a short headline in the supplied billboard frame.",
    "width": 1600,
    "height": 955,
    "format": "Out of home / Wide",
    "portrait": false
  },
  {
    "id": "neuro-sidebar",
    "file": "neuro-sidebar-premium-v4-concept",
    "title": "Website sidebar ad",
    "detail": "The extreme macro anchors a vertical display ad.",
    "width": 1000,
    "height": 1000,
    "format": "Display / Vertical",
    "portrait": true
  }
];

const mtAngelExamples = [
  {
    "id": "mt-angel-banner",
    "file": "mt-angel-banner-wide-type-v2-concept",
    "title": "Homepage banner",
    "detail": "The close-up product macro pairs with white copy and a teal call to action.",
    "width": 1600,
    "height": 770,
    "format": "Website / Desktop",
    "portrait": false
  },
  {
    "id": "mt-angel-product",
    "file": "mt-angel-product-type-v2-concept",
    "title": "Product page",
    "detail": "An upright hero anchors the product page.",
    "width": 1600,
    "height": 1080,
    "format": "E-commerce / Desktop",
    "portrait": false
  },
  {
    "id": "mt-angel-email",
    "file": "mt-angel-email-type-v2-concept",
    "title": "Email campaign",
    "detail": "The product macro leads a branded email campaign.",
    "width": 1000,
    "height": 1256,
    "format": "Email / Campaign",
    "portrait": true
  },
  {
    "id": "mt-angel-popup",
    "file": "mt-angel-popup-type-v2-concept",
    "title": "Website popup",
    "detail": "A full-screen product photograph frames the website popup.",
    "width": 1600,
    "height": 900,
    "format": "Website / Promotion",
    "portrait": false
  },
  {
    "id": "mt-angel-instagram",
    "file": "mt-angel-instagram-extreme-concept",
    "title": "Instagram ad",
    "detail": "The extreme macro fills the Instagram creative, with supporting copy in the caption.",
    "width": 480,
    "height": 940,
    "format": "Social / Mobile",
    "portrait": true
  },
  {
    "id": "mt-angel-sidebar",
    "file": "mt-angel-sidebar-tilted-type-v2-concept",
    "title": "Website sidebar ad",
    "detail": "The headline and call to action sit above the tilted bottle.",
    "width": 600,
    "height": 1000,
    "format": "Display / Vertical",
    "portrait": true
  }
];

const hokaExamples = [
  {
    "id": "hoka-banner",
    "file": "hoka-banner-concept-v1",
    "title": "Homepage banner",
    "detail": "A full-bleed macro occupies the right side, with black copy space on the left.",
    "width": 1600,
    "height": 800,
    "format": "Website / Desktop",
    "portrait": false
  },
  {
    "id": "hoka-product",
    "file": "hoka-product-mockup-v1",
    "title": "Product page",
    "detail": "The front hero leads a product page with supporting upper, heel and outsole details.",
    "width": 1600,
    "height": 1050,
    "format": "E-commerce / Desktop",
    "portrait": false
  },
  {
    "id": "hoka-email",
    "file": "hoka-email-concept-v1",
    "title": "Email campaign",
    "detail": "The product macro anchors a branded email with a lavender call to action.",
    "width": 1000,
    "height": 1280,
    "format": "Email / Campaign",
    "portrait": true
  },
  {
    "id": "hoka-popup",
    "file": "hoka-popup-wide-concept-v1",
    "title": "Wide website popup",
    "detail": "A wide hero crop pairs with a bold headline and lavender shop button.",
    "width": 1600,
    "height": 900,
    "format": "Website / Wide popup",
    "portrait": false
  },
  {
    "id": "hoka-social",
    "file": "hoka-social-concept-v2",
    "title": "Instagram ad",
    "detail": "The macro fills the creative inside a phone mockup with corrected proportions.",
    "width": 540,
    "height": 1040,
    "format": "Social / Mobile",
    "portrait": true
  },
  {
    "id": "hoka-sidebar",
    "file": "hoka-sidebar-concept-v1",
    "title": "Website sidebar ad",
    "detail": "The headline and call to action sit above the supplied portrait hero.",
    "width": 600,
    "height": 1000,
    "format": "Display / Vertical",
    "portrait": true
  }
];

export const campaigns = [
  { id: 'trace', brand: 'Trace', product: 'Magnesium Glycinate', href: '/work/trace-magnesium-glycinate', examples },
  { id: 'neuro', brand: 'Neuro', product: 'Sleep & Recharge', href: '/work/neuro-sleep-recharge', examples: neuroExamples },
  { id: 'seed', brand: 'Seed', product: 'PM-02™ Sleep + Restore', href: '/work/seed-pm02-sleep-restore', examples: seedExamples },
  { id: 'mt-angel', brand: 'Mt. Angel', product: 'Joint Solution', href: '/work/mt-angel-joint-solution', examples: mtAngelExamples },
  { id: 'hoka', brand: 'HOKA', product: 'ORA Recovery Slide', href: '/work/hoka-ora-recovery-slides', examples: hokaExamples },
];

export default function Placements() {
  return <div className="placements-page">
    <h1 className="sr-only">Photography placements</h1>
    <nav className="placements-campaign-nav" aria-label="Placement campaigns"><a href="#trace">Trace ↘</a><a href="#seed">Seed ↘</a><a href="#neuro">Neuro ↘</a><a href="#mt-angel">Mt. Angel ↘</a><a href="#hoka">HOKA ↘</a></nav>
    {campaigns.map(campaign => <section id={campaign.id} key={campaign.id} className="placements-campaign" aria-labelledby={`${campaign.id}-heading`}>
      <div className="placements-brand-row"><div><h2 id={`${campaign.id}-heading`}>{campaign.brand.toUpperCase()} / PLACEMENTS</h2><p>{campaign.product}</p></div><p className="placements-disclosure">Concept designs by Concrete Orbit. Illustrative uses, offers and pricing.</p></div>
      <nav className="placements-jump" aria-label={`${campaign.brand} placement formats`}>{campaign.examples.map((example, index) => <a key={example.id} href={`#${example.id}`}>{example.title}</a>)}</nav>
      <div className="placements-examples">{campaign.examples.map((example, index) => <article id={example.id} className={`placement-example${example.portrait ? ' placement-portrait' : ''}`} key={example.id}>
        <div className="placement-heading"><span className="placement-number">{String(index + 1).padStart(2, '0')}</span><div><span className="placement-format">{example.format}</span><h3>{example.title}</h3></div><p>{example.detail}</p></div>
        <div className="placement-preview">
          <img src={`/images/placements/${example.file}-${example.width}.webp`} srcSet={`/images/placements/${example.file}-800.webp 800w, /images/placements/${example.file}-${example.width}.webp ${example.width}w`} sizes={example.portrait ? '(max-width:700px) 100vw, 700px' : '95vw'} width={example.width} height={example.height} alt={`${campaign.brand} ${campaign.product} ${example.title.toLowerCase()} concept using photography by Concrete Orbit.`} loading={index === 0 ? 'eager' : 'lazy'} decoding="async"/>
        </div>
      </article>)}</div>
      <div className="placements-end"><p>One campaign. Multiple points of connection.</p><a href={campaign.href}>Explore the original photographs ↗</a></div>
    </section>)}

  </div>;
}
