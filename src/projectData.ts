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
  direction: string;
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

const traceElectrolytes = {
  extreme: campaignImage('trace-electrolytes', 'extreme-macro', 2560, 1429, 'Extreme macro of the wet Trace 40,000 Volts bottle and logo.'),
  slight: campaignImage('trace-electrolytes', 'slight-macro', 2560, 1429, 'Close product view of Trace 40,000 Volts covered in water droplets.'),
  macro: campaignImage('trace-electrolytes', 'macro', 2560, 1429, 'Messaging macro of the Trace Electrolyte Concentrate product benefits.'),
  hero: campaignImage('trace-electrolytes', 'hero', 2560, 1429, 'Trace 40,000 Volts electrolyte concentrate hero photograph against black.'),
  heroCopy: campaignImage('trace-electrolytes', 'hero-copy', 2560, 1429, 'Trace 40,000 Volts hero with clear black copy space.'),
};

const mtAngelJoint = {
  extreme: campaignImage('mt-angel-joint', 'extreme-macro', 2560, 1429, 'Extreme macro of the Joint Solution ingredient messaging and amber bottle.'),
  slight: campaignImage('mt-angel-joint', 'slight-macro', 2560, 1684, 'Close product view of Mt. Angel Vitamins Joint Solution.'),
  macro: campaignImage('mt-angel-joint', 'macro', 2560, 1429, 'Messaging macro of the Mt. Angel Vitamins name and Joint Solution label.'),
  hero: campaignImage('mt-angel-joint', 'hero', 2560, 1623, 'Mt. Angel Vitamins Joint Solution hero photograph against black.'),
  heroCopy: campaignImage('mt-angel-joint', 'hero-copy', 2560, 1662, 'Mt. Angel Vitamins Joint Solution hero with clear black copy space.'),
};

const phils = {
  extreme: campaignImage('phils', 'extreme-macro', 1678, 937, 'Extreme macro of the wet Phil’s Daily Facial Cleanser label.'),
  slight: campaignImage('phils', 'slight-macro', 2560, 1627, 'Close product view of Phil’s Daily Facial Cleanser covered in water droplets.'),
  macro: campaignImage('phils', 'macro', 1678, 937, 'Messaging macro of the Phil’s packaging claims and ingredients.'),
  hero: campaignImage('phils', 'hero', 2560, 1429, 'Phil’s Daily Facial Cleanser hero photograph against black.'),
  heroCopy: campaignImage('phils', 'hero-copy', 2560, 1429, 'Phil’s Daily Facial Cleanser hero with clear black copy space.'),
};

const xboxController = {
  extreme: campaignImage('xbox-controller', 'extreme-macro', 2560, 1429, 'Extreme macro of the Xbox Elite controller thumbstick, buttons and textured grip.', 'jpg'),
  slight: campaignImage('xbox-controller', 'slight-macro', 2560, 1429, 'Close product view of the Xbox Elite controller face and controls against black.', 'jpg'),
  macro: campaignImage('xbox-controller', 'macro', 2560, 1429, 'Messaging macro of the Xbox Elite controller rear controls and embossed Xbox mark.', 'jpg'),
  hero: campaignImage('xbox-controller', 'hero', 2560, 1429, 'Tilted Xbox Elite controller hero photograph emerging from a black background.', 'jpg'),
  heroCopy: campaignImage('xbox-controller', 'hero-copy', 2560, 1429, 'Straight Xbox Elite controller hero with generous black copy space.', 'jpg'),
};

export const projects: Project[] = [
  {
    slug: 'xbox-elite-controller',
    name: 'XBOX ELITE',
    brand: 'Elite Wireless Controller',
    tone: 'slate',
    socialHandle: 'xbox',
    services: ['Creative Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Hero · Copy-space hero · Slight macro · Messaging macro · Extreme macro',
    direction: 'Five black-on-black product images built around sculpted form, tactile materials and controlled reflections.',
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
    direction: 'Five blue-lit product images built around scale, label detail and controlled contrast.',
    cover: traceMagnesium.heroCopy,
    gallery: [traceMagnesium.extreme, traceMagnesium.slight, traceMagnesium.macro, traceMagnesium.hero, traceMagnesium.heroCopy],
  },
  {
    slug: 'trace-electrolytes',
    name: '40,000 VOLTS',
    brand: 'Trace Minerals',
    tone: 'slate',
    socialHandle: 'traceminerals',
    services: ['Creative Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Hero · Copy-space hero · Slight macro · Messaging macro · Extreme macro',
    direction: 'Five product images using water, electric blue light and tight scale to make hydration feel physical.',
    cover: traceElectrolytes.heroCopy,
    gallery: [traceElectrolytes.extreme, traceElectrolytes.slight, traceElectrolytes.macro, traceElectrolytes.hero, traceElectrolytes.heroCopy],
  },
  {
    slug: 'mt-angel-joint-solution',
    name: 'JOINT SOLUTION',
    brand: 'Mt. Angel Vitamins',
    tone: 'slate',
    socialHandle: 'mtangelvitamins',
    services: ['Creative Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Hero · Copy-space hero · Slight macro · Messaging macro · Extreme macro',
    direction: 'Five low-key product images built around amber glass, exact highlights and close label detail.',
    cover: mtAngelJoint.heroCopy,
    gallery: [mtAngelJoint.extreme, mtAngelJoint.slight, mtAngelJoint.macro, mtAngelJoint.hero, mtAngelJoint.heroCopy],
  },
  {
    slug: 'phils-daily-facial-cleanser',
    name: 'PHIL’S',
    brand: 'Daily Facial Cleanser',
    tone: 'slate',
    socialHandle: 'phils',
    services: ['Creative Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Hero · Copy-space hero · Slight macro · Messaging macro · Extreme macro',
    direction: 'Five black-and-white product images built around clean form, condensation and tactile packaging detail.',
    cover: phils.heroCopy,
    gallery: [phils.extreme, phils.slight, phils.macro, phils.hero, phils.heroCopy],
  },
];

export const capabilities = ['Creative Direction', 'Photography', 'Image Finishing'];
