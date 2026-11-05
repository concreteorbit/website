export type PortfolioImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  srcSet?: string;
};

export type Project = {
  slug: string;
  name: string;
  brand: string;
  services: string[];
  deliverables: string;
  cover: PortfolioImage;
  gallery: PortfolioImage[];
  tone: string;
  socialHandle: string;
};

function campaignImage(
  campaign: string,
  shot: string,
  width: number,
  height: number,
  alt: string,
  extension = 'webp',
): PortfolioImage {
  return {
    src: `/images/projects/${campaign}-${shot}-2560.${extension}`,
    srcSet: `/images/projects/${campaign}-${shot}-1200.${extension} 1200w, /images/projects/${campaign}-${shot}-2560.${extension} ${width}w`,
    alt,
    width,
    height,
  };
}

const traceMagnesium = {
  extreme: campaignImage('trace-magnesium', 'extreme-macro', 2560, 1429, 'Extreme macro of the Trace Magnesium Glycinate label and ribbed cap in electric blue light.'),
  slight: campaignImage('trace-magnesium', 'slight-macro', 2560, 1347, 'Close product view of Trace Magnesium Glycinate against black.'),
  macro: campaignImage('trace-magnesium', 'macro', 2560, 1410, 'Messaging macro of the Trace Magnesium Glycinate product name and benefits.'),
  hero: campaignImage('trace-magnesium', 'hero', 2560, 1514, 'Trace Magnesium Glycinate hero photograph against black.'),
  heroCopy: campaignImage('trace-magnesium', 'hero-copy', 2560, 1419, 'Trace Magnesium Glycinate hero with clear black copy space.'),
};

const xboxController = {
  extreme: campaignImage('xbox-controller', 'extreme-macro', 2560, 1429, 'Extreme macro of the Xbox Elite controller thumbstick, buttons and textured grip.', 'jpg'),
  slight: campaignImage('xbox-controller', 'slight-macro', 2560, 1429, 'Close product view of the Xbox Elite controller face and controls against black.', 'jpg'),
  macro: campaignImage('xbox-controller', 'macro', 2560, 1429, 'Messaging macro of the Xbox Elite controller rear controls and embossed Xbox mark.', 'jpg'),
  hero: campaignImage('xbox-controller', 'hero', 2560, 1429, 'Tilted Xbox Elite controller hero photograph emerging from a black background.', 'jpg'),
  heroCopy: campaignImage('xbox-controller', 'hero-copy', 2560, 1429, 'Straight Xbox Elite controller hero with generous black copy space.', 'jpg'),
};

const hokaOra = {
  extreme: {src: '/images/projects/hoka-locked-extreme-macro-2560.webp', srcSet: '/images/projects/hoka-locked-extreme-macro-800.webp 800w, /images/projects/hoka-locked-extreme-macro-1200.webp 1200w, /images/projects/hoka-locked-extreme-macro-1920.webp 1920w, /images/projects/hoka-locked-extreme-macro-2560.webp 2560w', width: 2560, height: 1440, alt: 'Extreme macro of the HOKA logo, vents and textured foam.'},
  hero: {src: '/images/projects/hoka-locked-hero-2560.webp', srcSet: '/images/projects/hoka-locked-hero-800.webp 800w, /images/projects/hoka-locked-hero-1200.webp 1200w, /images/projects/hoka-locked-hero-1920.webp 1920w, /images/projects/hoka-locked-hero-2560.webp 2560w', width: 2560, height: 1440, alt: 'Front hero of the HOKA ORA Recovery Slide in violet light.'},
  top: {src: '/images/projects/hoka-locked-top-macro-2560.webp', srcSet: '/images/projects/hoka-locked-top-macro-800.webp 800w, /images/projects/hoka-locked-top-macro-1200.webp 1200w, /images/projects/hoka-locked-top-macro-1920.webp 1920w, /images/projects/hoka-locked-top-macro-2560.webp 2560w', width: 2560, height: 1440, alt: 'Close overhead view of the sculpted upper and footbed.'},
  heel: {src: '/images/projects/hoka-locked-heel-macro-2560.webp', srcSet: '/images/projects/hoka-locked-heel-macro-800.webp 800w, /images/projects/hoka-locked-heel-macro-1200.webp 1200w, /images/projects/hoka-locked-heel-macro-1920.webp 1920w, /images/projects/hoka-locked-heel-macro-2560.webp 2560w', width: 2560, height: 1440, alt: 'Macro of the layered heel and textured foam.'},
  bottomHero: {src: '/images/projects/hoka-locked-bottom-hero-2560.webp', srcSet: '/images/projects/hoka-locked-bottom-hero-800.webp 800w, /images/projects/hoka-locked-bottom-hero-1200.webp 1200w, /images/projects/hoka-locked-bottom-hero-1920.webp 1920w, /images/projects/hoka-locked-bottom-hero-2560.webp 2560w', width: 2560, height: 1440, alt: 'Outsole hero showing the HOKA mark and tread.'},
  topHero: {src: '/images/projects/hoka-locked-top-hero-5504.webp', srcSet: '/images/projects/hoka-locked-top-hero-800.webp 800w, /images/projects/hoka-locked-top-hero-1200.webp 1200w, /images/projects/hoka-locked-top-hero-1920.webp 1920w, /images/projects/hoka-locked-top-hero-2560.webp 2560w, /images/projects/hoka-locked-top-hero-5504.webp 5504w', width: 5504, height: 3072, alt: 'Full overhead hero of the HOKA ORA Recovery Slide.'},
  backHero: {src: '/images/projects/hoka-locked-back-hero-2560.webp', srcSet: '/images/projects/hoka-locked-back-hero-800.webp 800w, /images/projects/hoka-locked-back-hero-1200.webp 1200w, /images/projects/hoka-locked-back-hero-1920.webp 1920w, /images/projects/hoka-locked-back-hero-2560.webp 2560w', width: 2560, height: 1440, alt: 'Opposite-side hero of the HOKA ORA Recovery Slide.'},
};

