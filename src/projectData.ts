export type PortfolioImage = { src: string; alt: string; width: number; height: number; srcSet?: string };
export type Project = {
  slug: string;
  name: string;
  brand: string;
  brief: string;
  approach: string;
  services: string[];
  deliverables: string;
  cover: PortfolioImage;
  gallery: PortfolioImage[];
  tone: string;
};

export const projects: Project[] = [
  {
    slug: 'harrys', name: 'HARRY’S', brand: 'Harry’s', tone: 'slate',
    brief: 'I wanted to see how far one tube could carry a small campaign. The goal was to make Harry’s Taming Cream feel less like an everyday bathroom product and more like an object with weight and attitude.',
    approach: 'I kept the set nearly black and used a narrow blue light to trace the lettering, texture and shape of the tube. Straight, floating and extreme-close frames gave the series a mix of clear product views and more graphic details.',
    services: ['Creative Direction', 'Art Direction', 'Photography', 'Compositing'],
    deliverables: 'Upright and angled heroes · Macro details · Copy-space layouts',
    cover: { src: '/images/projects/harrys-tilt-hero-1920.webp', alt: 'Harry’s Taming Cream floating at an angle against a black background.', width: 6962, height: 3853 },
    gallery: [
      { src: '/images/projects/harrys-extreme-macro-1920.webp', alt: 'Extreme close-up of the Harry’s lettering and blue packaging texture.', width: 5504, height: 3072 },
      { src: '/images/projects/harrys-straight-hero-1920.webp', alt: 'Harry’s Taming Cream upright in restrained blue light.', width: 5504, height: 3072 },
      { src: '/images/projects/harrys-slight-macro-1920.webp', alt: 'Close-up of the Harry’s label and packaging.', width: 5504, height: 3072 },
      { src: '/images/projects/harrys-straight-space-1920.webp', alt: 'Harry’s Taming Cream upright with deep black negative space.', width: 7524, height: 4092 },
      { src: '/images/projects/harrys-tilt-space-1920.webp', alt: 'Harry’s Taming Cream angled against black negative space.', width: 7578, height: 3697 },
    ],
  },
  {
    slug: 'phils', name: 'PHIL’S', brand: 'Phil’s', tone: 'slate',
    brief: 'I wanted the cleanser to feel tactile and stripped back. The contrast between the white bottle and deep black space keeps the packaging graphic, while the water gives it the feeling of something just used at the sink.',
    approach: 'I used a hard side light with controlled falloff to bring out the paper texture, ribbed cap and droplets without flattening the white bottle. The wider frames keep the full product clear; the close crops turn the label and wet surface into the visual story.',
    services: ['Creative Direction', 'Art Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Straight and angled heroes · Macro details · Copy-space layout',
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
    brief: 'The name “40,000 Volts” gave me the starting point. I wanted the bottle to feel charged and physical, but still clear enough that the product and label could lead the image.',
    approach: 'Water droplets bring in the hydration story and electric-blue light gives the bottle its energy. I kept the background black so the shape, label and wet surface stay easy to read.',
    services: ['Creative Direction', 'Art Direction', 'Photography', 'Compositing'],
    deliverables: 'Campaign hero · Copy-space hero · Label close-up · Supporting product frame',
    cover: { src: '/images/projects/trace-1-2000.webp', alt: 'Trace 40,000 Volts electrolyte concentrate covered in water droplets.', width: 5504, height: 3072 },
    gallery: [
      { src: '/images/projects/trace-copy-space-2000.jpg', alt: 'Trace 40,000 Volts electrolyte concentrate with generous black copy space.', width: 2000, height: 1211 },
      { src: '/images/projects/trace-2-2000.webp', alt: 'Close-up of the Trace electrolyte bottle.', width: 5504, height: 3072 },
      { src: '/images/projects/trace-3-2000.webp', alt: 'Trace electrolyte concentrate campaign detail.', width: 5504, height: 3072 },
    ],
  },
  {
    slug: 'trace-magnesium-glycinate', name: 'TRACE MAGNESIUM GLYCINATE', brand: 'Trace', tone: 'slate',
    brief: 'For Magnesium Glycinate, I wanted a quieter kind of energy. The series needed clean product heroes, close material details and frames with enough room for campaign copy.',
    approach: 'I moved close to the ribbed lid, printed type and cool-blue reflections, then built the wider frames around the angled product. Deep blacks keep everything calm and cinematic, which felt right for a nighttime product.',
    services: ['Creative Direction', 'Photography', 'Compositing', 'Image Finishing'],
    deliverables: 'Angled hero · Macro details · Copy-space layouts',
    cover: { src: '/images/projects/trace-magnesium-glycinate-tilt-hero-1920.webp', alt: 'Trace Magnesium Glycinate floating at an angle against black.', width: 5504, height: 3072 },
    gallery: [
      { src: '/images/projects/trace-magnesium-glycinate-extreme-macro-1920.webp', alt: 'Extreme close-up of the Trace Magnesium Glycinate lettering, label and lid.', width: 5504, height: 3072 },
      { src: '/images/projects/trace-magnesium-glycinate-slight-macro-1920.webp', alt: 'Close-up of the Trace Magnesium Glycinate label.', width: 5504, height: 3072 },
      { src: '/images/projects/trace-magnesium-glycinate-straight-space-1920.webp', alt: 'Trace Magnesium Glycinate upright with black copy space.', width: 8446, height: 5466 },
      { src: '/images/projects/trace-magnesium-glycinate-tilt-space-1920.webp', alt: 'Trace Magnesium Glycinate angled against black negative space.', width: 7517, height: 3506 },
    ],
  },
  {
    slug: 'eo', name: 'EO', brand: 'EO', tone: 'slate',
    brief: 'The bottle already had a strong blue graphic system, so I built the campaign around it. I wanted the shower gel to feel cool, tactile and immediate, with enough range for a clear product hero, copy space and close details.',
    approach: 'I kept the set black, worked with narrow blue light and covered the bottle in water so the label and glass carried the frame. The wider images hold the full product cleanly; the closer crops turn the droplets, type and curved bottle into the visual.',
    services: ['Creative Direction', 'Art Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Straight and angled heroes · Macro details · Copy-space layouts',
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
    brief: 'The turquoise tube and oversized vertical logo already felt energetic. I built the campaign around that color, using water and deep black space to make the shampoo feel immediate without losing the packaging.',
    approach: 'I used controlled side light to hold the shape of the tube and bring out the droplets across its surface. The full-product frames keep the bottle clear, while the close views turn the type, color and water into the visual.',
    services: ['Creative Direction', 'Art Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Straight and angled heroes · Macro details · Copy-space layouts',
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
    brief: 'The silver bottle changes from near black to bright metallic detail as the light moves across it. I built the series around that contrast, using water to make the surface feel immediate and physical.',
    approach: 'A hard side light traces the pump, curved bottle and vertical ACURE type while the rest falls into shadow. Straight and angled frames keep the full product clear, and the close views turn the wet metallic packaging into the subject.',
    services: ['Creative Direction', 'Art Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Straight and angled heroes · Macro details · Copy-space layouts',
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
    brief: 'The orange label is simple and recognizable, so I kept the campaign direct. The goal was to give the bottle more scale and presence while preserving the plainspoken character of the packaging.',
    approach: 'I used a focused light against black to separate the white bottle and hold the warmth of the orange label. Wider frames establish the product, while the two close views bring the printed type, label texture and container shape forward.',
    services: ['Creative Direction', 'Art Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Straight and angled heroes · Macro details · Copy-space layouts',
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
