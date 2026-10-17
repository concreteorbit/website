import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { capabilities, projects } from './projectData';
import type { PortfolioImage, Project, ProjectImagePair } from './projectData';
import './styles.css';
import { selectedWork } from './selectedWork';

function Orbit({ className = '' }: { className?: string }) { return <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true"><circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="2"/><ellipse cx="50" cy="50" rx="47" ry="17" transform="rotate(-40 50 50)" stroke="currentColor" strokeWidth="2"/></svg>; }
function scrollToContact(event: React.MouseEvent<HTMLAnchorElement>) {
  const target = document.getElementById('contact');
  if (!target) return;

  event.preventDefault();
  window.history.replaceState(null, '', '#contact');

  const alignContact = () => target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  alignContact();
  window.requestAnimationFrame(alignContact);
  window.setTimeout(alignContact, 250);
  window.setTimeout(alignContact, 900);
}
function Header({ contactHref }: { contactHref: string }) { const [open, setOpen] = useState(false); return <header className="header"><a className="wordmark" href="/" aria-label="Concrete Orbit home">concrete orbit</a><button className="menu-button" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button><nav id="navigation" className={open ? 'navigation open' : 'navigation'} aria-label="Main navigation"><a href="/#work" onClick={() => setOpen(false)}>Selected work</a><a href="/#studio" onClick={() => setOpen(false)}>The studio</a><a className="nav-cta" href={contactHref} onClick={(event) => { setOpen(false); scrollToContact(event); }}>Start a project <span>↗</span></a></nav></header>; }
function ImageFrame({ image, tone = 'hero-tone', label, priority = false }: { image?: PortfolioImage | null; tone?: string; label: string; priority?: boolean }) { return image ? <img className="portfolio-image" src={image.src} srcSet={image.srcSet} sizes="(max-width: 700px) 100vw, 90vw" alt={image.alt} width={image.width} height={image.height} loading={priority ? 'eager' : 'lazy'} decoding="async"/> : <div className={`image-placeholder ${tone}`} role="img" aria-label={`${label}, image to be supplied`}><span className="frame-corner top-left"/><span className="frame-corner bottom-right"/><span className="placeholder-cross">+</span><div className="placeholder-caption"><span>IMAGE PLACEHOLDER</span></div></div>; }
function useTimedSlide(count: number, intervalMs?: number) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
    if (!intervalMs || count < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setActive(current => (current + 1) % count), intervalMs);
    return () => window.clearInterval(timer);
  }, [count, intervalMs]);

  return [active, setActive] as const;
}
function HomepageCampaign({ selection, index }: { selection: (typeof selectedWork)[number]; index: number }) {
  const image = selection.images[0];
  const project = selection.project;
  return <article className={`homepage-campaign homepage-campaign-${selection.slug} homepage-campaign-full`}>
    <div className="homepage-campaign-stage">
      <img className="homepage-campaign-image" src={image.src} srcSet={image.srcSet} sizes="(max-width: 800px) 100vw, 94vw" width={image.width} height={image.height} alt={image.alt} loading="lazy" decoding="async" key={image.src}/>
      <div className="homepage-campaign-info">
        <span className="homepage-campaign-kicker">CAMPAIGN / {String(index + 1).padStart(2, '0')}</span>
        <h3>{selection.title}</h3>
        <p className="homepage-campaign-product">{selection.subtitle}</p>
        <p className="homepage-campaign-services">{project.services.join(' · ')}</p>
        <a className="homepage-campaign-link" href={`/work/${selection.slug}`}>VIEW CAMPAIGN <span>↗</span></a>
      </div>
      <div className="homepage-campaign-state" aria-hidden="true"><span>EXTREME MACRO</span></div>
    </div>
  </article>;
}
function Work() {
  return <section id="work" className="work section-pad curated-work">
    <div className="section-heading"><div><span className="lab-index">01 / SELECTED WORK</span><h2>Selected product<br/>campaigns.</h2></div><p className="section-note">HERO / DETAIL / COPY SPACE<br/>WASHINGTON, DC · WORLDWIDE</p></div>
    <div className="homepage-campaign-list">{selectedWork.map((selection, i) => <HomepageCampaign selection={selection} index={i} key={selection.slug}/>)}</div>
  </section>;
}
function Studio() {
  const steps = [
    ['SCOPE & SCHEDULE', 'We confirm the product, intended use, required frames, usage and delivery date in the estimate.'],
    ['BOOK & SHIP', 'Once the estimate is approved, the production date is reserved and the product ships to the studio.'],
    ['DIRECTION & PRODUCTION', 'You approve the visual direction before I photograph and finish the campaign set.'],
    ['REVIEW & DELIVERY', 'Review points and revision scope are agreed in advance. Final files arrive prepared for the approved placements.'],
  ];

  return <>
    <section id="studio" className="philosophy section-pad">
      <span className="eyebrow">CINEMATIC PRODUCT IMAGERY</span>
      <h2>THE PRODUCT SETS<br/>THE DIRECTION.<br/><em>EVERY TIME.</em><Orbit/></h2>
      <div className="philosophy-bottom"><p>I bring a defined visual language of deep contrast, controlled light and close material detail to supplements, skincare and body care.</p></div>
    </section>
    <section className="why section-pad">
      <div className="studio-intro"><span className="eyebrow">THE PROCESS</span><h2>Clear from inquiry<br/>to delivery.</h2><p>You work directly with me throughout the project. Scope, schedule, review points, usage and delivery are confirmed before production begins.</p></div>
      <div className="principles">{steps.map(([title, copy], i) => <div className="principle" key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
    </section>
    <section className="founder section-pad"><div className="founder-label"><Orbit/><img className="founder-image-placeholder" src="/images/simon-founder-portrait-1200.webp" srcSet="/images/simon-founder-portrait-800.webp 800w, /images/simon-founder-portrait-1200.webp 1200w" sizes="(max-width: 600px) 230px, 280px" width={3915} height={3910} alt="Simon Jackson, Founder and Creative Director of Concrete Orbit" loading="lazy" decoding="async"/><span className="eyebrow">FOUNDER / CREATIVE DIRECTOR</span></div><div><h2>I make the work<br/>and lead the project.</h2><p>I’m Simon Jackson, the photographer and creative director behind Concrete Orbit.</p><div className="founder-name">SIMON JACKSON<span>Founder + Creative Director</span><p className="founder-approach">I built the studio around a hands-on process: developing the visual idea, photographing the product and carrying the image through its final finish.</p></div></div></section>
  </>;
}

function Offer() {
  return <section className="partners section-pad"><span className="eyebrow">THE FIVE-IMAGE PRODUCT CAMPAIGN</span><h2>Five images.<br/>One clear direction.</h2><p className="offer-intro">A focused set for a product launch, refresh or content push. You get five finished images that feel like one campaign, plus selected crops for the places they need to run.</p><div className="offer-grid"><div><strong>01</strong><span>TWO HERO COMPOSITIONS</span><p>A lead hero and a tilted hero that establish the campaign.</p></div><div><strong>02</strong><span>TWO DETAIL VIEWS</span><p>A slight macro and an extreme macro that bring the product closer.</p></div><div><strong>03</strong><span>ONE COPY-SPACE COMPOSITION</span><p>One composition with room for campaign messaging.</p></div><div><strong>+</strong><span>READY FOR PLACEMENT</span><p>One wide website crop and agreed social crops from selected images.</p></div></div><p className="pricing-note">The five master images are the finished campaign photographs. The website and social adaptations are crops made from selected masters. Advertising copy and graphic layouts can be scoped separately.</p><div className="capabilities"><span className="eyebrow">SUPPORTING CAPABILITIES</span><p>{capabilities.join(' · ')}</p></div></section>;
}

function Contact() {
  return <section id="contact" className="contact contact-simple section-pad">
    <div className="contact-context">
      <span className="eyebrow">PROJECT INQUIRIES</span>
      <div className="contact-heading"><h2>START A<br/>PROJECT <span>↓</span></h2></div>
    </div>
    <div className="email-inquiry">
      <h3>Tell me what you’re creating.</h3>
      <p>Send your product, idea, intended placements and timeline. I’ll turn it into a clear campaign plan and estimate.</p>
      <p className="email-address">hello@concreteorbit.com</p>
    </div>
  </section>;
}

function Footer() { return <footer className="section-pad"><div className="footer-top"><a className="wordmark" href="/">concrete orbit</a><p>Based in Washington, DC.<br/>Working worldwide.</p><a href="#top">Back to top ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Concrete Orbit</span><a href="https://www.instagram.com/concreteorbitvisuals/" target="_blank" rel="noopener noreferrer" aria-label="Concrete Orbit on Instagram (opens in a new tab)" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a></div></footer>; }

function Home() {
  const [heroSlide] = useTimedSlide(2, 30000);

  return <>
    <section className="hero section-pad fullbleed-hero">
      <div className={`hero-image homepage-hero-stage homepage-hero-stage-${heroSlide}`}>
        <picture className={`homepage-hero-photo homepage-hero-slide homepage-hero-macro ${heroSlide === 0 ? 'is-active' : ''}`} aria-hidden={heroSlide !== 0}>
          <img className="portfolio-image" src="/images/projects/trace-magnesium-glycinate-extreme-macro-1920.webp" sizes="100vw" width={1920} height={1072} alt="Extreme macro of the Trace Magnesium Glycinate label and ribbed cap in deep blue light." loading="eager" fetchPriority="high" decoding="async"/>
        </picture>
        <picture className={`homepage-hero-photo homepage-hero-slide homepage-hero-macro homepage-hero-acure ${heroSlide === 1 ? 'is-active' : ''}`} aria-hidden={heroSlide !== 1}>
          <img className="portfolio-image" src="/images/projects/acure-shampoo-extreme-macro-1920.webp" sizes="100vw" width={1920} height={1072} alt="Extreme macro of the ACURE shampoo tube covered in water droplets and illuminated in cyan light." loading="eager" decoding="async"/>
        </picture>
        <div className="fullbleed-hero-copy">
          <p className="fullbleed-hero-brand"><span>CONCRETE ORBIT</span></p>
          <h1>One product.<br/>Five images.<br/>One campaign.</h1>
          <p className="fullbleed-hero-description">Coordinated hero, macro and copy-space images for wellness brands, designed for websites, social and advertising.</p>
          <a className="hero-project-cta" href="#contact" onClick={scrollToContact}>Start a project <span>↘</span></a>
        </div>
        <div className="hero-axis" aria-hidden="true"><span>IMAGE / MATTER / LIGHT</span><span>SCROLL  ↓</span></div>
      </div>
    </section>
    <section className="featured-strip section-pad" aria-label="Selected product studies"><span>SELECTED PRODUCT STUDIES</span><p>ALICE · MT. ANGEL · BEFORE · PHIL’S</p></section>
    <Work/><Offer/><Studio/><Contact/>
  </>;
}

type ApplicationSettings = {
  bannerIndex: number;
  bannerIndexes?: number[];
  bannerIntervalMs?: number;
  adIndex: number | 'cover';
  adIndexes?: Array<number | 'cover'>;
  websiteHeadline: string;
  websiteHeadlines?: string[];
  adHeadline: string;
  adHeadlines?: string[];
  bannerLabels?: string[];
  adLabels?: string[];
};

const applicationSettings: Record<string, ApplicationSettings> = {
  'alice-mushroom-chocolate': {
    bannerIndex: 0,
    bannerIndexes: [0, 1],
    adIndex: 4,
    adIndexes: [4, 5],
    websiteHeadline: 'Daily focus, brought closer.',
    websiteHeadlines: ['Daily focus, brought closer.', 'Nightly sleep, brought closer.'],
    adHeadline: 'Daily bites for focus.',
    adHeadlines: ['Daily bites for focus.', 'Nightly bites for deep sleep.'],
    bannerLabels: ['ALICE / FOCUS', 'ALICE / SLEEP'],
    adLabels: ['ALICE / FOCUS', 'ALICE / SLEEP'],
  },
  'mt-angel-joint-solution': { bannerIndex: 6, bannerIndexes: [6, 0], bannerIntervalMs: 30000, adIndex: 4, adIndexes: [4, 5], websiteHeadline: 'Joint support, brought into focus.', adHeadline: 'Movement starts here.' },
  'before-toothpaste': { bannerIndex: 4, bannerIndexes: [4, 0], bannerIntervalMs: 30000, adIndex: 3, adIndexes: [3, 4], websiteHeadline: 'A closer look at clean.', adHeadline: 'Clean, brought closer.' },
  'phils-daily-facial-cleanser': { bannerIndex: 3, adIndex: 3, adIndexes: [3, 4], websiteHeadline: 'Clean, brought closer.', adHeadline: 'A better way to begin.' },
  trace: { bannerIndex: 2, adIndex: 0, websiteHeadline: '40,000 Volts, up close.', adHeadline: 'Blue light. Water. Energy.' },
};

function CampaignApplications({ project }: { project: Project }) {
  const settings = applicationSettings[project.slug];
  const bannerIndexes = settings?.bannerIndexes ?? (settings ? [settings.bannerIndex] : []);
  const [bannerSlide, setBannerSlide] = useTimedSlide(bannerIndexes.length, settings?.bannerIntervalMs);
  const [adSlide, setAdSlide] = useState(0);
  if (!settings) return null;
  const hasBannerSlider = bannerIndexes.length > 1;
  const bannerImages = bannerIndexes.map(index => project.gallery[index]);
  const activeBannerSlide = bannerSlide % bannerImages.length;
  const adIndexes = settings.adIndexes ?? [settings.adIndex];
  const activeAdSlide = adSlide % adIndexes.length;
  const activeAdIndex = adIndexes[activeAdSlide];
  const adImage = activeAdIndex === 'cover' ? project.cover : project.gallery[activeAdIndex];
  const websiteHeadline = settings.websiteHeadlines?.[activeBannerSlide] ?? settings.websiteHeadline;
  const adHeadline = settings.adHeadlines?.[activeAdSlide] ?? settings.adHeadline;
  const bannerLabel = settings.bannerLabels?.[activeBannerSlide] ?? project.name;
  const adLabel = settings.adLabels?.[activeAdSlide] ?? project.name;
  const titleId = `${project.slug}-applications-title`;

  return <section className="campaign-applications" aria-labelledby={titleId}>
    <div className="application-heading"><span className="eyebrow">PLACEMENT EXAMPLES</span><h2 id={titleId}>How it could<br/>work for you.</h2><p>Concept applications showing how the photographs could carry a website and two advertising layouts.</p></div>
    <article className="application-block">
      <div className="application-label"><span>01</span><div><h3>Website Banner</h3><p>A wide composition with room for navigation, a headline and CTA.</p></div></div>
      <div className="browser-mockup">
        <div className="browser-bar"><span className="browser-dots" aria-hidden="true">● ● ●</span>{hasBannerSlider ? <div className="website-slider-controls"><span>Website placement</span><button type="button" onClick={() => setBannerSlide(current => (current - 1 + bannerImages.length) % bannerImages.length)} aria-label={`Previous ${project.name} website banner`}>←</button><span aria-live="polite">{activeBannerSlide + 1} / {bannerImages.length}</span><button type="button" onClick={() => setBannerSlide(current => (current + 1) % bannerImages.length)} aria-label={`Next ${project.name} website banner`}>→</button></div> : <span>Website placement</span>}</div>
        <div className={`website-concept website-concept-${project.slug} website-concept-banner-slide-${activeBannerSlide}`}>
          {bannerImages.map((image, index) => <img key={image.src} className={`website-banner-image rotating-image${index === activeBannerSlide ? ' is-active' : ''}`} src={image.src} srcSet={image.srcSet} sizes="90vw" alt={index === activeBannerSlide ? `${project.name} product photograph shown in website banner option ${activeBannerSlide + 1}.` : ''} aria-hidden={index === activeBannerSlide ? undefined : true} width={image.width} height={image.height} loading="lazy" decoding="async"/>)}
          <div className="concept-nav"><span>{bannerLabel}</span><span>Product · Story · Shop</span></div>
          <div className="concept-copy"><span>{bannerLabel} / PRODUCT CAMPAIGN</span><h4>{websiteHeadline}</h4><span className="mock-button">EXPLORE THE PRODUCT</span></div>
        </div>
      </div>
    </article>
    <article className="application-block">
      <div className="application-label"><span>02</span><div><h3>Advertisements</h3><p>A hero and a closer detail, each composed with room for campaign copy.</p></div></div>
      <div className="advertisement-shell">
        {adIndexes.length > 1 && <div className="advertisement-slider-controls"><span>Advertisement option</span><div><button type="button" onClick={() => setAdSlide(current => (current - 1 + adIndexes.length) % adIndexes.length)} aria-label={`Previous ${project.name} advertisement`}>←</button><span aria-live="polite">{activeAdSlide + 1} / {adIndexes.length}</span><button type="button" onClick={() => setAdSlide(current => (current + 1) % adIndexes.length)} aria-label={`Next ${project.name} advertisement`}>→</button></div></div>}
        <div className={`advertisement-concept advertisement-concept-${project.slug} advertisement-concept-slide-${activeAdSlide}`}>
          <img key={adImage.src} src={adImage.src} alt={`${project.name} product photograph shown in advertisement option ${activeAdSlide + 1}.`} width={adImage.width} height={adImage.height} loading="lazy" decoding="async"/>
          <div className="advertisement-copy"><span>{adLabel} / PRODUCT CAMPAIGN</span><h4>{adHeadline}</h4><span className="mock-button">VIEW THE PRODUCT</span></div>
        </div>
      </div>
    </article>
  </section>;
}

function photoTypeLabel(src: string) {
  const name = src.toLowerCase();
  if (name.includes('extreme-macro')) return 'EXTREME MACRO';
  if (name.includes('slight-macro-copy') || (name.includes('slight-macro') && (name.includes('space') || name.includes('copy')))) return 'SLIGHT MACRO + COPY SPACE';
  if (name.includes('slight-macro')) return 'SLIGHT MACRO';
  if (name.includes('dramatic')) return 'DRAMATIC ANGLE';
  if ((name.includes('tilt') || name.includes('angled')) && name.includes('space')) return 'ANGLED HERO + COPY SPACE';
  if (name.includes('tilt') || name.includes('angled')) return 'ANGLED HERO';
  if (name.includes('copy-space') || name.includes('copyspace') || name.includes('hero-space') || name.includes('straight-copy')) return 'HERO + COPY SPACE';
  return 'CAMPAIGN DETAIL';
}

function campaignShowcaseImages(project: Project) {
  const isCopySpace = (image: PortfolioImage) => /copy|space/.test(image.src.toLowerCase());
  const find = (test: (name: string) => boolean) => project.gallery.find(image => !isCopySpace(image) && test(image.src.toLowerCase()));
  const ordered = [
    find(name => name.includes('extreme-macro')),
    find(name => name.includes('slight-macro')),
    find(name => name.includes('tilt') || name.includes('angled')),
  ].filter((image): image is PortfolioImage => Boolean(image));

  const fallbacks = [project.gallery[0], project.gallery[1], project.cover];
  for (const image of fallbacks) {
    if (image && !ordered.some(selected => selected.src === image.src)) ordered.push(image);
    if (ordered.length === 3) break;
  }
  return ordered.slice(0, 3);
}

function ProjectPage({ project }: { project: Project }) {
  const imagePairs = project.pairedGallery;
  const orderedPairs = imagePairs ? ['Extreme macro', 'Slight macro', 'Hero + copy space']
    .map(label => imagePairs.find(pair => pair.label === label))
    .filter((pair): pair is ProjectImagePair => Boolean(pair)) : [];
  const showcaseImages = campaignShowcaseImages(project);
  const leadImage = showcaseImages[0];
  return <>
  <section className="project-detail section-pad curated-project">
    <a className="back-link" href="/#work">← PROJECT INDEX</a>
    <div className="detail-heading"><div><span className="project-study-note-top">INDEPENDENT PRODUCT STUDY</span><h1>{project.name}</h1><p className="project-positioning">{project.direction}</p></div><p>{project.brand}</p></div>
    {imagePairs && orderedPairs[0] ? <div className="alice-lead-pair" aria-label={`${project.name} Focus and Sleep extreme macro photographs`}>
      {[orderedPairs[0].focus, orderedPairs[0].sleep].map((image, index) => <figure key={image.src}><figcaption>{index === 0 ? 'FOCUS' : 'SLEEP'} / EXTREME MACRO</figcaption><ImageFrame image={image} label={image.alt} priority/></figure>)}
    </div> : leadImage ? <div className="project-lead-frame"><span className="frame-index">01 / {photoTypeLabel(leadImage.src)}</span><ImageFrame image={leadImage} tone={project.tone} label={leadImage.alt} priority/></div> : null}
    <div className="project-information"><div><span className="eyebrow">MY ROLE</span><p>{project.services.join(' · ')}</p></div><div><span className="eyebrow">IMAGES IN THE SET</span><p>{project.deliverables}</p></div></div>
    {imagePairs ? <div className="alice-paired-gallery">{orderedPairs.slice(1).map((pair, index) => <section className="alice-pair" aria-labelledby={`alice-pair-${index}`} key={pair.label}><div className="alice-pair-heading"><span>PAIR / {String(index + 2).padStart(2, '0')}</span><h2 id={`alice-pair-${index}`}>{pair.label}</h2></div><div className="alice-pair-images"><figure><figcaption>FOCUS</figcaption><ImageFrame image={pair.focus} label={pair.focus.alt}/></figure><figure><figcaption>SLEEP</figcaption><ImageFrame image={pair.sleep} label={pair.sleep.alt}/></figure></div></section>)}</div> : <div className="project-grid campaign-sequence">{showcaseImages.slice(1).map((img, index) => <div className="project-frame" key={img.src}><span className="frame-index">{String(index + 2).padStart(2, '0')} / {photoTypeLabel(img.src)}</span><ImageFrame image={img} label={img.alt}/></div>)}</div>}
    <CampaignApplications project={project}/>
  </section>
  <Contact/>
  </>;
}

function App() { const path = window.location.pathname.replace(/\/$/, '') || '/'; const project = projects.find(p => path === `/work/${p.slug}`); useEffect(() => { const title = project ? `${project.name} | Concrete Orbit` : path === '/' ? 'Concrete Orbit | Five-Image Product Campaigns for Wellness Brands' : 'Page not found | Concrete Orbit'; document.title = title; document.querySelector('meta[property="og:title"]')?.setAttribute('content', title); if (project) document.querySelector('meta[name="description"]')?.setAttribute('content', `${project.name}: an independent product photography study by Concrete Orbit.`); }, [project, path]); useEffect(() => { const id = decodeURIComponent(window.location.hash.slice(1)); if (!id) return; const scrollToTarget = () => document.getElementById(id)?.scrollIntoView({ block: 'start' }); const frame = window.requestAnimationFrame(scrollToTarget); const timers = [250, 1000, 2500].map(delay => window.setTimeout(scrollToTarget, delay)); const pendingImages = Array.from(document.images).filter(image => !image.complete); pendingImages.forEach(image => image.addEventListener('load', scrollToTarget)); window.addEventListener('load', scrollToTarget, { once: true }); return () => { window.cancelAnimationFrame(frame); timers.forEach(timer => window.clearTimeout(timer)); pendingImages.forEach(image => image.removeEventListener('load', scrollToTarget)); window.removeEventListener('load', scrollToTarget); }; }, [path]); const contactHref = path === '/' || project ? '#contact' : '/#contact'; return <><a className="skip-link" href="#main">Skip to content</a><div id="top"/><Header contactHref={contactHref}/><main id="main">{path === '/' ? <Home/> : project ? <ProjectPage project={project}/> : <section className="not-found section-pad"><span className="eyebrow">404 / OUT OF ORBIT</span><h1>Nothing here. Yet.</h1><a href="/">Return to the studio →</a></section>}</main><Footer/></>; }
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