const harrysTamingImages: PortfolioImage[] = [
  {
    "src": "/images/projects/harrys-final-top-macro-1376.webp",
    "srcSet": "/images/projects/harrys-final-top-macro-480.webp 480w, /images/projects/harrys-final-top-macro-800.webp 800w, /images/projects/harrys-final-top-macro-1200.webp 1200w, /images/projects/harrys-final-top-macro-1376.webp 1376w",
    "width": 1376,
    "height": 768,
    "alt": "Close view of the Harry’s wordmark, Taming Cream name and sealed tube edge."
  },
  {
    "src": "/images/projects/harrys-final-tilted-hero-1143.webp",
    "srcSet": "/images/projects/harrys-final-tilted-hero-480.webp 480w, /images/projects/harrys-final-tilted-hero-800.webp 800w, /images/projects/harrys-final-tilted-hero-1143.webp 1143w",
    "width": 1143,
    "height": 638,
    "alt": "Harry’s Taming Cream tilted against black in blue light."
  },
  {
    "src": "/images/projects/harrys-final-slight-macro-1376.webp",
    "srcSet": "/images/projects/harrys-final-slight-macro-480.webp 480w, /images/projects/harrys-final-slight-macro-800.webp 800w, /images/projects/harrys-final-slight-macro-1200.webp 1200w, /images/projects/harrys-final-slight-macro-1376.webp 1376w",
    "width": 1376,
    "height": 768,
    "alt": "Angled detail of the Harry’s label and navy tube."
  },
  {
    "src": "/images/projects/harrys-final-extreme-macro-1679.webp",
    "srcSet": "/images/projects/harrys-final-extreme-macro-480.webp 480w, /images/projects/harrys-final-extreme-macro-800.webp 800w, /images/projects/harrys-final-extreme-macro-1200.webp 1200w, /images/projects/harrys-final-extreme-macro-1679.webp 1679w",
    "width": 1679,
    "height": 937,
    "alt": "Extreme macro of Harry’s packaging texture and printed details."
  },
  {
    "src": "/images/projects/harrys-final-side-macro-1376.webp",
    "srcSet": "/images/projects/harrys-final-side-macro-480.webp 480w, /images/projects/harrys-final-side-macro-800.webp 800w, /images/projects/harrys-final-side-macro-1200.webp 1200w, /images/projects/harrys-final-side-macro-1376.webp 1376w",
    "width": 1376,
    "height": 768,
    "alt": "Side detail of the cap and navy packaging."
  }
];

