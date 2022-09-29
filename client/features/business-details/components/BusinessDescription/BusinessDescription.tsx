interface BusinessDescriptionProps {
  description: string;
  className?: string;
}

export default function BusinessDescription({
  description,
  className = '',
}: BusinessDescriptionProps) {
  return (
    <div className={className}>
      <span className="leading-[26px] line-clamp-4">{description}</span>
      <span className="inline-block text-black cursor-pointer mt-1 underline">
        Read More
      </span>
    </div>
  );
}
