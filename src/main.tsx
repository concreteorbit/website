import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { projects } from './projectData';
import type { PortfolioImage, Project } from './projectData';
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
const acureHomepageHero: PortfolioImage = {
  src: '/images/acure-home-hero-2560.webp',
  srcSet: '/images/acure-home-hero-1200.webp 1200w, /images/acure-home-hero-2560.webp 2560w',
  alt: 'Extreme macro photograph of an ACURE shampoo tube covered in water droplets.',
  width: 2560,
  height: 1429,
};

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
      <div className="homepage-campaign-state" aria-hidden="true"><span>{selection.stateLabel}</span></div>
    </div>
  </article>;
}
function Work() {
  return <section id="work" className="work section-pad curated-work">
    <div className="section-heading"><div><span className="lab-index">01 / SELECTED WORK</span><h2>Selected product<br/>campaigns.</h2></div><p className="section-note">HERO / MACRO / COPY SPACE<br/>WASHINGTON, DC · WORLDWIDE</p></div>
    <div className="homepage-campaign-list">{selectedWork.map((selection, i) => <HomepageCampaign selection={selection} index={i} key={selection.slug}/>)}</div>
  </section>;
}
function Studio() {
  const steps = [
    ['PLAN', 'We confirm the product, placements and delivery date.'],
    ['SHIP', 'You send the product to the studio.'],
    ['SHOOT', 'I photograph and finish the five-image campaign.'],
    ['DELIVER', 'You receive the final images ready to use.'],
  ];

  return <>
    <section id="studio" className="philosophy section-pad">
      <span className="eyebrow">CINEMATIC PRODUCT IMAGERY</span>
      <h2>THE PRODUCT SETS<br/>THE DIRECTION.<br/><em>EVERY TIME.</em><Orbit/></h2>
      <div className="philosophy-bottom"><p>I bring a defined visual language of deep contrast, controlled light and close material detail to supplements, skincare and body care.</p></div>
    </section>
    <section className="why section-pad">
      <div className="studio-intro"><span className="eyebrow">THE PROCESS</span><h2>Simple from start<br/>to finish.</h2><p>You work directly with me throughout the project.</p></div>
      <div className="principles">{steps.map(([title, copy], i) => <div className="principle" key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
    </section>
    <section className="founder section-pad"><div className="founder-label"><Orbit/><img className="founder-image-placeholder" src="/images/simon-founder-portrait-1200.webp" srcSet="/images/simon-founder-portrait-800.webp 800w, /images/simon-founder-portrait-1200.webp 1200w" sizes="(max-width: 600px) 230px, 280px" width={3915} height={3910} alt="Simon Jackson, Owner and Creative Director of Concrete Orbit" loading="lazy" decoding="async"/><span className="eyebrow">OWNER / CREATIVE DIRECTOR</span></div><div><h2>I make the work<br/>and lead the project.</h2><p>I’m Simon Jackson, owner and creative director of Concrete Orbit. I develop the direction, shoot the product and finish every image.</p><div className="founder-name">SIMON JACKSON<span>Owner + Creative Director</span></div></div></section>
  </>;
}

function Contact() {
  return <section id="contact" className="contact contact-simple section-pad">
    <div className="contact-context">
      <span className="eyebrow">PROJECT INQUIRIES</span>
      <div className="contact-heading"><h2>START A<br/>PROJECT <span>↓</span></h2></div>
    </div>
    <div className="email-inquiry">
      <h3>Tell me what you’re creating.</h3>
      <p>Tell me what you’re launching and when you need it.</p>
      <a className="email-address" href="mailto:hello@concreteorbit.com">hello@concreteorbit.com</a>
    </div>
  </section>;
}

function Footer() { return <footer className="section-pad"><div className="footer-top"><a className="wordmark" href="/">concrete orbit</a><p>Based in Washington, DC.<br/>Working worldwide.</p><a href="#top">Back to top ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Concrete Orbit</span><a href="https://www.instagram.com/concreteorbitvisuals/" target="_blank" rel="noopener noreferrer" aria-label="Concrete Orbit on Instagram (opens in a new tab)" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a></div></footer>; }

function Home() {
  return <>
    <section className="hero section-pad fullbleed-hero">
      <div className="hero-image homepage-hero-stage homepage-hero-acure">
        <picture className="homepage-hero-photo homepage-hero-slide homepage-hero-macro is-active">
          <img className="portfolio-image" src={acureHomepageHero.src} srcSet={acureHomepageHero.srcSet} sizes="100vw" width={acureHomepageHero.width} height={acureHomepageHero.height} alt={acureHomepageHero.alt} loading="eager" fetchPriority="high" decoding="async"/>
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
    <section className="featured-strip section-pad" aria-label="Selected product campaigns"><span>SELECTED PRODUCT CAMPAIGNS</span><p>TRACE MAGNESIUM · TRACE ELECTROLYTES · MT. ANGEL · PHIL’S</p></section>
    <Work/><Studio/><Contact/>
  </>;
}

type ApplicationSettings = {
  websiteHeadline: string;
  adHeadline: string;
  socialCaption: string;
};

const applicationSettings: Record<string, ApplicationSettings> = {
  'trace-magnesium-glycinate': {
    websiteHeadline: 'Rest starts here.',
    adHeadline: 'Magnesium, brought into focus.',
    socialCaption: 'A closer look at the details behind your nightly routine.',
  },
  'trace-electrolytes': {
    websiteHeadline: 'Hydration with impact.',
    adHeadline: '40,000 Volts. Zero subtlety.',
    socialCaption: 'Hydration made physical.',
  },
  'mt-angel-joint-solution': {
    websiteHeadline: 'Movement starts here.',
    adHeadline: 'Joint support, brought into focus.',
    socialCaption: 'The formula, closer.',
  },
  'phils-daily-facial-cleanser': {
    websiteHeadline: 'Clean, brought closer.',
    adHeadline: 'A better way to begin.',
    socialCaption: 'Daily cleansing, down to the details.',
  },
};

function CampaignApplications({ project }: { project: Project }) {
  const settings = applicationSettings[project.slug];
  if (!settings) return null;

  const extremeMacro = project.gallery[0];
  const slightMacro = project.gallery[1];
  const copySpaceHero = project.gallery[4];
  const titleId = `${project.slug}-applications-title`;

  return <section id="applications" className="campaign-applications" aria-labelledby={titleId}>
    <div className="application-heading"><span className="eyebrow">PLACEMENT EXAMPLES</span><h2 id={titleId}>How it could<br/>work for you.</h2><p>One campaign, ready for the places your brand needs to show up.</p></div>

    <article className="application-block">
      <div className="application-label"><span>01</span><div><h3>Website banner</h3><p>The extreme macro becomes the visual anchor.</p></div></div>
      <div className="browser-mockup">
        <div className="browser-bar"><span className="browser-dots" aria-hidden="true">● ● ●</span><span>Website placement</span></div>
        <div className={`website-concept website-concept-${project.slug}`}>
          <img className="website-banner-image" src={extremeMacro.src} srcSet={extremeMacro.srcSet} sizes="(max-width: 800px) 100vw, 65vw" alt={`${project.name} extreme macro shown in a website banner.`} width={extremeMacro.width} height={extremeMacro.height} loading="lazy" decoding="async"/>
          <div className="website-copy-panel">
            <div className="concept-nav"><span>{project.brand}</span><span>EXTREME MACRO</span></div>
            <div className="concept-copy"><span>CAMPAIGN / 01</span><h4>{project.name}</h4><p>{settings.websiteHeadline}</p><span className="concept-services">CREATIVE DIRECTION · PHOTOGRAPHY · IMAGE FINISHING</span><span className="mock-button">VIEW PRODUCT</span></div>
          </div>
        </div>
      </div>
    </article>

    <article className="application-block">
      <div className="application-label"><span>02</span><div><h3>Advertisement</h3><p>The copy-space hero keeps the product and message separate.</p></div></div>
      <div className="advertisement-shell">
        <div className={`advertisement-concept advertisement-concept-${project.slug}`}>
          <img src={copySpaceHero.src} srcSet={copySpaceHero.srcSet} sizes="90vw" alt={`${project.name} copy-space hero shown as an advertisement.`} width={copySpaceHero.width} height={copySpaceHero.height} loading="lazy" decoding="async"/>
          <div className="advertisement-copy"><span>{project.brand}</span><h4>{settings.adHeadline}</h4><span className="mock-button">VIEW THE PRODUCT</span></div>
        </div>
      </div>
    </article>

    <article className="application-block social-application-block">
      <div className="application-label"><span>03</span><div><h3>Social post</h3><p>The slight macro carries the product into the feed.</p></div></div>
      <div className="instagram-preview" aria-label={`${project.name} Instagram post crop preview`}>
        <div className="instagram-header"><span>POST PREVIEW</span><span className="instagram-more" aria-hidden="true">•••</span></div>
        <div className="instagram-image"><img src={slightMacro.src} srcSet={slightMacro.srcSet} sizes="(max-width: 650px) 100vw, 620px" alt={`${project.name} slight macro shown in an Instagram post.`} width={slightMacro.width} height={slightMacro.height} loading="lazy" decoding="async"/></div>
        <div className="instagram-actions" aria-hidden="true"><span>♡</span></div>
      </div>
    </article>
  </section>;
}

function photoTypeLabel(src: string) {
  const name = src.toLowerCase();
  if (name.includes('extreme-macro')) return 'EXTREME MACRO';
  if (name.includes('slight-macro')) return 'SLIGHT MACRO';
  if (name.includes('hero-copy') || name.includes('copy-space') || name.includes('copyspace')) return 'HERO + COPY SPACE';
  if (name.includes('-macro-')) return 'MESSAGING MACRO';
  if (name.includes('-hero-')) return 'HERO';
  return 'CAMPAIGN IMAGE';
}

function campaignShowcaseImages(project: Project) {
  return project.gallery;
}

function ProjectPage({ project }: { project: Project }) {
  const showcaseImages = campaignShowcaseImages(project);
  const leadImage = showcaseImages[0];
  return <>
  <section className="project-detail section-pad curated-project">
    <a className="back-link" href="/#work">← PROJECT INDEX</a>
    <div className="detail-heading"><div><span className="project-study-note-top">PRODUCT CAMPAIGN</span><h1>{project.name}</h1><p className="project-positioning">{project.direction}</p></div><p>{project.brand}</p></div>
    {leadImage ? <div className="project-lead-frame"><span className="frame-index">01 / {photoTypeLabel(leadImage.src)}</span><ImageFrame image={leadImage} tone={project.tone} label={leadImage.alt} priority/></div> : null}
    <div className="project-information"><div><span className="eyebrow">MY ROLE</span><p>{project.services.join(' · ')}</p></div><div><span className="eyebrow">IMAGES IN THE SET</span><p>{project.deliverables}</p></div></div>
    <div className="project-grid campaign-sequence">{showcaseImages.slice(1).map((img, index) => <div className="project-frame" key={img.src}><span className="frame-index">{String(index + 2).padStart(2, '0')} / {photoTypeLabel(img.src)}</span><ImageFrame image={img} label={img.alt}/></div>)}</div>
    <CampaignApplications project={project}/>
  </section>
  <Contact/>
  </>;
}

function App() { const path = window.location.pathname.replace(/\/$/, '') || '/'; const project = projects.find(p => path === `/work/${p.slug}`); useEffect(() => { const title = project ? `${project.name} | Concrete Orbit` : path === '/' ? 'Concrete Orbit | Five-Image Product Campaigns for Wellness Brands' : 'Page not found | Concrete Orbit'; document.title = title; document.querySelector('meta[property="og:title"]')?.setAttribute('content', title); if (project) document.querySelector('meta[name="description"]')?.setAttribute('content', `${project.name}: a five-image product campaign by Concrete Orbit.`); }, [project, path]); useEffect(() => { const id = decodeURIComponent(window.location.hash.slice(1)); if (!id) return; const scrollToTarget = () => document.getElementById(id)?.scrollIntoView({ block: 'start' }); const frame = window.requestAnimationFrame(scrollToTarget); const timers = [250, 1000, 2500].map(delay => window.setTimeout(scrollToTarget, delay)); const pendingImages = Array.from(document.images).filter(image => !image.complete); pendingImages.forEach(image => image.addEventListener('load', scrollToTarget)); window.addEventListener('load', scrollToTarget, { once: true }); return () => { window.cancelAnimationFrame(frame); timers.forEach(timer => window.clearTimeout(timer)); pendingImages.forEach(image => image.removeEventListener('load', scrollToTarget)); window.removeEventListener('load', scrollToTarget); }; }, [path]); const contactHref = path === '/' || project ? '#contact' : '/#contact'; return <><a className="skip-link" href="#main">Skip to content</a><div id="top"/><Header contactHref={contactHref}/><main id="main">{path === '/' ? <Home/> : project ? <ProjectPage project={project}/> : <section className="not-found section-pad"><span className="eyebrow">404 / OUT OF ORBIT</span><h1>Nothing here. Yet.</h1><a href="/">Return to the studio →</a></section>}</main><Footer/></>; }
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
