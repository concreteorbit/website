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

// Five full-page homepage features; Xbox remains available at its campaign URL.
const homepageSelections: HomepageSelection[] = [
  { slug: 'mt-angel-joint-solution', title: 'MT. ANGEL', subtitle: 'Joint Solution', size: 'feature', alt: 'Close view of the Mt. Angel Vitamins name, bottle neck and Joint Solution label.', imageIndex: 1, stateLabel: 'SLIGHT MACRO' },
  { slug: 'playstation-5', title: 'PLAYSTATION 5', subtitle: 'Console + DualSense Controller', size: 'feature', alt: 'Extreme close view of the PlayStation emblem cut into the textured console panel.', imageIndex: 2, stateLabel: 'CONSOLE LOGO MACRO' },
  { slug: 'trace-magnesium-glycinate', title: 'TRACE', subtitle: 'Magnesium Glycinate', size: 'feature', alt: 'Extreme macro of Trace Magnesium Glycinate in blue light.', stateLabel: 'EXTREME MACRO' },
  { slug: 'harrys-taming-cream', title: 'HARRY’S', subtitle: 'Taming Cream', size: 'feature', alt: 'Extreme macro of Harry’s packaging texture and printed details.', imageIndex: 3, stateLabel: 'EXTREME MACRO' },
  { slug: 'hoka-ora-recovery-slides', title: 'HOKA', subtitle: 'ORA Recovery Slides', size: 'feature', alt: 'Extreme macro of the HOKA logo, vents and textured foam.', imageIndex: 0, stateLabel: 'EXTREME MACRO' },
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
