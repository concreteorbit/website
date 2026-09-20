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
      { src: '/images/projects/phils-extreme-macro-2000.jpg', alt: 'Extreme close-up of the Phil’s Daily Facial Cleanser label and wet paper bottle.', width: 2000, height: 1116 },
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
    approach: 'I moved close to the ribbed lid, printed type and cool-blue reflections, then pulled back for the more useful hero compositions. Deep blacks keep everything calm and cinematic, which felt right for a nighttime product.',
    services: ['Creative Direction', 'Photography', 'Compositing', 'Image Finishing'],
    deliverables: 'Upright and angled heroes · Macro details · Copy-space layouts',
    cover: { src: '/images/projects/trace-magnesium-glycinate-tilt-hero-1920.webp', alt: 'Trace Magnesium Glycinate floating at an angle against black.', width: 5504, height: 3072 },
    gallery: [
      { src: '/images/projects/trace-magnesium-glycinate-extreme-macro-1920.webp', alt: 'Extreme close-up of the Trace Magnesium Glycinate lettering, label and lid.', width: 5504, height: 3072 },
      { src: '/images/projects/trace-magnesium-glycinate-straight-hero-1920.webp', alt: 'Trace Magnesium Glycinate upright in blue light.', width: 5504, height: 3072 },
      { src: '/images/projects/trace-magnesium-glycinate-slight-macro-1920.webp', alt: 'Close-up of the Trace Magnesium Glycinate label.', width: 5504, height: 3072 },
      { src: '/images/projects/trace-magnesium-glycinate-straight-space-1920.webp', alt: 'Trace Magnesium Glycinate upright with black copy space.', width: 8446, height: 5466 },
      { src: '/images/projects/trace-magnesium-glycinate-tilt-space-1920.webp', alt: 'Trace Magnesium Glycinate angled against black negative space.', width: 7517, height: 3506 },
    ],
  },
  {
    slug: 'cremo', name: 'CREMO', brand: 'Cremo', tone: 'slate',
    brief: 'The amber bottle and cream label already give Cremo a lot of character. I wanted to build on that with a set that could move between a clean hero, a wet shower moment and tighter fragrance details.',
    approach: 'I paired the warm bottle with a cool blue edge light, then added water for the fresher frames. The close compositions bring out the paper label, typography and droplets; the wider ones leave the product clear and give copy somewhere to live.',
    services: ['Creative Direction', 'Art Direction', 'Photography', 'Compositing'],
    deliverables: 'Wet and dry heroes · Macro detail · Copy-space frame · Angled variation',
    cover: { src: '/images/projects/cremo-wet-hero-corrected-1678.jpg', alt: 'Cremo Italian Bergamot Body Wash upright against black with water droplets and blue edge light.', width: 1678, height: 937 },
    gallery: [
      { src: '/images/projects/cremo-dry-space-1920.webp', alt: 'Cremo Italian Bergamot Body Wash with a reflection and black copy space.', width: 2132, height: 1476 },
      { src: '/images/projects/cremo-slight-macro-1920.webp', alt: 'Close-up of the Cremo Italian Bergamot label, amber bottle and water droplets.', width: 5504, height: 3072 },
      { src: '/images/projects/cremo-dry-hero-960.webp', alt: 'Straight dry hero image of Cremo Italian Bergamot Body Wash.', width: 1672, height: 941 },
      { src: '/images/projects/cremo-wet-tilt-1920.webp', alt: 'Cremo Italian Bergamot Body Wash angled against black with water droplets and blue edge light.', width: 5504, height: 3072 },
    ],
  },
];

export const capabilities = ['Creative Direction', 'Art Direction', 'Photography', 'CGI', '3D', 'Compositing', 'Campaign Development'];
