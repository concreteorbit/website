import { projects, type PortfolioImage } from './projectData';

type HomepageSelection = {
  slug: string;
  title: string;
  subtitle: string;
  size: string;
  alt: string;
  imageIndex?: number;
  image?: PortfolioImage;
  stateLabel?: string;
};

// Four featured campaigns; all project routes remain available.
const homepageSelections: HomepageSelection[] = [
  { slug: 'harrys-taming-cream', title: 'HARRY’S', subtitle: 'Taming Cream', size: 'large', alt: 'Close view of Harry’s Taming Cream and the sealed top of the navy tube.', imageIndex: 0, stateLabel: 'TOP MACRO' },
  { slug: 'hoka-ora-recovery-slides', title: 'HOKA', subtitle: 'ORA Recovery Slides', size: 'large', alt: 'Extreme macro of the HOKA logo and textured ORA Recovery Slide in violet light.', stateLabel: 'EXTREME MACRO' },
  { slug: 'xbox-elite-controller', title: 'XBOX', subtitle: 'Elite Controller', size: 'large', alt: 'Extreme macro of the Xbox Elite controller in black-on-black light.', stateLabel: 'EXTREME MACRO' },
  { slug: 'trace-magnesium-glycinate', title: 'TRACE', subtitle: 'Magnesium Glycinate', size: 'large', alt: 'Extreme macro of Trace Magnesium Glycinate in blue light.', stateLabel: 'EXTREME MACRO' },
];

export const selectedWork = homepageSelections.map(selection => {
  const project = projects.find(project => project.slug === selection.slug)!;
  const image = selection.image ?? project.gallery[selection.imageIndex ?? 0];
  return {
    ...selection,
    project,
    images: [{ ...image, alt: selection.alt }] as PortfolioImage[],
  };
});
