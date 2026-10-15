import { projects, type PortfolioImage } from './projectData';

type HomepageSelection = {
  slug: string;
  title: string;
  subtitle: string;
  size: string;
  alt: string;
  imageIndexes?: number[];
};

// Homepage order is intentional. Each project displays its extreme macro.
const homepageSelections: HomepageSelection[] = [
  { slug: 'alice-mushroom-chocolate', title: 'ALICE', subtitle: 'Focus + Sleep', size: 'large', alt: 'Alice Focus and Sleep mushroom chocolate campaign details.', imageIndexes: [0, 3] },
  { slug: 'mt-angel-joint-solution', title: 'MT. ANGEL', subtitle: 'Joint Solution', size: 'large', alt: 'Extreme macro of the Mt. Angel Vitamins Joint Solution label and amber bottle.' },
  { slug: 'before-toothpaste', title: 'BEFORE', subtitle: 'SuperMint Toothpaste', size: 'large', alt: 'Extreme macro of the Before SuperMint toothpaste tube covered in water droplets.' },
  { slug: 'trace-magnesium-glycinate', title: 'TRACE', subtitle: 'Magnesium Glycinate', size: 'large', alt: 'Extreme macro of Trace Magnesium Glycinate lettering, blue label texture and ribbed lid.' },
];

export const selectedWork = homepageSelections.map(selection => {
  const project = projects.find(project => project.slug === selection.slug)!;
  const imageIndexes = selection.imageIndexes ?? [0, 1];
  return {
    ...selection,
    project,
    images: imageIndexes.map(index => ({ ...project.gallery[index], alt: project.gallery[index].alt || selection.alt })) as PortfolioImage[],
  };
});

