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
      <span className="line-clamp-3 leading-[26px]">{description}</span>
      <span className="mt-1 inline-block cursor-pointer text-black underline hover:text-gray-700">
        Read More
      </span>
    </div>
  );
}
