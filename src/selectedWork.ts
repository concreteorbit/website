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
  { slug: 'mt-angel-joint-solution', title: 'MT. ANGEL', subtitle: 'Joint Solution', size: 'feature', alt: 'Tilted Mt. Angel Joint Solution bottle with cool highlights against black.', imageIndex: 4, stateLabel: 'TILTED HERO' },
  { slug: 'playstation-5', title: 'PLAYSTATION 5', subtitle: 'Console + DualSense Controller', size: 'feature', alt: 'PlayStation 5 console hero with curved panels revealed against black.', imageIndex: 1, stateLabel: 'CONSOLE HERO' },
  { slug: 'trace-magnesium-glycinate', title: 'TRACE', subtitle: 'Magnesium Glycinate', size: 'feature', alt: 'Trace Magnesium Glycinate hero photograph against black.', imageIndex: 3, stateLabel: 'HERO' },
  { slug: 'harrys-taming-cream', title: 'HARRY’S', subtitle: 'Taming Cream', size: 'feature', alt: 'Tilted hero of Harry’s Taming Cream in dark navy light.', imageIndex: 1, stateLabel: 'TILTED HERO' },
  { slug: 'hoka-ora-recovery-slides', title: 'HOKA', subtitle: 'ORA Recovery Slides', size: 'feature', alt: 'Angled front hero of the HOKA ORA Recovery Slide in violet light.', imageIndex: 1, stateLabel: 'FRONT HERO' },
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
