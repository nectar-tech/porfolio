import type { ReactNode } from 'react';
import type { FeatureScreen, FeatureIcon } from '@/data/projects';
import ImagePlaceholder from '@/components/ImagePlaceholder';

const icons: Record<FeatureIcon, ReactNode> = {
  person: (
    <svg className="w-5 h-5 stroke-brandOrange fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  calendar: (
    <svg className="w-5 h-5 stroke-brandOrange fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  layers: (
    <svg className="w-5 h-5 stroke-brandOrange fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  sun: (
    <svg className="w-5 h-5 stroke-brandOrange fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" /><line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" /><line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </svg>
  ),
  play: (
    <svg className="w-5 h-5 stroke-brandOrange fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5 stroke-brandOrange fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  heart: (
    <svg className="w-5 h-5 stroke-brandOrange fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
};

interface FeatureBlockProps {
  screen: FeatureScreen;
}

export default function FeatureBlock({ screen }: FeatureBlockProps) {
  return (
    <div className="mt-12 pt-12 first:border-0 first:mt-0 first:pt-0">
      <div className="flex items-start gap-5 mb-5">
        <div className="w-[52px] h-[52px] rounded-full bg-brandLight/20 flex items-center justify-center shrink-0 mt-0.5">
          {icons[screen.icon]}
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-base font-bold text-brandOrange tracking-[0.08em] mb-1">{screen.number}</span>
          <h3 className="text-[22px] font-extrabold text-mainText tracking-tight mb-1">{screen.title}</h3>
        </div>
      </div>
      <p className="text-lg text-muted leading-[1.75] max-w-[700px] mb-6">{screen.description}</p>
      <div className="rounded-[30px] overflow-hidden bg-cardBg shadow-[0_5px_6px_rgba(0,0,0,0.11)] group">
        {screen.image ? (
          <img
            className="w-full block transition-transform duration-500 group-hover:scale-[1.015]"
            src={screen.image}
            alt={screen.imageAlt}
            loading="lazy"
          />
        ) : (
          <ImagePlaceholder minHeight="min-h-[320px]" />
        )}
      </div>
    </div>
  );
}
