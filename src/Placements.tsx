import './placements.css';

const examples = [
  { id: 'website-banner', file: 'trace-banner-concept', title: 'Homepage banner', detail: 'An extreme macro becomes the first impression. Copy sits beside the photograph, with a clear path to shop.', width: 1600, height: 930, format: 'Website / Desktop' },
  { id: 'product-page', file: 'trace-product-concept', title: 'Product page', detail: 'The hero leads, with two supporting details below. A complete image set brings consistency to the product page.', width: 1600, height: 1192, format: 'E-commerce / Desktop' },
  { id: 'popup-hero', file: 'trace-popup-hero-concept', title: 'Popup / Hero', detail: 'The product hero anchors a promotional popup against a softly blurred website.', width: 1600, height: 940, format: 'Website / Promotional' },
  { id: 'popup-detail', file: 'trace-popup-slight-macro-concept', title: 'Popup / Detail', detail: 'A closer crop gives the same placement a second visual direction.', width: 1600, height: 940, format: 'Website / Alternate crop' },
  { id: 'social', file: 'trace-instagram-image-led-concept', title: 'Instagram ad', detail: 'The photograph fills the creative. A short line stays on the image; the rest of the copy lives in the caption.', width: 1000, height: 1100, format: 'Social / Mobile', portrait: true },
  { id: 'billboard', file: 'trace-billboard-concept', title: 'Billboard', detail: 'A large product image and a short headline make use of the photograph’s open black space.', width: 1600, height: 900, format: 'Out of home / Wide' },
  { id: 'sidebar', file: 'trace-sidebar-concept', title: 'Website sidebar ad', detail: 'A vertical layout places the headline above the product and the call to action directly below.', width: 1000, height: 1000, format: 'Display / Vertical', portrait: true },
];

export default function Placements() {
  return <div className="placements-page">
    <section className="placements-intro">
      <span className="eyebrow">PHOTOGRAPHY IN CONTEXT / 01</span>
      <h1>Beyond the photograph.</h1>
      <div className="placements-intro-bottom"><p>From the first impression to the product page. A look at how one campaign can live across a brand’s world.</p><a href="/work/trace-magnesium-glycinate">View the Trace campaign <span aria-hidden="true">↗</span></a></div>
    </section>
    <section className="placements-campaign" aria-labelledby="placements-brand">
      <div className="placements-brand-row"><div><h2 id="placements-brand">TRACE</h2><p>Magnesium Glycinate</p></div><p className="placements-disclosure">Concept placements by Concrete Orbit.<br/>Mockups illustrate possible uses; they are not live brand advertisements. Offers and pricing shown are illustrative.</p></div>
      <nav className="placements-jump" aria-label="Placement formats"><a href="#website-banner">Website</a><a href="#product-page">Product page</a><a href="#popup-hero">Popups</a><a href="#social">Social</a><a href="#billboard">Billboard</a><a href="#sidebar">Sidebar</a></nav>
      <div className="placements-examples">{examples.map((example, index) => <article id={example.id} className={`placement-example${example.portrait ? ' placement-portrait' : ''}`} key={example.id}>
        <div className="placement-heading"><span className="placement-number">{String(index + 1).padStart(2, '0')}</span><div><span className="placement-format">{example.format}</span><h3>{example.title}</h3></div><p>{example.detail}</p></div>
        <div className="placement-preview">
          <img src={`/images/placements/${example.file}-${example.width}.webp`} srcSet={`/images/placements/${example.file}-800.webp 800w, /images/placements/${example.file}-${example.width}.webp ${example.width}w`} sizes={example.portrait ? '(max-width:700px) 100vw, 700px' : '95vw'} width={example.width} height={example.height} alt={`Trace Magnesium Glycinate ${example.title.toLowerCase()} concept using photography by Concrete Orbit.`} loading={index === 0 ? 'eager' : 'lazy'} decoding="async"/>
        </div>
      </article>)}</div>
      <div className="placements-end"><p>One campaign. Multiple points of connection.</p><a href="/work/trace-magnesium-glycinate">Explore the original photographs ↗</a></div>
    </section>

  </div>;
}
