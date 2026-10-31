import { projects, type PortfolioImage } from './projectData';

type HomepageSelection = {
  slug: string;
  title: string;
  subtitle: string;
  size: string;
  alt: string;
  imageIndex?: number;
  stateLabel?: string;
};

// Homepage order is intentional. Mt. Angel uses the wider messaging macro;
// the other campaigns lead with their extreme macro.
const homepageSelections: HomepageSelection[] = [
  { slug: 'xbox-elite-controller', title: 'XBOX', subtitle: 'Elite Controller', size: 'large', alt: 'Extreme macro of the Xbox Elite controller in black-on-black light.', stateLabel: 'EXTREME MACRO' },
  { slug: 'trace-magnesium-glycinate', title: 'TRACE', subtitle: 'Magnesium Glycinate', size: 'large', alt: 'Extreme macro of Trace Magnesium Glycinate in blue light.', stateLabel: 'EXTREME MACRO' },
  { slug: 'trace-electrolytes', title: 'TRACE', subtitle: '40,000 Volts', size: 'large', alt: 'Extreme macro of wet Trace electrolyte concentrate packaging.', stateLabel: 'EXTREME MACRO' },
  { slug: 'mt-angel-joint-solution', title: 'MT. ANGEL', subtitle: 'Joint Solution', size: 'large', alt: 'Close messaging macro of the upper half of the Mt. Angel Joint Solution bottle.', imageIndex: 2, stateLabel: 'MESSAGING MACRO' },
  { slug: 'phils-daily-facial-cleanser', title: 'PHIL’S', subtitle: 'Daily Facial Cleanser', size: 'large', alt: 'Extreme macro of Phil’s Daily Facial Cleanser covered in water droplets.', stateLabel: 'EXTREME MACRO' },
];

export const selectedWork = homepageSelections.map(selection => {
  const project = projects.find(project => project.slug === selection.slug)!;
  const image = project.gallery[selection.imageIndex ?? 0];
  return {
    ...selection,
    project,
    images: [{ ...image, alt: selection.alt }] as PortfolioImage[],
  };
});