const ps5Images: PortfolioImage[] = [
  {
    "src": "/images/projects/ps5-controller-buttons-macro-3840.webp",
    "srcSet": "/images/projects/ps5-controller-buttons-macro-480.webp 480w, /images/projects/ps5-controller-buttons-macro-800.webp 800w, /images/projects/ps5-controller-buttons-macro-1200.webp 1200w, /images/projects/ps5-controller-buttons-macro-1920.webp 1920w, /images/projects/ps5-controller-buttons-macro-2560.webp 2560w, /images/projects/ps5-controller-buttons-macro-3840.webp 3840w",
    "width": 3840,
    "height": 2160,
    "alt": "Close view of the DualSense controller face buttons, touchpad and textured charcoal shell."
  },
  {
    "src": "/images/projects/ps5-console-hero-3840.webp",
    "srcSet": "/images/projects/ps5-console-hero-480.webp 480w, /images/projects/ps5-console-hero-800.webp 800w, /images/projects/ps5-console-hero-1200.webp 1200w, /images/projects/ps5-console-hero-1920.webp 1920w, /images/projects/ps5-console-hero-2560.webp 2560w, /images/projects/ps5-console-hero-3840.webp 3840w",
    "width": 3840,
    "height": 2160,
    "alt": "PlayStation 5 console emerging from black, defined by a restrained highlight and curved panels."
  },
  {
    "src": "/images/projects/ps5-console-logo-macro-3840.webp",
    "srcSet": "/images/projects/ps5-console-logo-macro-480.webp 480w, /images/projects/ps5-console-logo-macro-800.webp 800w, /images/projects/ps5-console-logo-macro-1200.webp 1200w, /images/projects/ps5-console-logo-macro-1920.webp 1920w, /images/projects/ps5-console-logo-macro-2560.webp 2560w, /images/projects/ps5-console-logo-macro-3840.webp 3840w",
    "width": 3840,
    "height": 2160,
    "alt": "Close view of the PlayStation emblem cut into the textured console panel."
  },
  {
    "src": "/images/projects/ps5-console-upper-slight-macro-3840.webp",
    "srcSet": "/images/projects/ps5-console-upper-slight-macro-480.webp 480w, /images/projects/ps5-console-upper-slight-macro-800.webp 800w, /images/projects/ps5-console-upper-slight-macro-1200.webp 1200w, /images/projects/ps5-console-upper-slight-macro-1920.webp 1920w, /images/projects/ps5-console-upper-slight-macro-2560.webp 2560w, /images/projects/ps5-console-upper-slight-macro-3840.webp 3840w",
    "width": 3840,
    "height": 2160,
    "alt": "Detail of the PlayStation 5 upper panels, inner body and reflective edges."
  },
  {
    "src": "/images/projects/ps5-controller-hero-3840.webp",
    "srcSet": "/images/projects/ps5-controller-hero-480.webp 480w, /images/projects/ps5-controller-hero-800.webp 800w, /images/projects/ps5-controller-hero-1200.webp 1200w, /images/projects/ps5-controller-hero-1920.webp 1920w, /images/projects/ps5-controller-hero-2560.webp 2560w, /images/projects/ps5-controller-hero-3840.webp 3840w",
    "width": 3840,
    "height": 2160,
    "alt": "DualSense controller hero with its controls and form revealed through deep shadow."
  },
  {
    "src": "/images/projects/ps5-controller-trigger-macro-3840.webp",
    "srcSet": "/images/projects/ps5-controller-trigger-macro-480.webp 480w, /images/projects/ps5-controller-trigger-macro-800.webp 800w, /images/projects/ps5-controller-trigger-macro-1200.webp 1200w, /images/projects/ps5-controller-trigger-macro-1920.webp 1920w, /images/projects/ps5-controller-trigger-macro-2560.webp 2560w, /images/projects/ps5-controller-trigger-macro-3840.webp 3840w",
    "width": 3840,
    "height": 2160,
    "alt": "Close view of the DualSense rear triggers, molded shapes and fine material texture."
  }
];

export const projects: Project[] = [
  {
    slug: 'playstation-5',
    name: 'PLAYSTATION 5',
    brand: 'Console + DualSense Controller',
    tone: 'slate',
    socialHandle: 'playstation',
    services: ['Creative Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Controller button macro · Console hero · Console logo macro · Console upper detail · Controller hero · Controller trigger macro',
    cover: ps5Images[0],
    gallery: ps5Images,
  },
  {
    slug: 'harrys-taming-cream',
    name: 'HARRY’S',
    brand: 'Taming Cream',
    tone: 'slate',
    socialHandle: 'harrys',
    services: ['Creative Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Top macro · Tilted hero · Slight macro · Extreme macro · Side macro',
    cover: harrysTamingImages[1],
    gallery: harrysTamingImages,
  },
  {
    slug: 'hoka-ora-recovery-slides',
    name: 'HOKA',
    brand: 'ORA Recovery Slides',
    tone: 'slate',
    socialHandle: 'hoka',
    services: ['Creative Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Extreme macro · Front hero · Top macro · Back heel macro · Outsole hero · Top hero · Opposite-side hero',
    cover: hokaOra.hero,
    gallery: [hokaOra.extreme, hokaOra.hero, hokaOra.top, hokaOra.heel, hokaOra.bottomHero, hokaOra.topHero, hokaOra.backHero],
  },
  {
    slug: 'xbox-elite-controller',
    name: 'XBOX ELITE',
    brand: 'Elite Wireless Controller',
    tone: 'slate',
    socialHandle: 'xbox',
    services: ['Creative Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Hero · Copy-space hero · Slight macro · Messaging macro · Extreme macro',
    cover: xboxController.heroCopy,
    gallery: [xboxController.extreme, xboxController.slight, xboxController.macro, xboxController.hero, xboxController.heroCopy],
  },
  {
    slug: 'trace-magnesium-glycinate',
    name: 'MAGNESIUM GLYCINATE',
    brand: 'Trace Minerals',
    tone: 'slate',
    socialHandle: 'traceminerals',
    services: ['Creative Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Hero · Copy-space hero · Slight macro · Messaging macro · Extreme macro',
    cover: traceMagnesium.heroCopy,
    gallery: [traceMagnesium.extreme, traceMagnesium.slight, traceMagnesium.macro, traceMagnesium.hero, traceMagnesium.heroCopy],
  },
];

export const capabilities = ['Creative Direction', 'Photography', 'Image Finishing'];
