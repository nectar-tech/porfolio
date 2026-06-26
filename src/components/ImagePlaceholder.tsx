interface ImagePlaceholderProps {
  minHeight?: string;
}

export default function ImagePlaceholder({ minHeight = 'min-h-[420px]' }: ImagePlaceholderProps) {
  return (
    <div className={`${minHeight} flex items-center justify-center`}>
      <div className="text-center text-muted opacity-45 py-20 px-10">
        <svg className="block mx-auto mb-3.5" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <p className="text-[15px]">Screen asset coming soon</p>
      </div>
    </div>
  );
}
