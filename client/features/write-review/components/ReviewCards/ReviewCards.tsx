import ReviewCard from '../ReviewCard/ReviewCard';

export default function ReviewCards() {
  const items = Array.from(Array(10).keys());

  return (
    <div className="grid gap-x-8 gap-y-14 grid-cols-3">
      {items.map((_, key) => (
        <ReviewCard key={key} />
      ))}
    </div>
  );
}
