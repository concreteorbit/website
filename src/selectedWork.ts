import { projects } from './projectData';

// Homepage art direction is separate from the complete campaign image sets.
export const selectedWork = [
  { slug: 'trace-magnesium-glycinate', galleryIndex: 0, title: 'TRACE', subtitle: 'Magnesium Glycinate', size: 'large', alt: 'Extreme macro of Trace Magnesium Glycinate lettering, blue label texture and ribbed lid.' },
  { slug: 'phils', galleryIndex: 3, title: 'PHIL’S', subtitle: 'Daily Facial Cleanser', size: 'large', alt: 'Slight macro of the Phil’s Daily Facial Cleanser bottle and water droplets on the paper packaging.' },
  { slug: 'harrys', galleryIndex: 0, title: 'HARRY’S', subtitle: 'Taming Cream', size: 'large', alt: 'Macro product photograph of Harry’s Taming Cream packaging.' },
  { slug: 'trace', galleryIndex: 1, title: 'TRACE', subtitle: '40,000 Volts · Electrolytes', size: 'large', alt: 'Slight macro of Trace 40,000 Volts branding with water droplets on deep blue packaging.' },
].map(selection => {
  const project = projects.find(project => project.slug === selection.slug)!;
  return {
    ...selection,
    project,
    image: { ...project.gallery[selection.galleryIndex], alt: selection.alt },
    alternateImage: project.cover,
  };
});
