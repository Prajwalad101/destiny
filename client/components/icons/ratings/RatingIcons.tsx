import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

interface IRatingIcons {
  avgRating: number;
  iconSize?: number;
}

function RatingIcons({ avgRating, iconSize }: IRatingIcons) {
  // to check for a half star
  const isDecimal = Number.isInteger(avgRating);

  // to calculate the number of full stars
  const fullRating = Math.floor(avgRating);
  const ratingsArr = Array.from(Array(fullRating).keys());

  // to calculate remaining stars
  const totalStars = 5;

  // decrease total stars from each full and half star
  let remaining = totalStars - ratingsArr.length;

  if (isDecimal) {
    remaining--;
  }

  const remainingArr = Array.from(Array(remaining).keys());

  return (
    <div className="flex text-primaryred">
      {ratingsArr.map((num) => (
        <BsStarFill key={num} size={iconSize} />
      ))}
      {isDecimal ? <BsStarHalf /> : null}
      {remainingArr.map((num) => (
        <BsStar key={num} size={iconSize} />
      ))}
    </div>
  );
}

export default RatingIcons;
