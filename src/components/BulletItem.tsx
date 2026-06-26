interface BulletItemProps {
  title: string;
  body: string;
}

export default function BulletItem({ title, body }: BulletItemProps) {
  return (
    <li className="flex gap-3.5 text-base text-muted leading-[1.7] before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brandOrange before:shrink-0 before:mt-2.5">
      <div>
        <strong className="text-mainText font-semibold">{title}:</strong> {body}
      </div>
    </li>
  );
}
