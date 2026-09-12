import { projects } from './projects';

// Homepage art direction is separate from the complete campaign image sets.
export const selectedWork = [
  { slug: 'trace-magnesium-glycinate', galleryIndex: 0, title: 'TRACE', subtitle: 'Magnesium Glycinate', size: 'large', alt: 'Extreme macro of Trace Magnesium Glycinate lettering, blue label texture and ribbed lid.' },
  { slug: 'neuro-focus', galleryIndex: 0, title: 'NEURO', subtitle: 'Energy & Focus Mints', size: 'large', alt: 'Slight macro view of the open cyan Neuro Energy & Focus tin and peppermint mints.' },
  { slug: 'cremo', galleryIndex: 0, title: 'CREMO', subtitle: 'Italian Bergamot Body Wash', size: 'large', alt: 'Close-up of the wet Cremo Italian Bergamot label and amber bottle.' },
  { slug: 'harrys', galleryIndex: 0, title: 'HARRY’S', subtitle: 'Taming Cream', size: 'large', alt: 'Extreme macro of the blue Harry’s Taming Cream packaging and white lettering against black.' },
  { slug: 'sports-research', galleryIndex: 1, title: 'SLEEP COMPLEX', subtitle: 'Sports Research', size: 'large', alt: 'Macro close-up of the Sports Research Sleep Complex label and bottle texture.' },
  { slug: 'trace', galleryIndex: 0, title: 'TRACE', subtitle: '40,000 Volts · Electrolytes', size: 'large', alt: 'Slight macro of Trace 40,000 Volts branding with water droplets on deep blue packaging.' },
  { slug: 'method', galleryIndex: 0, title: 'METHOD', subtitle: 'Bodycare', size: 'large', alt: 'Macro close-up of Method Sea + Surf packaging and pump covered in water droplets.' },
].map(selection => {
  const project = projects.find(project => project.slug === selection.slug)!;
  return { ...selection, project, image: { ...project.gallery[selection.galleryIndex], alt: selection.alt } };
});
