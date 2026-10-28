import { projects, type PortfolioImage } from './projectData';

type HomepageSelection = {
  slug: string;
  title: string;
  subtitle: string;
  size: string;
  alt: string;
};

// Homepage order is intentional. Every campaign displays its extreme macro.
const homepageSelections: HomepageSelection[] = [
  { slug: 'trace-magnesium-glycinate', title: 'TRACE', subtitle: 'Magnesium Glycinate', size: 'large', alt: 'Extreme macro of Trace Magnesium Glycinate in blue light.' },
  { slug: 'trace-electrolytes', title: 'TRACE', subtitle: '40,000 Volts', size: 'large', alt: 'Extreme macro of wet Trace electrolyte concentrate packaging.' },
  { slug: 'mt-angel-joint-solution', title: 'MT. ANGEL', subtitle: 'Joint Solution', size: 'large', alt: 'Extreme macro of the Mt. Angel Vitamins Joint Solution label and amber bottle.' },
  { slug: 'phils-daily-facial-cleanser', title: 'PHIL’S', subtitle: 'Daily Facial Cleanser', size: 'large', alt: 'Extreme macro of Phil’s Daily Facial Cleanser covered in water droplets.' },
];

export const selectedWork = homepageSelections.map(selection => {
  const project = projects.find(project => project.slug === selection.slug)!;
  return {
    ...selection,
    project,
    images: [{ ...project.gallery[0], alt: project.gallery[0].alt || selection.alt }] as PortfolioImage[],
  };
});
