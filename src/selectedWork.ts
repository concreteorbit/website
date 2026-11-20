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
  { slug: 'mt-angel-joint-solution', title: 'MT. ANGEL', subtitle: 'Joint Solution', size: 'feature', alt: 'Angled macro of the Mt. Angel Joint Solution label, bottle neck and cap.', imageIndex: 2, stateLabel: 'MACRO' },
  { slug: 'playstation-5', title: 'PLAYSTATION 5', subtitle: 'Console + DualSense Controller', size: 'feature', alt: 'Close view of the PlayStation emblem cut into the textured console panel.', imageIndex: 2, stateLabel: 'CONSOLE MACRO' },
  { slug: 'trace-magnesium-glycinate', title: 'TRACE', subtitle: 'Magnesium Glycinate', size: 'feature', alt: 'Extreme macro of Trace Magnesium Glycinate in blue light.', stateLabel: 'EXTREME MACRO' },
  { slug: 'harrys-taming-cream', title: 'HARRY’S', subtitle: 'Taming Cream', size: 'feature', alt: 'Angled slight macro of the Harry’s label and navy Taming Cream tube.', imageIndex: 2, stateLabel: 'SLIGHT MACRO' },
  { slug: 'hoka-ora-recovery-slides', title: 'HOKA', subtitle: 'ORA Recovery Slides', size: 'feature', alt: 'Front hero of the HOKA ORA Recovery Slide in violet light.', imageIndex: 1, stateLabel: 'FRONT HERO' },
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
