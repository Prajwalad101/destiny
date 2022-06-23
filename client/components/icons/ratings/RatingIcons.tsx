import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

interface IRatingIcons {
  avgRating: number;
}

function RatingIcons({ avgRating }: IRatingIcons) {
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
        <BsStarFill key={num} />
      ))}
      {isDecimal ? <BsStarHalf /> : null}
      {remainingArr.map((num) => (
        <BsStar key={num} />
      ))}
    </div>
  );
}

export default RatingIcons;
