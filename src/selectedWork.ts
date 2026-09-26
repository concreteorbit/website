import { projects, type PortfolioImage } from './projectData';

type HomepageSelection = {
  slug: string;
  primaryIndex?: number;
  alternateIndex?: number;
  title: string;
  subtitle: string;
  size: string;
  alt: string;
};

// Homepage order is intentional. Each project begins on its extreme macro
// and changes to its slight macro after 30 seconds.
const homepageSelections: HomepageSelection[] = [
  { slug: 'acure-shampoo', title: 'ACURE', subtitle: 'Daily Workout Shampoo', size: 'large', alt: 'Extreme macro of the ACURE shampoo tube covered in water droplets.' },
  { slug: 'trace-magnesium-glycinate', title: 'TRACE', subtitle: 'Magnesium Glycinate', size: 'large', alt: 'Extreme macro of Trace Magnesium Glycinate lettering, blue label texture and ribbed lid.' },
  { slug: 'eo', title: 'EO', subtitle: 'French Lavender Shower Gel', size: 'large', alt: 'Extreme macro of the EO shower gel label and water droplets in blue light.' },
  { slug: 'om-lions-mane', title: 'OM', subtitle: 'Lion’s Mane', size: 'large', alt: 'Extreme macro of the orange OM Lion’s Mane label and white bottle.' },
  { slug: 'acure-body-wash', title: 'ACURE', subtitle: 'Body Wash Oil', size: 'large', alt: 'Extreme macro of the metallic ACURE Body Wash Oil bottle covered in water.' },
  { slug: 'trace', primaryIndex: 2, alternateIndex: 1, title: 'TRACE', subtitle: '40,000 Volts · Electrolytes', size: 'large', alt: 'Extreme macro of Trace 40,000 Volts branding and water droplets on deep blue packaging.' },
];

export const selectedWork = homepageSelections.map(selection => {
  const project = projects.find(project => project.slug === selection.slug)!;
  return {
    ...selection,
    project,
    image: { ...project.gallery[selection.primaryIndex ?? 0], alt: selection.alt } as PortfolioImage,
    alternateImage: project.gallery[selection.alternateIndex ?? 1],
  };
});
