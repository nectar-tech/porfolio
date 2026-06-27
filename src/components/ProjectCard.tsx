import { Link } from 'react-router-dom';
import type { CaseStudyProject } from '@/data/projects';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import ChevronIcon from '@/components/ChevronIcon';

interface ProjectCardProps {
  project: CaseStudyProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { id, client, year, headline, tags, heroImage } = project;

  return (
    <Link
      to={`/case-study/${id}`}
      className="group flex flex-col rounded-[30px] overflow-hidden bg-cardBg no-underline shadow-[0_5px_6px_rgba(0,0,0,0.11)] transition-all duration-300"
    >
      <div className="overflow-hidden">
        {heroImage ? (
          <img
            src={heroImage}
            alt={`${client} case study`}
            className="w-full aspect-[16/10] object-cover block transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="aspect-[16/10]">
            <ImagePlaceholder minHeight="h-full" />
          </div>
        )}
      </div>
      <div className="p-7 flex flex-col gap-4 flex-1">
        <p className="text-base font-semibold text-brandOrange tracking-wide">
          {client} <span className="text-muted font-normal">{year}</span>
        </p>
        <p className="text-[20px] font-bold text-mainText leading-snug tracking-tight line-clamp-3">{headline}</p>
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((tag) => (
            <span key={tag} className="inline-flex items-center px-3.5 py-1 rounded-full text-sm font-medium text-muted">
              {tag}
            </span>
          ))}
        </div>
        <span className="self-start inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brandOrange text-cream text-[15px] font-semibold hover:bg-[#784ECC] transition-all duration-200">
          View Case Study
          <ChevronIcon direction="right" size={13} />
        </span>
      </div>
    </Link>
  );
}
