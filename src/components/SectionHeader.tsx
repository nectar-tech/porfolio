interface SectionHeaderProps {
  label: string;
  title: string;
  titleClassName?: string;
}

export default function SectionHeader({ label, title, titleClassName }: SectionHeaderProps) {
  return (
    <>
      <p className="text-base font-bold tracking-widest uppercase text-brandOrange mb-3">{label}</p>
      <h2 className={titleClassName ?? 'text-[30px] lg:text-[46px] font-extrabold tracking-tight text-mainText mb-5 leading-tight'}>
        {title}
      </h2>
    </>
  );
}
