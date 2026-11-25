import type { Project } from './projectData';
import { campaigns } from './Placements';
import './campaign-story.css';

type StoryGroup = { title: string; photos: number[]; uses: string[]; note?: string };

const traceGroups: StoryGroup[] = [
  { title: 'Extreme macro', photos: [0], uses: ['website-banner'] },
  { title: 'Product hero', photos: [3], uses: ['product-page', 'billboard'], note: 'The macro and slight macro also support the product page.' },
  { title: 'Messaging macro', photos: [2], uses: ['email', 'social'] },
  { title: 'Slight macro', photos: [1], uses: ['popup-detail', 'sidebar'] },
];
const seedGroups: StoryGroup[] = [
  { title: 'Bottle + packaging', photos: [1], uses: ['seed-website-banner'] },
  { title: 'Product hero + label detail', photos: [6, 3], uses: ['seed-product-page', 'seed-billboard'], note: 'The box macro also supports the product page.' },
  { title: 'Cropped hero', photos: [0], uses: ['seed-popup', 'seed-sidebar'] },
  { title: 'Packaging macro', photos: [5], uses: ['seed-email'] },
  { title: 'Upper bottle macro', photos: [2], uses: ['seed-social'] },
];

const neuroGroups: StoryGroup[] = [
  { title: 'Tilted hero', photos: [4], uses: ['neuro-banner', 'neuro-billboard'] },
  { title: 'Extreme macro', photos: [1], uses: ['neuro-instagram', 'neuro-email', 'neuro-sidebar'] },
  { title: 'Upright hero', photos: [0], uses: ['neuro-product', 'neuro-popup'] },
];

const mtAngelGroups: StoryGroup[] = [
  { title: 'Product macro', photos: [2], uses: ['mt-angel-banner', 'mt-angel-email'] },
  { title: 'Upright hero', photos: [3], uses: ['mt-angel-product', 'mt-angel-popup'] },
  { title: 'Tilted hero', photos: [4], uses: ['mt-angel-sidebar'] },
  { title: 'Extreme macro', photos: [0], uses: ['mt-angel-instagram'] },
];

const hokaGroups: StoryGroup[] = [
  { title: 'Front macro', photos: [0], uses: ['hoka-banner', 'hoka-email', 'hoka-social'] },
  { title: 'Product hero + details', photos: [1, 2, 3], uses: ['hoka-product', 'hoka-popup', 'hoka-sidebar'], note: 'The product page includes upper, heel and outsole details. Wide and portrait hero crops support the popup and sidebar.' },
];

export default function CampaignStory({ project }: { project: Project }) {
  const isHoka = project.slug === 'hoka-ora-recovery-slides';
  const isMtAngel = project.slug === 'mt-angel-joint-solution';
  const isSeed = project.slug === 'seed-pm02-sleep-restore';
  const isNeuro = project.slug === 'neuro-sleep-recharge';
  const campaign = campaigns.find(item => item.id === (isHoka ? 'hoka' : isMtAngel ? 'mt-angel' : isSeed ? 'seed' : isNeuro ? 'neuro' : 'trace'))!;
  const groups = isHoka ? hokaGroups : isMtAngel ? mtAngelGroups : isSeed ? seedGroups : isNeuro ? neuroGroups : traceGroups;
  return <div className="campaign-story">
    <div className="story-intro"><p>Photography + campaign applications</p><span>Photography and concept designs by Concrete Orbit. Illustrative uses, offers and pricing.</span></div>
    {groups.map((group, groupIndex) => <section className="story-group" key={group.title} aria-labelledby={`story-${groupIndex}`}>
      <div className="story-source"><div className="story-source-inner">
        <div className="story-source-heading"><span>{String(groupIndex + 1).padStart(2, '0')} / PHOTOGRAPHY</span><h2 id={`story-${groupIndex}`}>{group.title}</h2></div>
        {group.photos.map((index, photoIndex) => { const photo = project.gallery[index]; return <figure key={photo.src} className="story-photo"><img src={photo.src} srcSet={photo.srcSet} sizes="(max-width: 800px) 90vw, 28vw" width={photo.width} height={photo.height} alt={photo.alt} loading={groupIndex === 0 && photoIndex === 0 ? 'eager' : 'lazy'} decoding="async"/><figcaption>{photoIndex === 0 ? 'Original photograph' : 'Supporting photograph'}</figcaption></figure>; })}
        {group.note ? <p className="story-source-note">{group.note}</p> : null}
      </div></div>
      <div className="story-uses">{group.uses.map(id => {
        const example = campaign.examples.find(item => item.id === id)!;
        return <article className={`story-use${example.portrait ? ' story-use-portrait' : ''}`} key={id}>
          <div className="story-use-heading"><span>{example.format}</span><h3>{example.title}</h3></div>
          <img src={`/images/placements/${example.file}-${example.width}.webp`} srcSet={`/images/placements/${example.file}-800.webp 800w, /images/placements/${example.file}-${example.width}.webp ${example.width}w`} sizes="(max-width: 800px) 90vw, 64vw" width={example.width} height={example.height} alt={`${campaign.brand} ${example.title.toLowerCase()} concept using the accompanying photography by Concrete Orbit.`} loading={groupIndex === 0 ? 'eager' : 'lazy'} decoding="async"/>
        </article>;
      })}</div>
    </section>)}
  </div>;
}
