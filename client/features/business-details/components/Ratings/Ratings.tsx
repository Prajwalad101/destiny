import RatingIcons from 'components/icons/ratings/RatingIcons';
import React from 'react';
import { classNames } from 'utils/tailwind';

interface RatingsProps {
  avgRating: number;
  numReviews: number;
  className?: string;
}

export default function Ratings({
  avgRating,
  numReviews,
  className = '',
}: RatingsProps) {
  const arr = [5, 4, 3, 2, 1];

  return (
    <div
      className={classNames(
        className,
        'rounded-md border-2 border-gray-200 px-5 py-6'
      )}
    >
      <h4 className="mb-5 text-xl font-medium">Ratings</h4>
      <div className="mb-3 flex items-center gap-10">
        <h4 className="text-3xl font-medium">{avgRating.toFixed(1)}</h4>
        <RatingIcons rating={avgRating} size={20} className="gap-1" />
      </div>
      <p className="mb-10 text-gray-600 underline">from {numReviews} reviews</p>

      <div className="flex flex-col gap-2">
        {arr.map((num) => (
          <React.Fragment key={num}>
            <RatingBar numReviews={340} numStars={num} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function RatingBar({
  numStars,
  numReviews,
}: {
  numStars: number;
  numReviews: number;
}) {
  const dummyRatings: { [key: number]: number } = {
    5: 232,
    4: 30,
    3: 50,
    2: 18,
    1: 10,
  };

  const percentage = (dummyRatings[numStars] / numReviews) * 100;

  return (
    <div className="flex items-center gap-8">
      <div className="flex w-[80%] items-center gap-3">
        <p className="text-gray-600">{numStars}</p>
        <div className="relative h-3 w-full rounded-sm bg-gray-300">
          <div
            className="absolute left-0 top-0 bottom-0 h-full rounded-sm bg-primaryred"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
      <p className="text-gray-800">{percentage.toFixed(0)}%</p>
    </div>
  );
}
