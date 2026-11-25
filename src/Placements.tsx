import './placements.css';

const examples = [
  { id: 'website-banner', file: "trace-banner-slogan-v1-concept", title: 'Homepage banner', detail: 'An extreme macro becomes the first impression. Copy sits beside the photograph, with a clear path to shop.', width: 1600, height: 930, format: 'Website / Desktop' },
  { id: 'product-page', file: 'trace-product-concept', title: 'Product page', detail: 'The hero leads, with two supporting details below. A complete image set brings consistency to the product page.', width: 1600, height: 1192, format: 'E-commerce / Desktop' },
  { id: 'email', file: "trace-email-slogan-v1-concept", title: 'Email campaign', detail: 'A short benefits message leads into the macro photograph, followed by a clear shop button and a savings message.', width: 1000, height: 1302, format: 'Email / Campaign', portrait: true },
  { id: 'popup-detail', file: "trace-popup-slogan-v1-concept", title: 'Popup / Detail', detail: 'The slight macro anchors a promotional popup against a softly blurred website.', width: 1600, height: 940, format: 'Website / Alternate crop' },
  { id: 'social', file: "trace-social-slogan-v1-concept", title: 'Instagram ad', detail: 'The photograph fills the creative. A short line stays on the image; the rest of the copy lives in the caption.', width: 1000, height: 1100, format: 'Social / Mobile', portrait: true },
  { id: 'billboard', file: "trace-billboard-slogan-v1-concept", title: 'Billboard', detail: 'A large product image and a short headline make use of the photograph’s open black space.', width: 1600, height: 900, format: 'Out of home / Wide' },
  { id: 'sidebar', file: "trace-sidebar-slogan-v1-concept", title: 'Website sidebar ad', detail: 'A vertical layout places the headline above the product and the call to action directly below.', width: 1000, height: 1000, format: 'Display / Vertical', portrait: true },
];

const seedExamples = [
  {"id": "seed-website-banner", "file": "seed-banner-slogan-v1-concept", "title": "Homepage banner", "detail": "A wide stacked hero pairs product photography with a clear headline and a direct path to shop.", "width": 1600, "height": 900, "format": "Website / Desktop", "portrait": false},
  {"id": "seed-product-page", "file": "seed-product-v1-concept", "title": "Product page", "detail": "The bottle hero leads, with box and label macros below. One image set supports the full product story.", "width": 1600, "height": 1282, "format": "E-commerce / Desktop", "portrait": false},
  {"id": "seed-email", "file": "seed-email-slogan-v1-concept", "title": "Email campaign", "detail": "The box macro anchors a nighttime routine message, followed by a clear shop button.", "width": 1000, "height": 1307, "format": "Email / Campaign", "portrait": true},
  {"id": "seed-popup", "file": "seed-popup-slogan-v1-concept", "title": "Website popup", "detail": "A close crop draws attention to an email signup offer against a softly blurred website.", "width": 1600, "height": 940, "format": "Website / Promotion", "portrait": false},
  {"id": "seed-social", "file": "seed-social-slogan-v1-concept", "title": "Instagram ad", "detail": "The upper-half macro fills the creative, with a short line on the image and supporting copy in the caption.", "width": 1000, "height": 1100, "format": "Social / Mobile", "portrait": true},
  {"id": "seed-billboard", "file": "seed-billboard-slogan-v1-concept", "title": "Billboard", "detail": "The upright hero and a short headline use the photograph’s open black space at a large scale.", "width": 1600, "height": 900, "format": "Out of home / Wide", "portrait": false},
  {"id": "seed-sidebar", "file": "seed-sidebar-slogan-v1-concept", "title": "Website sidebar ad", "detail": "A vertical layout places the headline above the tilted bottle and a clear call to action below.", "width": 1000, "height": 1000, "format": "Display / Vertical", "portrait": true},
];

const neuroExamples = [
  {
    "id": "neuro-banner",
    "file": "neuro-banner-slogan-v1-concept",
    "title": "Homepage banner",
    "detail": "The tilted billboard photograph pairs with copy in its open space, a white sale strip and dark-purple framing.",
    "width": 1600,
    "height": 1124,
    "format": "Website / Desktop",
    "portrait": false
  },
  {
    "id": "neuro-product",
    "file": "neuro-placement-product-final-concept",
    "title": "Product page",
    "detail": "A single product photograph anchors the product page.",
    "width": 1600,
    "height": 1080,
    "format": "E-commerce / Desktop",
    "portrait": false
  },
  {
    "id": "neuro-email",
    "file": "neuro-email-slogan-v1-concept",
    "title": "Email campaign",
    "detail": "The extreme macro is cropped at the bottom for a tighter email image.",
    "width": 1000,
    "height": 1293,
    "format": "Email / Campaign",
    "portrait": true
  },
  {
    "id": "neuro-popup",
    "file": "neuro-popup-slogan-v1-concept",
    "title": "Website popup",
    "detail": "The upright hero is scaled to fill the promotional popup panel.",
    "width": 1600,
    "height": 940,
    "format": "Website / Promotion",
    "portrait": false
  },
  {
    "id": "neuro-instagram",
    "file": "neuro-social-slogan-v1-concept",
    "title": "Instagram ad",
    "detail": "The extreme macro fills the social post.",
    "width": 1000,
    "height": 900,
    "format": "Social / Mobile",
    "portrait": true
  },
  {
    "id": "neuro-billboard",
    "file": "neuro-billboard-slogan-v1-concept",
    "title": "Billboard",
    "detail": "The tilted product sits beside a short headline in the supplied billboard frame.",
    "width": 1600,
    "height": 954,
    "format": "Out of home / Wide",
    "portrait": false
  },
  {
    "id": "neuro-sidebar",
    "file": "neuro-sidebar-slogan-v1-concept",
    "title": "Website sidebar ad",
    "detail": "The extreme macro anchors a vertical display ad.",
    "width": 1000,
    "height": 1000,
    "format": "Display / Vertical",
    "portrait": true
  }
];

export const campaigns = [
  { id: 'trace', brand: 'Trace', product: 'Magnesium Glycinate', href: '/work/trace-magnesium-glycinate', examples },
  { id: 'neuro', brand: 'Neuro', product: 'Sleep & Recharge', href: '/work/neuro-sleep-recharge', examples: neuroExamples },
  { id: 'seed', brand: 'Seed', product: 'PM-02™ Sleep + Restore', href: '/work/seed-pm02-sleep-restore', examples: seedExamples },
];

export default function Placements() {
  return <div className="placements-page">
    <h1 className="sr-only">Photography placements</h1>
    <nav className="placements-campaign-nav" aria-label="Placement campaigns"><a href="#trace">Trace ↘</a><a href="#seed">Seed ↘</a><a href="#neuro">Neuro ↘</a></nav>
    {campaigns.map(campaign => <section id={campaign.id} key={campaign.id} className="placements-campaign" aria-labelledby={`${campaign.id}-heading`}>
      <div className="placements-brand-row"><div><h2 id={`${campaign.id}-heading`}>{campaign.brand.toUpperCase()} / PLACEMENTS</h2><p>{campaign.product}</p></div><p className="placements-disclosure">Concept designs by Concrete Orbit. Illustrative uses, offers and pricing.</p></div>
      <nav className="placements-jump" aria-label={`${campaign.brand} placement formats`}>{campaign.examples.map((example, index) => <a key={example.id} href={`#${example.id}`}>{['Website', 'Product page', 'Email', 'Popup', 'Social', 'Billboard', 'Sidebar'][index]}</a>)}</nav>
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
