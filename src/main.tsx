import React, { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';
import { createRoot } from 'react-dom/client';
import { capabilities, projects } from './projectData';
import type { PortfolioImage, Project } from './projectData';
import './styles.css';
import { selectedWork } from './selectedWork';

function Orbit({ className = '' }: { className?: string }) { return <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true"><circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="2"/><ellipse cx="50" cy="50" rx="47" ry="17" transform="rotate(-40 50 50)" stroke="currentColor" strokeWidth="2"/></svg>; }
function Header({ contactHref }: { contactHref: string }) { const [open, setOpen] = useState(false); return <header className="header"><a className="wordmark" href="/" aria-label="Concrete Orbit home">concrete orbit</a><button className="menu-button" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button><nav id="navigation" className={open ? 'navigation open' : 'navigation'} aria-label="Main navigation"><a href="/#work" onClick={() => setOpen(false)}>Selected work</a><a href="/#studio" onClick={() => setOpen(false)}>The studio</a><a className="nav-cta" href={contactHref} onClick={() => setOpen(false)}>Start a project <span>↗</span></a></nav></header>; }
function ImageFrame({ image, tone = 'hero-tone', label, priority = false }: { image?: PortfolioImage | null; tone?: string; label: string; priority?: boolean }) { return image ? <img className="portfolio-image" src={image.src} srcSet={image.srcSet} sizes="(max-width: 700px) 100vw, 90vw" alt={image.alt} width={image.width} height={image.height} loading={priority ? 'eager' : 'lazy'} decoding="async"/> : <div className={`image-placeholder ${tone}`} role="img" aria-label={`${label}, image to be supplied`}><span className="frame-corner top-left"/><span className="frame-corner bottom-right"/><span className="placeholder-cross">+</span><div className="placeholder-caption"><span>IMAGE PLACEHOLDER</span></div></div>; }
function Work() {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = window.setInterval(() => setShowHero(current => !current), 30000);
    return () => window.clearInterval(interval);
  }, []);

  return <section id="work" className="work section-pad curated-work">
    <div className="section-heading"><div><span className="lab-index">01 / SELECTED WORK</span><h2>Selected product<br/>campaigns.</h2></div><p className="section-note">HERO / DETAIL / COPY SPACE<br/>WASHINGTON, DC · WORLDWIDE</p></div>
    <div className="curated-grid">{selectedWork.map((selection, i) => (
      <a className={`curated-card curated-card-${i + 1} curated-${selection.size}`} href={`/work/${selection.slug}`} key={selection.slug}>
        <div className={`curated-image rotating-work-image${showHero ? ' show-alternate' : ''}`}>
          <img className="portfolio-image rotating-primary" src={selection.image.src} srcSet={selection.image.srcSet} sizes={selection.size === 'large' ? '90vw' : selection.size === 'medium' ? '(max-width: 700px) 85vw, 60vw' : '(max-width: 700px) 72vw, 30vw'} width={selection.image.width} height={selection.image.height} alt={selection.image.alt} loading="lazy" decoding="async"/>
          {selection.alternateImage && <img className="portfolio-image rotating-alternate" src={selection.alternateImage.src} srcSet={selection.alternateImage.srcSet} sizes="90vw" width={selection.alternateImage.width} height={selection.alternateImage.height} alt="" aria-hidden="true" loading="lazy" decoding="async"/>}
        </div>
        <div className="curated-caption"><span className="project-number">{String(i + 1).padStart(2, '0')}</span><div><h3>{selection.title}</h3><p>{selection.subtitle}</p></div><span aria-hidden="true">↗</span></div>
      </a>
    ))}</div>
  </section>;
}
function Studio() { return <><section id="studio" className="philosophy section-pad"><span className="eyebrow">CINEMATIC PRODUCT IMAGERY</span><h2>THE PRODUCT SETS<br/>THE DIRECTION.<br/><em>EVERY TIME.</em><Orbit/></h2><div className="philosophy-bottom"><p>I create coordinated product imagery for supplements, skincare and body care, so a brand’s website, advertising and social content feel like one campaign.</p></div></section><section className="why section-pad"><div className="studio-intro"><span className="eyebrow">THE STUDIO</span><h2>One lead from<br/>brief to delivery.</h2><p>You work directly with me on concept, shot planning, production and finishing. That keeps the visual direction intact and the feedback loop short.</p></div><div className="principles">{[['BEFORE THE SHOOT','We define the audience, intended use and images the project needs.'],['DURING PRODUCTION','I shape the light, composition and material detail around the product.'],['AT DELIVERY','You receive finished images prepared for the formats agreed in the brief.']].map(([title, copy], i) => <div className="principle" key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></section><section className="founder section-pad"><div className="founder-label"><Orbit/><img className="founder-image-placeholder" src="/images/simon-founder-portrait-1200.webp" srcSet="/images/simon-founder-portrait-800.webp 800w, /images/simon-founder-portrait-1200.webp 1200w" sizes="(max-width: 600px) 230px, 280px" width={3915} height={3910} alt="Simon Jackson, Founder and Creative Director of Concrete Orbit" loading="lazy" decoding="async"/><span className="eyebrow">FOUNDER / CREATIVE DIRECTOR</span></div><div><h2>I make the work<br/>and lead the project.</h2><p>I’m Simon Jackson, the photographer and creative director behind Concrete Orbit.</p><div className="founder-name">SIMON JACKSON<span>Founder + Creative Director</span><p className="founder-approach">I built the studio around a hands-on process: developing the visual idea, photographing the product and carrying the image through its final finish.</p></div></div></section><section className="partners section-pad"><span className="eyebrow">PRODUCT CAMPAIGN SET / INITIAL SCOPE</span><h2>One product.<br/>One clear direction.</h2><p className="offer-intro">A focused set for a product launch, refresh or content push. You get six finished images that feel like one campaign, plus selected crops for the places they need to run.</p><div className="offer-grid"><div><strong>01</strong><span>TWO HERO COMPOSITIONS</span><p>A lead hero and an alternate angle that establish the campaign.</p></div><div><strong>02</strong><span>TWO DETAIL VIEWS</span><p>A slight macro and an extreme macro that bring the product closer.</p></div><div><strong>03</strong><span>TWO COPY SPACE HEROES</span><p>Copy space versions of both hero compositions, built for placement.</p></div><div><strong>+</strong><span>READY FOR PLACEMENT</span><p>One wide website crop and agreed social crops from selected images.</p></div></div><p className="pricing-note">The six master images are the finished campaign photographs. The website and social adaptations are crops made from selected masters. Advertising copy and graphic layouts can be scoped separately.</p><div className="capabilities"><span className="eyebrow">SUPPORTING CAPABILITIES</span><p>{capabilities.join(' · ')}</p></div><p className="process-disclosure">Concrete Orbit combines original product photography, compositing, selective generative tools and detailed image finishing. Every final image is reviewed and refined for product, color and packaging accuracy.</p></section></>; }

function CampaignOfferSummary({ project }: { project: Project }) { return <div className="campaign-offer"><span className="eyebrow">COMMISSION A CAMPAIGN</span><h3>A campaign set for your product.</h3><p>You can commission a campaign with the same visual discipline for your own supplement, skincare or body care product.</p><div className="offer-summary-list"><div><span>01</span><p><strong>One product</strong> and one creative direction.</p></div><div><span>02</span><p><strong>Six master images:</strong> a lead hero, an alternate hero, slight and extreme macro views, plus copy space versions of both heroes.</p></div><div><span>03</span><p><strong>Adaptations:</strong> one wide website crop and agreed social crops made from selected finished images.</p></div></div><p className="offer-summary-note">Master images are the finished campaign photographs. Adaptations are crops made from selected masters. Advertising copy and graphic layouts can be scoped separately.</p><p className="campaign-reference">CAMPAIGN REFERENCE / {project.name}</p></div>; }

function Contact({ project }: { project?: Project }) { const [state, handleSubmit] = useForm('xbgjzjge'); const succeeded = state.succeeded || Boolean(state.result); const campaignSlug = new URLSearchParams(window.location.search).get('campaign'); const referredProject = project ?? projects.find(item => item.slug === campaignSlug); return <section id="contact" className={`contact section-pad${project ? ' campaign-contact' : ''}`}><div className="contact-context"><div className="contact-heading"><h2>START A<br/>PROJECT <span>↗</span></h2><p>Share the product, where the images will be used and when you need them. If you are still shaping the brief, I can help work out the right image set.</p></div>{project && <CampaignOfferSummary project={project}/>}</div><form onSubmit={handleSubmit} encType="multipart/form-data">{referredProject && <input key={referredProject.slug} type="hidden" name="Campaign reference" defaultValue={referredProject.name}/>}<div className="form-row"><label>Name <span>*</span><input name="Name" autoComplete="name" required placeholder="Your name"/></label><label>Company<input name="Company" autoComplete="organization" placeholder="Brand or agency"/></label></div><label>Email <span>*</span><input name="Email" type="email" autoComplete="email" required placeholder="you@company.com"/></label><label>What are you looking to create? <span>*</span><textarea name="Project" required rows={3} placeholder="Tell me about the product, where the images will be used and what you already know…"/></label><div className="form-row"><label>When do you need it?<input name="Timeline" placeholder="Launch date or ideal timeline"/></label><label>Estimated budget<select name="Budget" defaultValue=""><option value="" disabled>Select a range</option><option>Under $5,000</option><option>$5,000 to $10,000</option><option>$10,000 to $25,000</option><option>$25,000 to $50,000</option><option>$50,000+</option><option>Let’s discuss</option></select></label></div><label className="upload-label">Reference / upload<input type="file" name="reference" accept="image/*,.pdf"/><small>Optional. Add an image or PDF if it helps explain the project.</small></label><p className="estimate-note">NEXT: RECOMMENDED SCOPE · ESTIMATE · PRODUCTION PLAN</p><button className="submit" type="submit" disabled={state.submitting}>{state.submitting ? 'SENDING…' : 'REQUEST AN ESTIMATE'} <span>→</span></button>{succeeded && <p className="form-status" role="status">Thanks, your note is in. I’ll review the details and be in touch soon.</p>}{state.errors && !succeeded && <p className="form-status" role="alert">Something went wrong. Please try again.</p>}<p className="contact-email">Prefer email? <a href="mailto:hello@concreteorbit.com">hello@concreteorbit.com</a></p><p className="privacy-note">When you submit this form, Concrete Orbit uses the information and files you provide to evaluate and respond to your inquiry, prepare an estimate and maintain related business records. Submissions are processed by Formspree. Concrete Orbit does not sell inquiry information. To request access, correction or deletion, email <a href="mailto:hello@concreteorbit.com">hello@concreteorbit.com</a>.</p></form></section>; }

function Footer() { return <footer className="section-pad"><div className="footer-top"><a className="wordmark" href="/">concrete orbit</a><p>Based in Washington, DC.<br/>Working worldwide.</p><a href="#top">Back to top ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Concrete Orbit</span><a href="https://www.instagram.com/concreteorbitvisuals/" target="_blank" rel="noopener noreferrer" aria-label="Concrete Orbit on Instagram (opens in a new tab)" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a></div></footer>; }

function Home() {
  return <>
    <section className="hero section-pad fullbleed-hero">
      <div className="hero-image">
        <picture className="homepage-hero-photo">
          <source media="(max-width: 800px)" srcSet="/images/trace-hero-spacious-mobile-640.webp 640w, /images/trace-hero-spacious-mobile-960.webp 960w" sizes="100vw"/>
          <img className="portfolio-image" src="/images/trace-hero-spacious-1920.webp" srcSet="/images/trace-hero-spacious-1280.webp 1280w, /images/trace-hero-spacious-1920.webp 1920w, /images/trace-hero-spacious-2560.webp 2560w" sizes="100vw" width={5504} height={3072} alt="Trace 40,000 Volts electrolyte concentrate bottle covered in water droplets, lit in deep blue against a black background." loading="eager" fetchPriority="high" decoding="async"/>
        </picture>
        <div className="fullbleed-hero-copy">
          <p className="fullbleed-hero-brand"><span>CONCRETE ORBIT</span></p>
          <h1>Cinematic product imagery<br/>for wellness brands.</h1>
          <p className="fullbleed-hero-description">I create coordinated product imagery for supplements, skincare and body care, so your website, advertising and social content feel like one campaign.</p>
          <a className="hero-project-cta" href="#contact">Start a project <span>↘</span></a>
        </div>
        <div className="hero-axis" aria-hidden="true"><span>IMAGE / MATTER / LIGHT</span><span>SCROLL  ↓</span></div>
      </div>
    </section>
    <section className="featured-strip section-pad" aria-label="Brands explored through independent product studies"><span>INDEPENDENT PRODUCT STUDIES</span><p>TRACE · PHIL’S · EO · ACURE · OM</p></section>
    <Work/><Studio/><Contact/>
  </>;
}

type ApplicationSettings = {
  bannerIndex: number;
  adIndex: number | 'cover';
  socialIndex: number;
  websiteHeadline: string;
  adHeadline: string;
  socialCaption: string;
};

const applicationSettings: Record<string, ApplicationSettings> = {
  phils: { bannerIndex: 1, adIndex: 2, socialIndex: 3, websiteHeadline: 'A clean first look.', adHeadline: 'Clean starts here.', socialCaption: 'The bottle, the droplets and the details that give this image its character.' },
  trace: { bannerIndex: 0, adIndex: 0, socialIndex: 1, websiteHeadline: '40,000 Volts, up close.', adHeadline: 'Blue light. Water. Energy.', socialCaption: 'A tight crop built around the label, droplets and electric blue finish.' },
  'trace-magnesium-glycinate': { bannerIndex: 0, adIndex: 3, socialIndex: 1, websiteHeadline: 'Magnesium, brought closer.', adHeadline: 'Night in a new light.', socialCaption: 'A close product study built around cool light, type and packaging texture.' },
  eo: { bannerIndex: 3, adIndex: 4, socialIndex: 1, websiteHeadline: 'French lavender, in a new light.', adHeadline: 'Blue light. Water. EO.', socialCaption: 'A close look at the wet label, curved bottle and cool blue light.' },
  'acure-shampoo': { bannerIndex: 3, adIndex: 4, socialIndex: 1, websiteHeadline: 'The daily clean, brought closer.', adHeadline: 'Water. Light. ACURE.', socialCaption: 'A close study of the turquoise tube, water droplets and vertical ACURE type.' },
  'acure-body-wash': { bannerIndex: 3, adIndex: 4, socialIndex: 1, websiteHeadline: 'Body wash, in a new light.', adHeadline: 'Silver. Water. ACURE.', socialCaption: 'A close look at the metallic bottle, vertical type and water across the surface.' },
  'om-lions-mane': { bannerIndex: 3, adIndex: 4, socialIndex: 1, websiteHeadline: 'Lion’s Mane, brought into focus.', adHeadline: 'A clearer view of OM.', socialCaption: 'A close product study built around the orange label, printed type and simple white bottle.' },
};

function CampaignApplications({ project }: { project: Project }) {
  const [bannerSlide, setBannerSlide] = useState(0);
  const settings = applicationSettings[project.slug];
  if (!settings) return null;
  const hasBannerSlider = false;
  const bannerImages = [project.gallery[settings.bannerIndex]];
  const activeBannerSlide = bannerSlide % bannerImages.length;
  const bannerImage = bannerImages[activeBannerSlide];
  const adImage = settings.adIndex === 'cover' ? project.cover : project.gallery[settings.adIndex];
  const socialImage = project.gallery[settings.socialIndex];
  const titleId = `${project.slug}-applications-title`;

  return <section className="campaign-applications" aria-labelledby={titleId}>
    <div className="application-heading"><span className="eyebrow">PLACEMENT EXAMPLES</span><h2 id={titleId}>How it could<br/>work for you.</h2><p>These independent concept applications show how the photographs could carry a website, an ad and a social post. They are layout studies, not published client work.</p></div>
    <article className="application-block">
      <div className="application-label"><span>01</span><div><h3>Website Banner</h3><p>A wide composition with room for navigation, a headline and CTA.</p></div></div>
      <div className="browser-mockup">
        <div className="browser-bar"><span className="browser-dots" aria-hidden="true">● ● ●</span>{hasBannerSlider ? <div className="website-slider-controls"><span>Website placement</span><button type="button" onClick={() => setBannerSlide(current => (current - 1 + bannerImages.length) % bannerImages.length)} aria-label="Previous Magnesium website banner">←</button><span aria-live="polite">{activeBannerSlide + 1} / {bannerImages.length}</span><button type="button" onClick={() => setBannerSlide(current => (current + 1) % bannerImages.length)} aria-label="Next Magnesium website banner">→</button></div> : <span>Website placement</span>}</div>
        <div className={`website-concept website-concept-${project.slug} website-concept-banner-slide-${activeBannerSlide}`}>
          <img key={bannerImage.src} className="website-banner-image" src={bannerImage.src} alt={`${project.name} product photograph shown in website banner option ${activeBannerSlide + 1}.`} width={bannerImage.width} height={bannerImage.height} loading="lazy" decoding="async"/>
          <div className="concept-nav"><span>{project.name}</span><span>Product · Story · Shop</span></div>
          <div className="concept-copy"><span>PRODUCT CAMPAIGN</span><h4>{settings.websiteHeadline}</h4><span className="mock-button">EXPLORE THE PRODUCT</span></div>
        </div>
      </div>
    </article>
    <article className="application-block">
      <div className="application-label"><span>02</span><div><h3>Advertisements</h3><p>Campaign photographs shown as finished ad layouts.</p></div></div>
      <div className={`advertisement-concept advertisement-concept-${project.slug}`}>
        <img src={adImage.src} alt={`${project.name} product photograph shown in an advertisement example.`} width={adImage.width} height={adImage.height} loading="lazy" decoding="async"/>
        <div className="advertisement-copy"><span>{project.name} / PRODUCT CAMPAIGN</span><h4>{settings.adHeadline}</h4><span className="mock-button">VIEW THE PRODUCT</span></div>
      </div>
    </article>
    <article className="application-block">
      <div className="application-label"><span>03</span><div><h3>Social</h3><p>A close crop shown in a brand post.</p></div></div>
      <div className="social-post-concept">
        <div className="social-post-image"><img src={socialImage.src} alt={`${project.name} close product detail shown in a social post example.`} width={socialImage.width} height={socialImage.height} loading="lazy" decoding="async"/></div>
        <div className="social-post-panel">
          <div className="social-profile"><span className="social-avatar">{project.name.charAt(0)}</span><div><strong>{project.name}</strong><small>Product campaign</small></div><span aria-hidden="true">•••</span></div>
          <div className="social-caption"><strong>{project.name}</strong><p>{settings.socialCaption}</p></div>
          <div className="social-actions" aria-hidden="true"><span>♡</span><span>○</span><span>↗</span><span>□</span></div>
          <p className="social-note">Social placement preview</p>
        </div>
      </div>
    </article>
  </section>;
}

function ProjectPage({ project }: { project: Project }) {
  return <>
  <section className="project-detail section-pad curated-project">
    <a className="back-link" href="/#work">← PROJECT INDEX</a>
    <div className="detail-heading"><div><span className="eyebrow">INDEPENDENT STUDY / PRODUCT IMAGERY</span><h1>{project.name}</h1><p className="project-positioning">Cinematic product imagery for wellness brands.</p></div><p>{project.brand}</p></div>
    <ImageFrame image={project.cover} tone={project.tone} label={`${project.name} / HERO`} priority/>
    <div className="project-information"><div><span className="eyebrow">THE IDEA</span><p>{project.brief}</p></div><div><span className="eyebrow">HOW I MADE IT</span><p>{project.approach}</p></div><div><span className="eyebrow">MY ROLE</span><p>{project.services.join(' · ')}</p></div><div><span className="eyebrow">FRAMES IN THE SERIES</span><p>{project.deliverables}</p></div></div>
    <div className="project-grid campaign-sequence">{project.gallery.map((img, index) => <div className="project-frame" key={img.src}><span className="frame-index">FRAME / {String(index + 1).padStart(2, '0')}</span><ImageFrame image={img} label={img.alt}/></div>)}</div>
    <CampaignApplications project={project}/>
    <div className="project-end"><div><span className="eyebrow">HAVE A WELLNESS PRODUCT IN MIND?</span><a href="#contact">DISCUSS A CAMPAIGN LIKE THIS →</a></div><a href="/#work">← PROJECT INDEX</a></div>
  </section>
  <Contact project={project}/>
  </>;
}

function App() { const path = window.location.pathname.replace(/\/$/, '') || '/'; const project = projects.find(p => path === `/work/${p.slug}`); useEffect(() => { const title = project ? `${project.name} | Concrete Orbit` : path === '/' ? 'Concrete Orbit | Cinematic Product Imagery for Wellness Brands' : 'Page not found | Concrete Orbit'; document.title = title; document.querySelector('meta[property="og:title"]')?.setAttribute('content', title); if (project) document.querySelector('meta[name="description"]')?.setAttribute('content', `${project.name}: an independent product photography study by Concrete Orbit.`); }, [project, path]); useEffect(() => { const id = decodeURIComponent(window.location.hash.slice(1)); if (!id) return; const scrollToTarget = () => document.getElementById(id)?.scrollIntoView(); const frame = window.requestAnimationFrame(scrollToTarget); const settledTimer = window.setTimeout(scrollToTarget, 1000); window.addEventListener('load', scrollToTarget, { once: true }); return () => { window.cancelAnimationFrame(frame); window.clearTimeout(settledTimer); window.removeEventListener('load', scrollToTarget); }; }, [path]); const contactHref = path === '/' || project ? '#contact' : '/#contact'; return <><a className="skip-link" href="#main">Skip to content</a><div id="top"/><Header contactHref={contactHref}/><main id="main">{path === '/' ? <Home/> : project ? <ProjectPage project={project}/> : <section className="not-found section-pad"><span className="eyebrow">404 / OUT OF ORBIT</span><h1>Nothing here. Yet.</h1><a href="/">Return to the studio →</a></section>}</main><Footer/></>; }
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
