import { projects, type PortfolioImage } from './projectData';

type HomepageSelection = {
  slug: string;
  galleryIndex: number;
  title: string;
  subtitle: string;
  size: string;
  alt: string;
  hero?: PortfolioImage;
};

// Homepage art direction is separate from the complete campaign image sets.
const homepageSelections: HomepageSelection[] = [
  { slug: 'acure-body-wash', galleryIndex: 0, title: 'ACURE', subtitle: 'Body Wash Oil', size: 'large', alt: 'Extreme macro of the metallic ACURE Body Wash Oil bottle covered in water.' },
  { slug: 'trace-magnesium-glycinate', galleryIndex: 0, title: 'TRACE', subtitle: 'Magnesium Glycinate', size: 'large', alt: 'Extreme macro of Trace Magnesium Glycinate lettering, blue label texture and ribbed lid.', hero: { src: '/images/projects/trace-magnesium-glycinate-straight-hero-1920.webp', alt: 'Trace Magnesium Glycinate bottle upright against black.', width: 5504, height: 3072 } },
  { slug: 'eo', galleryIndex: 0, title: 'EO', subtitle: 'French Lavender Shower Gel', size: 'large', alt: 'Extreme macro of the EO shower gel label and water droplets in blue light.' },
  { slug: 'acure-shampoo', galleryIndex: 0, title: 'ACURE', subtitle: 'Daily Workout Shampoo', size: 'large', alt: 'Extreme macro of the ACURE shampoo tube covered in water droplets.' },
  { slug: 'phils', galleryIndex: 0, title: 'PHIL’S', subtitle: 'Daily Facial Cleanser', size: 'large', alt: 'Extreme macro of the Phil’s Daily Facial Cleanser bottle and water droplets.' },
  { slug: 'trace', galleryIndex: 2, title: 'TRACE', subtitle: '40,000 Volts · Electrolytes', size: 'large', alt: 'Extreme macro of Trace 40,000 Volts branding and water droplets on deep blue packaging.' },
  { slug: 'om-lions-mane', galleryIndex: 0, title: 'OM', subtitle: 'Lion’s Mane', size: 'large', alt: 'Extreme macro of the orange OM Lion’s Mane label and white bottle.' },
];

export const selectedWork = homepageSelections.map(selection => {
  const project = projects.find(project => project.slug === selection.slug)!;
  return {
    ...selection,
    project,
    image: { ...project.gallery[selection.galleryIndex], alt: selection.alt } as PortfolioImage,
    alternateImage: selection.hero ?? project.cover,
  };
});
