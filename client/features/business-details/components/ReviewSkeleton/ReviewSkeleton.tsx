export default function ReviewSkeleton() {
  const cards = [1, 2, 3];

  return (
    <>
      {cards.map((card, i) => (
        <div
          key={i}
          className="animate mb-7 flex h-56 flex-col rounded-lg bg-gray-200/60 p-6"
        >
          <div className="mb-8 flex items-center gap-5">
            <div className="h-12 w-12 rounded-full bg-white" />
            <div className="h-4 w-28 rounded-xl bg-white" />
          </div>
          <div className="mb-5 h-4 w-full rounded-sm bg-white" />
          <div className="mb-5 h-4 w-full rounded-sm bg-white" />
          <div className="h-4 w-full rounded-sm bg-white" />
        </div>
      ))}
    </>
  );
}
