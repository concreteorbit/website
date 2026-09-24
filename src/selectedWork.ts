import { projects } from './projectData';

// Homepage art direction is separate from the complete campaign image sets.
export const selectedWork = [
  { slug: 'trace-magnesium-glycinate', galleryIndex: 0, title: 'TRACE', subtitle: 'Magnesium Glycinate', size: 'large', alt: 'Extreme macro of Trace Magnesium Glycinate lettering, blue label texture and ribbed lid.' },
  { slug: 'phils', galleryIndex: 3, title: 'PHIL’S', subtitle: 'Daily Facial Cleanser', size: 'large', alt: 'Slight macro of the Phil’s Daily Facial Cleanser bottle and water droplets on the paper packaging.' },
  { slug: 'harrys', galleryIndex: 0, title: 'HARRY’S', subtitle: 'Taming Cream', size: 'large', alt: 'Macro product photograph of Harry’s Taming Cream packaging.' },
  { slug: 'trace', galleryIndex: 1, title: 'TRACE', subtitle: '40,000 Volts · Electrolytes', size: 'large', alt: 'Slight macro of Trace 40,000 Volts branding with water droplets on deep blue packaging.' },
  { slug: 'eo', galleryIndex: 1, title: 'EO', subtitle: 'French Lavender Shower Gel', size: 'large', alt: 'Slight macro of the EO shower gel bottle with water droplets in blue light.' },
  { slug: 'acure-shampoo', galleryIndex: 1, title: 'ACURE', subtitle: 'Daily Workout Shampoo', size: 'large', alt: 'Slight macro of the ACURE Daily Workout Shampoo tube covered in water droplets.' },
  { slug: 'acure-body-wash', galleryIndex: 0, title: 'ACURE', subtitle: 'Body Wash Oil', size: 'large', alt: 'Extreme macro of the wet metallic ACURE Body Wash Oil bottle and vertical lettering.' },
  { slug: 'om-lions-mane', galleryIndex: 0, title: 'OM', subtitle: 'Lion’s Mane', size: 'large', alt: 'Extreme macro of the orange OM Lion’s Mane label and white bottle.' },
].map(selection => {
  const project = projects.find(project => project.slug === selection.slug)!;
  return {
    ...selection,
    project,
    image: { ...project.gallery[selection.galleryIndex], alt: selection.alt },
    alternateImage: project.cover,
  };
});
