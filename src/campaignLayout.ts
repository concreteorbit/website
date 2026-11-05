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

export function campaignHasMediumPair(project: Project): boolean {
  return project.slug === 'playstation-5' || project.slug === 'hoka-ora-recovery-slides';
}

export function campaignImageGroups(images: PortfolioImage[]) {
  const remaining = images.slice(1);
  const groups: { medium: PortfolioImage; details: PortfolioImage[]; startIndex: number }[] = [];
  let startIndex = 2;
  while (remaining.length) {
    // An extra detail stays beside its hero instead of creating an orphan row.
    const group = remaining.splice(0, remaining.length === 4 ? 4 : 3);
    groups.push({ medium: group[0], details: group.slice(1), startIndex });
    startIndex += group.length;
  }
  return groups;
}
