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

// Four full-page homepage features; Xbox remains available at its campaign URL.
const homepageSelections: HomepageSelection[] = [
  { slug: 'playstation-5', title: 'PLAYSTATION 5', subtitle: 'Console + DualSense Controller', size: 'feature', alt: 'Close view of the DualSense face buttons and textured shell in controlled charcoal light.', imageIndex: 0, stateLabel: 'BUTTON MACRO' },
  { slug: 'trace-magnesium-glycinate', title: 'TRACE', subtitle: 'Magnesium Glycinate', size: 'feature', alt: 'Extreme macro of Trace Magnesium Glycinate in blue light.', stateLabel: 'EXTREME MACRO' },
  { slug: 'harrys-taming-cream', title: 'HARRY’S', subtitle: 'Taming Cream', size: 'feature', alt: 'Close view of Harry’s Taming Cream and the sealed top of the navy tube.', imageIndex: 0, stateLabel: 'TOP MACRO' },
  { slug: 'hoka-ora-recovery-slides', title: 'HOKA', subtitle: 'ORA Recovery Slides', size: 'feature', alt: 'Overhead macro of the HOKA ORA Recovery Slide upper and sculpted footbed in violet light.', imageIndex: 2, stateLabel: 'TOP MACRO' },
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
