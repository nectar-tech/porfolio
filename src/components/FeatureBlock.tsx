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
};

interface FeatureBlockProps {
  screen: FeatureScreen;
}

export default function FeatureBlock({ screen }: FeatureBlockProps) {
  return (
    <div className="mt-12 pt-12 border-t border-brandBorder first:border-0 first:mt-0 first:pt-0">
      <div className="flex items-start gap-5 mb-5">
        <div className="w-[52px] h-[52px] rounded-full bg-brandOrange/10 flex items-center justify-center shrink-0 mt-0.5">
          {icons[screen.icon]}
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-bold text-brandOrange tracking-[0.08em] mb-1">{screen.number}</span>
          <h3 className="text-xl font-extrabold text-mainText tracking-tight mb-1">{screen.title}</h3>
        </div>
      </div>
      <p className="text-[15px] text-muted leading-[1.75] max-w-[700px] mb-6">{screen.description}</p>
      <div className="rounded-2xl overflow-hidden border border-brandBorder bg-cardBg group">
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
