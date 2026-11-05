import type { PortfolioImage, Project } from './projectData';

export function campaignShowcaseImages(project: Project): PortfolioImage[] {
  const images = project.gallery.filter(image => !/(?:hero-copy|copy-space|copyspace)/i.test(image.src));
  if (project.slug === 'playstation-5') {
    return [images[0], images[3], images[5], images[1], images[4], images[2]];
  }
  if (project.slug === 'hoka-ora-recovery-slides') {
    return [images[0], images[2], images[3], images[1], images[5], images[4], images[6]];
  }
  if (project.slug === 'trace-magnesium-glycinate' || project.slug === 'xbox-elite-controller') {
    const [signature, slight, macro, hero] = images;
    return [signature, slight, hero, macro].filter((image): image is PortfolioImage => Boolean(image));
  }
  if (project.slug === 'harrys-taming-cream') return [images[0], images[2], images[1], images[3], images[4]];
  return images;
}

export function campaignImageRows(images: PortfolioImage[]): PortfolioImage[][] {
  const rows: PortfolioImage[][] = [];
  for (let index = 1; index < images.length; index += 2) rows.push(images.slice(index, index + 2));
  return rows;
}
