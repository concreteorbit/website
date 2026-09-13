export type PortfolioImage = { src: string; alt: string; width: number; height: number; srcSet?: string };
export type Project = { slug: string; name: string; brand: string; description: string; cover: PortfolioImage; gallery: PortfolioImage[]; tone: string };

export const projects: Project[] = [
  {
    slug: 'harrys', name: 'HARRY’S', brand: 'Harry’s', tone: 'slate',
    description: 'Harry’s Taming Cream, photographed in deep blue and near-black. Restrained light picks out the type, texture and shape of the tube, while the floating compositions give a familiar grooming product a sharper, more sculptural presence.',
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
    slug: 'method', name: 'METHOD', brand: 'Method', tone: 'clay',
    description: 'For Method, bold color, water and close product details turn everyday body care into something graphic and tactile.',
    cover: { src: '/images/projects/method-1-2000.webp', alt: 'Method body care campaign image.', width: 5504, height: 3072 },
    gallery: [
      { src: '/images/projects/method-2-2000.webp', alt: 'Close-up of Method body care packaging.', width: 5504, height: 3072 },
      { src: '/images/projects/method-3-1200.webp', alt: 'Method body care product detail.', width: 2048, height: 1143 },
    ],
  },
  {
    slug: 'trace', name: 'TRACE', brand: 'Trace', tone: 'slate',
    description: 'For Trace 40,000 Volts, water droplets and electric-blue light bring energy to the bottle while keeping the product and label clear.',
    cover: { src: '/images/projects/trace-1-2000.webp', alt: 'Trace 40,000 Volts electrolyte concentrate covered in water droplets.', width: 5504, height: 3072 },
    gallery: [
      { src: '/images/projects/trace-2-2000.webp', alt: 'Close-up of the Trace electrolyte bottle.', width: 5504, height: 3072 },
      { src: '/images/projects/trace-3-2000.webp', alt: 'Trace electrolyte concentrate campaign detail.', width: 5504, height: 3072 },
    ],
  },
  {
    slug: 'trace-magnesium-glycinate', name: 'TRACE MAGNESIUM GLYCINATE', brand: 'Trace', tone: 'slate',
    description: 'For Trace Magnesium Glycinate, I moved close to the packaging and let the details lead: the ribbed lid, printed type and cool-blue reflections. Deep blacks keep the images calm and cinematic, giving the product a premium nighttime feel.',
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
    slug: 'sports-research', name: 'SPORTS RESEARCH', brand: 'Sports Research', tone: 'olive',
    description: 'For Sports Research Sleep Complex, clean product views and close label details balance performance cues with a quieter nighttime mood.',
    cover: { src: '/images/projects/sports-research-1-2000.webp', alt: 'Sports Research Sleep Complex campaign image.', width: 5504, height: 3072 },
    gallery: [
      { src: '/images/projects/sports-research-2-2000.webp', alt: 'Sports Research Sleep Complex product view.', width: 5504, height: 3072 },
      { src: '/images/projects/sports-research-3-2000.webp', alt: 'Close-up of the Sports Research Sleep Complex label.', width: 5152, height: 2876 },
    ],
  },
  {
    slug: 'cremo', name: 'CREMO', brand: 'Cremo', tone: 'slate',
    description: 'Cremo Italian Bergamot Body Wash, shot with rich amber color, cool blue edge light and plenty of water. Close compositions bring out the label, typography and droplets, giving the fragrance a fresh, luxurious mood while keeping the product unmistakable.',
    cover: { src: '/images/projects/cremo-wet-tilt-1920.webp', alt: 'Cremo Italian Bergamot Body Wash angled against black with water droplets and blue edge light.', width: 5504, height: 3072 },
    gallery: [
      { src: '/images/projects/cremo-dry-space-1920.webp', alt: 'Cremo Italian Bergamot Body Wash with a reflection and black copy space.', width: 2132, height: 1476 },
      { src: '/images/projects/cremo-slight-macro-1920.webp', alt: 'Close-up of the Cremo Italian Bergamot label, amber bottle and water droplets.', width: 5504, height: 3072 },
      { src: '/images/projects/cremo-dry-hero-960.webp', alt: 'Straight dry hero image of Cremo Italian Bergamot Body Wash.', width: 1672, height: 941 },
      { src: '/images/projects/cremo-wet-hero-960.webp', alt: 'Straight wet hero image of Cremo Italian Bergamot Body Wash.', width: 1678, height: 937 },
    ],
  },
];

export const capabilities = ['Creative Direction', 'Art Direction', 'Photography', 'CGI', '3D', 'Compositing', 'Campaign Development'];
