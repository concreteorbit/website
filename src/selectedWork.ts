import { projects, type PortfolioImage } from './projectData';

type HomepageSelection = {
  slug: string;
  title: string;
  subtitle: string;
  size: string;
  alt: string;
  alternateIndex?: number;
  alternateAlt?: string;
};

// Homepage order is intentional. Each project displays its extreme macro.
const homepageSelections: HomepageSelection[] = [
  { slug: 'alice-mushroom-chocolate', title: 'ALICE', subtitle: 'Focus + Sleep', size: 'large', alt: 'Extreme macro of the black Alice Sleep mushroom chocolate tin.', alternateIndex: 0, alternateAlt: 'Extreme macro of the cream Alice Focus mushroom chocolate tin.' },
  { slug: 'mt-angel-joint-solution', title: 'MT. ANGEL', subtitle: 'Joint Solution', size: 'large', alt: 'Extreme macro of the Mt. Angel Vitamins Joint Solution label and amber bottle.' },
  { slug: 'before-toothpaste', title: 'BEFORE', subtitle: 'SuperMint Toothpaste', size: 'large', alt: 'Extreme macro of the Before SuperMint toothpaste tube covered in water droplets.' },
  { slug: 'acure-shampoo', title: 'ACURE', subtitle: 'Daily Workout Shampoo', size: 'large', alt: 'Extreme macro of the ACURE shampoo tube covered in water droplets.' },
  { slug: 'trace-magnesium-glycinate', title: 'TRACE', subtitle: 'Magnesium Glycinate', size: 'large', alt: 'Extreme macro of Trace Magnesium Glycinate lettering, blue label texture and ribbed lid.' },
  { slug: 'eo', title: 'EO', subtitle: 'French Lavender Shower Gel', size: 'large', alt: 'Extreme macro of the EO shower gel label and water droplets in blue light.' },
  { slug: 'om-lions-mane', title: 'OM', subtitle: 'Lion’s Mane', size: 'large', alt: 'Extreme macro of the orange OM Lion’s Mane label and white bottle.' },
  { slug: 'acure-body-wash', title: 'ACURE', subtitle: 'Body Wash Oil', size: 'large', alt: 'Extreme macro of the metallic ACURE Body Wash Oil bottle covered in water.' },
];

export const selectedWork = homepageSelections.map(selection => {
  const project = projects.find(project => project.slug === selection.slug)!;
  const primaryImage = selection.alternateIndex === undefined ? project.gallery[0] : project.gallery[1];
  return {
    ...selection,
    project,
    image: { ...primaryImage, alt: selection.alt } as PortfolioImage,
    alternateImage: selection.alternateIndex === undefined ? undefined : { ...project.gallery[selection.alternateIndex], alt: selection.alternateAlt ?? project.gallery[selection.alternateIndex].alt } as PortfolioImage,
  };
});
