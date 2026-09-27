export type PortfolioImage = { src: string; alt: string; width: number; height: number; srcSet?: string };
export type Project = {
  slug: string;
  name: string;
  brand: string;
  services: string[];
  deliverables: string;
  cover: PortfolioImage;
  gallery: PortfolioImage[];
  tone: string;
};

export const projects: Project[] = [
  {
    slug: 'phils', name: 'PHIL’S', brand: 'Phil’s', tone: 'slate',
    services: ['Creative Direction', 'Art Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Straight hero · Angled hero · Slight macro · Extreme macro · Copy-space hero',
    cover: { src: '/images/projects/phils-hero-2000.jpg', alt: 'Phil’s Daily Facial Cleanser upright against black and covered in water droplets.', width: 2000, height: 1116 },
    gallery: [
      { src: '/images/projects/phils-extreme-macro-2000.jpg', alt: 'Extreme close-up of the Phil’s Daily Facial Cleanser label and water droplets across the bottle.', width: 2000, height: 1116 },
      { src: '/images/projects/phils-copyspace-2000.jpg', alt: 'Phil’s Daily Facial Cleanser upright with black copy space.', width: 2000, height: 1136 },
      { src: '/images/projects/phils-tilt-2000.jpg', alt: 'Phil’s Daily Facial Cleanser angled against black and covered in water droplets.', width: 2000, height: 1116 },
      { src: '/images/projects/phils-slight-macro-2000.jpg', alt: 'Close-up of the Phil’s Daily Facial Cleanser bottle, ribbed cap and water droplets.', width: 2000, height: 1116 },
    ],
  },
  {
    slug: 'trace', name: 'TRACE', brand: 'Trace', tone: 'slate',
    services: ['Creative Direction', 'Art Direction', 'Photography', 'Compositing'],
    deliverables: 'Hero · Copy-space hero · Two detail views',
    cover: { src: '/images/projects/trace-1-2000.webp', alt: 'Trace 40,000 Volts electrolyte concentrate covered in water droplets.', width: 5504, height: 3072 },
    gallery: [
      { src: '/images/projects/trace-copy-space-2000.jpg', alt: 'Trace 40,000 Volts electrolyte concentrate with generous black copy space.', width: 2000, height: 1211 },
      { src: '/images/projects/trace-2-2000.webp', alt: 'Close-up of the Trace electrolyte bottle.', width: 5504, height: 3072 },
      { src: '/images/projects/trace-3-2000.webp', alt: 'Trace electrolyte concentrate campaign detail.', width: 5504, height: 3072 },
    ],
  },
  {
    slug: 'trace-magnesium-glycinate', name: 'TRACE MAGNESIUM GLYCINATE', brand: 'Trace', tone: 'slate',
    services: ['Creative Direction', 'Photography', 'Compositing', 'Image Finishing'],
    deliverables: 'Straight hero · Angled hero · Slight macro · Extreme macro · Two copy-space heroes',
    cover: { src: '/images/projects/trace-magnesium-glycinate-straight-hero-new.jpg', alt: 'Trace Magnesium Glycinate upright against black in cool blue light.', width: 4379, height: 2644 },
    gallery: [
      { src: '/images/projects/trace-magnesium-glycinate-extreme-macro-1920.webp', alt: 'Extreme close-up of the Trace Magnesium Glycinate lettering, label and lid.', width: 5504, height: 3072 },
      { src: '/images/projects/trace-magnesium-glycinate-slight-macro-1920.webp', alt: 'Close-up of the Trace Magnesium Glycinate label.', width: 5504, height: 3072 },
      { src: '/images/projects/trace-magnesium-glycinate-tilt-hero-1920.webp', alt: 'Trace Magnesium Glycinate floating at an angle against black.', width: 5504, height: 3072 },
      { src: '/images/projects/trace-magnesium-glycinate-straight-copy-space-new.jpg', alt: 'Trace Magnesium Glycinate upright with generous black copy space.', width: 6306, height: 2644 },
      { src: '/images/projects/trace-magnesium-glycinate-tilt-space-1920.webp', alt: 'Trace Magnesium Glycinate angled against black negative space.', width: 7517, height: 3506 },
    ],
  },
  {
    slug: 'eo', name: 'EO', brand: 'EO', tone: 'slate',
    services: ['Creative Direction', 'Art Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Straight hero · Angled hero · Slight macro · Extreme macro · Two copy-space heroes',
    cover: { src: '/images/projects/eo-hero-1920.webp', alt: 'EO calming French lavender shower gel upright against black with blue light and water droplets.', width: 1920, height: 1072 },
    gallery: [
      { src: '/images/projects/eo-extreme-macro-1920.webp', alt: 'Extreme close-up of the EO shower gel label and water droplets in blue light.', width: 1920, height: 1072 },
      { src: '/images/projects/eo-slight-macro-1920.webp', alt: 'Close view of the EO shower gel bottle, pump and wet label.', width: 1920, height: 1072 },
      { src: '/images/projects/eo-tilt-hero-1920.webp', alt: 'EO shower gel floating at an angle against a black background.', width: 1920, height: 1072 },
      { src: '/images/projects/eo-hero-space-1920.webp', alt: 'EO shower gel upright with generous black copy space.', width: 2560, height: 1375 },
      { src: '/images/projects/eo-tilt-space-1920.webp', alt: 'EO shower gel angled beside deep black copy space.', width: 1920, height: 1147 },
    ],
  },
  {
    slug: 'acure-shampoo', name: 'ACURE SHAMPOO', brand: 'ACURE', tone: 'slate',
    services: ['Creative Direction', 'Art Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Straight hero · Angled hero · Slight macro · Extreme macro · Two copy-space heroes',
    cover: { src: '/images/projects/acure-shampoo-hero-1920.webp', alt: 'ACURE Daily Workout Shampoo upright against black with turquoise light and water droplets.', width: 1920, height: 1072 },
    gallery: [
      { src: '/images/projects/acure-shampoo-extreme-macro-1920.webp', alt: 'Extreme close-up of the ACURE shampoo tube and water droplets.', width: 1920, height: 1072 },
      { src: '/images/projects/acure-shampoo-slight-macro-1920.webp', alt: 'Close view of the ACURE Daily Workout Shampoo tube and wet turquoise packaging.', width: 1920, height: 1072 },
      { src: '/images/projects/acure-shampoo-tilt-hero-1920.webp', alt: 'ACURE Daily Workout Shampoo floating at an angle against black.', width: 1920, height: 1072 },
      { src: '/images/projects/acure-shampoo-hero-space-1920.webp', alt: 'ACURE Daily Workout Shampoo upright beside generous black copy space.', width: 2560, height: 1462 },
      { src: '/images/projects/acure-shampoo-tilt-space-1920.webp', alt: 'ACURE Daily Workout Shampoo angled beside black copy space.', width: 2560, height: 1406 },
    ],
  },
  {
    slug: 'acure-body-wash', name: 'ACURE BODY WASH', brand: 'ACURE', tone: 'slate',
    services: ['Creative Direction', 'Art Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Straight hero · Angled hero · Slight macro · Extreme macro · Two copy-space heroes',
    cover: { src: '/images/projects/acure-body-wash-hero-1920.jpg', alt: 'ACURE Body Wash Oil upright against black with silver light and water droplets.', width: 1920, height: 1072 },
    gallery: [
      { src: '/images/projects/acure-body-wash-extreme-macro-1920.jpg', alt: 'Extreme close-up of the wet metallic ACURE Body Wash Oil bottle and vertical lettering.', width: 1920, height: 1072 },
      { src: '/images/projects/acure-body-wash-slight-macro-1920.jpg', alt: 'Close view of the ACURE Body Wash Oil label, silver bottle and water droplets.', width: 1920, height: 1072 },
      { src: '/images/projects/acure-body-wash-tilt-hero-1920.jpg', alt: 'ACURE Body Wash Oil floating at an angle against black.', width: 1920, height: 1072 },
      { src: '/images/projects/acure-body-wash-hero-space-2560.jpg', alt: 'ACURE Body Wash Oil upright beside generous black copy space.', width: 2560, height: 1356 },
      { src: '/images/projects/acure-body-wash-tilt-space-2560.jpg', alt: 'ACURE Body Wash Oil angled beside deep black copy space.', width: 2560, height: 1396 },
    ],
  },
  {
    slug: 'om-lions-mane', name: 'OM LION’S MANE', brand: 'OM', tone: 'slate',
    services: ['Creative Direction', 'Art Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Straight hero · Angled hero · Slight macro · Extreme macro · Two copy-space heroes',
    cover: { src: '/images/projects/om-hero-1920.jpg', alt: 'OM Lion’s Mane mushroom capsules upright against a black background.', width: 1920, height: 1200 },
    gallery: [
      { src: '/images/projects/om-extreme-macro-1920.jpg', alt: 'Extreme close-up of the orange OM Lion’s Mane label and white bottle.', width: 1920, height: 1072 },
      { src: '/images/projects/om-slight-macro-1920.jpg', alt: 'Close view of the OM Lion’s Mane label, type and bottle cap.', width: 1920, height: 1072 },
      { src: '/images/projects/om-tilt-hero-1920.jpg', alt: 'OM Lion’s Mane supplement bottle angled against black.', width: 1920, height: 1200 },
      { src: '/images/projects/om-hero-space-2560.jpg', alt: 'OM Lion’s Mane bottle upright beside generous black copy space.', width: 2560, height: 1544 },
      { src: '/images/projects/om-tilt-space-2560.jpg', alt: 'OM Lion’s Mane bottle angled beside deep black copy space.', width: 2560, height: 1632 },
    ],
  },
];

export const capabilities = ['Creative Direction', 'Art Direction', 'Photography', 'Compositing', 'Generative Image Development', 'Image Finishing', 'Campaign Development'];
