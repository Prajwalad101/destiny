import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

interface IRatingIcons {
  totalRating: number;
  ratingCount: number;
}

function RatingIcons({ totalRating, ratingCount }: IRatingIcons) {
  const iconSize = 17;

  // if totalRatings or ratingCount is 0, render empty stars
  const emptyArr = Array.from(Array(5).keys());

  if (totalRating === 0 || ratingCount === 0) {
    return (
      <div className="flex text-primaryred">
        {emptyArr.map((item) => (
          <BsStar size={iconSize} key={item} />
        ))}
      </div>
    );
  }
  const avgRating = totalRating / ratingCount;
  // to check for a half star
  const isDecimal = !Number.isInteger(avgRating);

  // to calculate the number of full stars
  const fullRating = Math.floor(avgRating);
  const ratingsArr = Array.from(Array(fullRating).keys());

  // to calculate remaining stars
  const totalStars = 5;

  // decrease total stars from each star
  let remaining = totalStars - ratingsArr.length;
  if (isDecimal) {
    remaining--;
  }

  let remainingArr: number[] = [];
  if (remaining !== 0) {
    remainingArr = Array.from(Array(remaining).keys());
  }

  return (
    <div className="flex items-center gap-[2px] text-primaryred">
      {ratingsArr.map((num) => (
        <BsStarFill key={num} size={iconSize} />
      ))}
      {isDecimal ? <BsStarHalf size={iconSize} /> : null}
      {remainingArr.map((num) => (
        <BsStar key={num} size={iconSize} />
      ))}
    </div>
  );
}

export default RatingIcons;
