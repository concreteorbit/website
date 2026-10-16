export type PortfolioImage = { src: string; alt: string; width: number; height: number; srcSet?: string };
export type ProjectImagePair = { label: string; focus: PortfolioImage; sleep: PortfolioImage };
export type Project = {
  slug: string;
  name: string;
  brand: string;
  services: string[];
  deliverables: string;
  cover: PortfolioImage;
  gallery: PortfolioImage[];
  pairedGallery?: ProjectImagePair[];
  tone: string;
};

export const projects: Project[] = [
  {
    slug: 'alice-mushroom-chocolate', name: 'ALICE', brand: 'Focus + Sleep', tone: 'slate',
    services: ['Creative Direction', 'Photography', 'Compositing', 'Image Finishing'],
    deliverables: 'Two product variants · Two heroes · Two copy-space heroes · Two slight macros · Two extreme macros',
    cover: { src: '/images/projects/alice-focus-hero-1920.webp', srcSet: '/images/projects/alice-focus-hero-1200.webp 1200w, /images/projects/alice-focus-hero-1920.webp 1376w', alt: 'Cream Alice Focus mushroom chocolate tin shown straight against black.', width: 1376, height: 768 },
    gallery: [
      { src: '/images/projects/alice-focus-extreme-macro-1920.webp', srcSet: '/images/projects/alice-focus-extreme-macro-1200.webp 1200w, /images/projects/alice-focus-extreme-macro-1920.webp 1376w', alt: 'Extreme macro of the cream Alice Focus mushroom chocolate tin.', width: 1376, height: 768 },
      { src: '/images/projects/alice-sleep-extreme-macro-1920.webp', srcSet: '/images/projects/alice-sleep-extreme-macro-1200.webp 1200w, /images/projects/alice-sleep-extreme-macro-1920.webp 1376w', alt: 'Extreme macro of the black Alice Sleep mushroom chocolate tin.', width: 1376, height: 768 },
      { src: '/images/projects/alice-focus-slight-macro-1920.webp', srcSet: '/images/projects/alice-focus-slight-macro-1200.webp 1071w', alt: 'Slight macro of the cream Alice Focus mushroom chocolate tin.', width: 1071, height: 481 },
      { src: '/images/projects/alice-sleep-slight-macro-1920.webp', srcSet: '/images/projects/alice-sleep-slight-macro-1200.webp 1200w, /images/projects/alice-sleep-slight-macro-1920.webp 1920w', alt: 'Slight macro of the black Alice Sleep mushroom chocolate tin.', width: 1920, height: 850 },
      { src: '/images/projects/alice-focus-hero-1920.webp', srcSet: '/images/projects/alice-focus-hero-1200.webp 1200w, /images/projects/alice-focus-hero-1920.webp 1376w', alt: 'Cream Alice Focus mushroom chocolate tin shown straight against black.', width: 1376, height: 768 },
      { src: '/images/projects/alice-sleep-hero-1920.webp', srcSet: '/images/projects/alice-sleep-hero-1200.webp 1200w, /images/projects/alice-sleep-hero-1920.webp 1920w', alt: 'Black Alice Sleep mushroom chocolate tin shown straight against black.', width: 1920, height: 1072 },
      { src: '/images/projects/alice-focus-hero-copy-space-1920.webp', srcSet: '/images/projects/alice-focus-hero-copy-space-1200.webp 1200w, /images/projects/alice-focus-hero-copy-space-1920.webp 1324w', alt: 'Cream Alice Focus mushroom chocolate tin beside black copy space.', width: 1324, height: 768 },
      { src: '/images/projects/alice-sleep-hero-copy-space-1920.webp', srcSet: '/images/projects/alice-sleep-hero-copy-space-1200.webp 1200w, /images/projects/alice-sleep-hero-copy-space-1920.webp 1920w', alt: 'Black Alice Sleep mushroom chocolate tin beside black copy space.', width: 1920, height: 1072 },
      { src: '/images/projects/alice-focus-slight-macro-copy-space-1920.webp', srcSet: '/images/projects/alice-focus-slight-macro-copy-space-1200.webp 1071w', alt: 'Slight macro of the cream Alice Focus tin with black copy space.', width: 1071, height: 481 },
      { src: '/images/projects/alice-sleep-slight-macro-copy-space-1920.webp', srcSet: '/images/projects/alice-sleep-slight-macro-copy-space-1200.webp 1200w, /images/projects/alice-sleep-slight-macro-copy-space-1920.webp 1920w', alt: 'Slight macro of the black Alice Sleep tin with black copy space.', width: 1920, height: 790 },
    ],
    pairedGallery: [],
  },
  {
    slug: 'mt-angel-joint-solution', name: 'JOINT SOLUTION', brand: 'Mt. Angel Vitamins', tone: 'slate',
    services: ['Creative Direction', 'Photography', 'Compositing', 'Image Finishing'],
    deliverables: 'Straight hero · Angled hero · Dramatic angle · Slight macro · Extreme macro · Three copy-space compositions',
    cover: { src: '/images/projects/mt-angel-hero-1920.webp', alt: 'Mt. Angel Vitamins Joint Solution bottle upright against black in cool blue light.', width: 1920, height: 1217 },
    gallery: [
      { src: '/images/projects/mt-angel-extreme-macro-1920.webp', alt: 'Extreme close-up of the Mt. Angel Vitamins Joint Solution label, amber bottle and ribbed cap.', width: 1920, height: 1072 },
      { src: '/images/projects/mt-angel-slight-macro-1920.webp', alt: 'Close view of the Mt. Angel Vitamins Joint Solution bottle in cool blue light.', width: 1920, height: 1263 },
      { src: '/images/projects/mt-angel-tilt-hero-1920.webp', alt: 'Mt. Angel Vitamins Joint Solution bottle floating at an angle against black.', width: 1920, height: 1071 },
      { src: '/images/projects/mt-angel-dramatic-tilt-hero-1920.webp', alt: 'Dramatic cinematic angle of the Mt. Angel Vitamins Joint Solution bottle against black.', width: 1920, height: 1072 },
      { src: '/images/projects/mt-angel-hero-copy-space-2560.webp', alt: 'Mt. Angel Vitamins Joint Solution bottle upright beside generous black copy space.', width: 2560, height: 1662 },
      { src: '/images/projects/mt-angel-slight-macro-copy-space-2560.webp', alt: 'Close view of the Mt. Angel Vitamins Joint Solution bottle beside black copy space.', width: 2560, height: 1684 },
      { src: '/images/projects/mt-angel-tilt-hero-copy-space-2560.webp', alt: 'Mt. Angel Vitamins Joint Solution bottle angled beside deep black copy space.', width: 2560, height: 1429 },
    ],
  },
  {
    slug: 'before-toothpaste', name: 'BEFORE', brand: 'Before', tone: 'slate',
    services: ['Creative Direction', 'Photography', 'Compositing', 'Image Finishing'],
    deliverables: 'Straight hero · Angled hero · Slight macro · Extreme macro · Two copy-space compositions',
    cover: { src: '/images/projects/before-hero-1920.webp', alt: 'Before SuperMint toothpaste upright against black in cool blue light and covered in water droplets.', width: 1920, height: 1072 },
    gallery: [
      { src: '/images/projects/before-extreme-macro-1920.webp', alt: 'Extreme close-up of the Before SuperMint toothpaste tube, lettering and water droplets.', width: 1920, height: 911 },
      { src: '/images/projects/before-slight-macro-1920.webp', alt: 'Close view of the Before SuperMint toothpaste tube in cool blue light.', width: 1920, height: 1072 },
      { src: '/images/projects/before-tilt-hero-1920.webp', alt: 'Before SuperMint toothpaste floating at an angle against black.', width: 1920, height: 1072 },
      { src: '/images/projects/before-slight-macro-copy-space-1920.webp', alt: 'Before SuperMint toothpaste beside generous black copy space.', width: 1920, height: 1072 },
      { src: '/images/projects/before-tilt-hero-copy-space-2560.webp', alt: 'Before SuperMint toothpaste angled beside deep black copy space.', width: 2560, height: 1309 },
    ],
  },
  {
    slug: 'phils', name: 'PHIL’S', brand: 'Phil’s', tone: 'slate',
    services: ['Creative Direction', 'Art Direction', 'Photography', 'Image Finishing'],
    deliverables: 'Straight hero · Angled hero · Slight macro · Extreme macro · Copy-space hero',
    cover: { src: '/images/projects/phils-hero-2000.jpg', alt: 'Phil’s Daily Facial Cleanser upright against black and covered in water droplets.', width: 2000, height: 1116 },
    gallery: [
      { src: '/images/projects/phils-extreme-macro-2000.jpg', alt: 'Extreme close-up of the Phil’s Daily Facial Cleanser label and water droplets across the bottle.', width: 2000, height: 1116 },
      { src: '/images/projects/phils-copyspace-2000.jpg', alt: 'Phil’s Daily Facial Cleanser upright with black copy space.', width: 2000, height: 1136 },
      { src: '/images/projects/phils-tilt-2000.jpg', alt: 'Phil’s Daily Facial Cleanser angled against black and covered in water droplets.', width: 2000, height: 1116 },
      { src: '/images/projects/phils-slight-macro-2000.jpg', alt: 'Close-up of the Phil’s Daily Facial Cleanser bottle, ribbed cap and water droplets.', width: 2000, height: 1116 },
    ],
  },
  {
    slug: 'trace', name: 'TRACE', brand: 'Trace', tone: 'slate',
    services: ['Creative Direction', 'Art Direction', 'Photography', 'Compositing'],
    deliverables: 'Hero · Copy-space hero · Two detail views',
    cover: { src: '/images/projects/trace-1-2000.webp', alt: 'Trace 40,000 Volts electrolyte concentrate covered in water droplets.', width: 5504, height: 3072 },
    gallery: [
      { src: '/images/projects/trace-copy-space-2000.jpg', alt: 'Trace 40,000 Volts electrolyte concentrate with generous black copy space.', width: 2000, height: 1211 },
      { src: '/images/projects/trace-2-2000.webp', alt: 'Close-up of the Trace electrolyte bottle.', width: 5504, height: 3072 },
      { src: '/images/projects/trace-3-2000.webp', alt: 'Trace electrolyte concentrate campaign detail.', width: 5504, height: 3072 },
    ],
  },
];

const alice = projects.find(project => project.slug === 'alice-mushroom-chocolate');
if (alice) {
  alice.pairedGallery = [
    { label: 'Straight hero', focus: alice.gallery[4], sleep: alice.gallery[5] },
    { label: 'Hero + copy space', focus: alice.gallery[6], sleep: alice.gallery[7] },
    { label: 'Slight macro', focus: alice.gallery[2], sleep: alice.gallery[3] },
    { label: 'Slight macro + copy space', focus: alice.gallery[8], sleep: alice.gallery[9] },
    { label: 'Extreme macro', focus: alice.gallery[0], sleep: alice.gallery[1] },
  ];
}

export const capabilities = ['Creative Direction', 'Art Direction', 'Photography', 'Compositing', 'Image Finishing', 'Campaign Development'];

