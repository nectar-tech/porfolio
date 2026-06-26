interface SectionHeaderProps {
  label: string;
  title: string;
  titleClassName?: string;
}

export default function SectionHeader({ label, title, titleClassName }: SectionHeaderProps) {
  return (
    <>
      <p className="text-sm font-bold tracking-widest uppercase text-brandOrange mb-3">{label}</p>
      <h2 className={titleClassName ?? 'text-[22px] md:text-[3vw] lg:text-[30px] font-extrabold tracking-tight text-mainText mb-5 leading-tight'}>
        {title}
      </h2>
    </>
  );
}
