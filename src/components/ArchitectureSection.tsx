import SectionHeader from '@/components/SectionHeader';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import type { CaseStudyProject } from '@/data/projects';

interface ArchitectureSectionProps {
  data: CaseStudyProject['architecture'];
}

export default function ArchitectureSection({ data }: ArchitectureSectionProps) {
  return (
    <div>
      <SectionHeader label={data.label} title={data.title} />
      <div className="rounded-[30px] overflow-hidden bg-cardBg mt-5 shadow-[0_5px_6px_rgba(0,0,0,0.11)]">
        {data.image ? (
          <img
            src={data.image}
            alt={data.imageAlt ?? 'Site architecture diagram'}
            className="w-full block"
            loading="lazy"
          />
        ) : (
          <ImagePlaceholder minHeight="min-h-[320px]" />
        )}
      </div>
    </div>
  );
}
