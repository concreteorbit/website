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

// Four homepage campaigns; all six project routes remain available.
const homepageSelections: HomepageSelection[] = [
  { slug: 'hoka-ora-recovery-slides', title: 'HOKA', subtitle: 'ORA Recovery Slides', size: 'large', alt: 'Extreme macro of the HOKA logo and textured ORA Recovery Slide in violet light.', stateLabel: 'EXTREME MACRO' },
  { slug: 'xbox-elite-controller', title: 'XBOX', subtitle: 'Elite Controller', size: 'large', alt: 'Extreme macro of the Xbox Elite controller in black-on-black light.', stateLabel: 'EXTREME MACRO' },
  { slug: 'trace-magnesium-glycinate', title: 'TRACE', subtitle: 'Magnesium Glycinate', size: 'large', alt: 'Extreme macro of Trace Magnesium Glycinate in blue light.', stateLabel: 'EXTREME MACRO' },
  { slug: 'trace-electrolytes', title: 'TRACE', subtitle: '40,000 Volts', size: 'large', alt: 'Macro of the Trace Electrolyte Concentrate label and water droplets in blue light.', stateLabel: 'MESSAGING MACRO', image: {src: '/images/trace-electrolytes-home-macro-5504.webp', srcSet: '/images/trace-electrolytes-home-macro-800.webp 800w, /images/trace-electrolytes-home-macro-1200.webp 1200w, /images/trace-electrolytes-home-macro-1920.webp 1920w, /images/trace-electrolytes-home-macro-2560.webp 2560w, /images/trace-electrolytes-home-macro-5504.webp 5504w', width: 5504, height: 3072, alt: 'Macro of the Trace Electrolyte Concentrate label and water droplets in blue light.'} },
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
