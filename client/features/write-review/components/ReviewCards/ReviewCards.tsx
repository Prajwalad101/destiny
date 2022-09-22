import { ReviewCard } from '@features/write-review/components';

export default function ReviewCards() {
  const items = Array.from(Array(10).keys());

  return (
    <div className="grid gap-x-8 gap-y-10 md:gap-y-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((_, key) => (
        <ReviewCard key={key} />
      ))}
    </div>
  );
}
