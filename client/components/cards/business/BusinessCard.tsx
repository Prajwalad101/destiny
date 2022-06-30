import Image from 'next/image';
import RatingIcons from '../../icons/ratings/RatingIcons';

interface IReviews {
  id: number;
  review: string;
}

export interface IBusinessCard {
  name: string;
  location: string;
  image: string;
  numReviews: number;
  avgRating: number;
  status?: string;
  reviews: IReviews[];
  type?: string[];
  isOpen?: boolean;
}
function BusinessCard(props: IBusinessCard) {
  const typeStr = props.type?.join(', ');

  return (
    <div className="font-rubik md:flex">
      {/* Image */}
      <div className="relative h-[200px] w-full md:w-56">
        <Image
          src={props.image}
          alt={props.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* Body */}
      <div className="grow border-x-2 border-b-2 p-2 md:border-l-0 md:border-t-2 md:p-0">
        <div className="md:pr-2 md:pl-3 md:pt-2">
          <h3 className="mb-2 text-lg font-medium">{props.name}</h3>
          <div className="mb-5 flex items-center gap-3">
            <RatingIcons avgRating={props.avgRating} />
            <p className="text-sm text-secondarytext">
              {props.numReviews} reviews
            </p>
          </div>
          {typeStr && (
            <div className="mb-2 hidden items-center gap-5 text-sm md:flex">
              <p className="capitalize">{typeStr}</p>
              <p className="font-medium">
                {props.isOpen ? 'Open now' : 'Closed'}
              </p>
            </div>
          )}
        </div>
        {/* Horizontal Line */}
        <div className="mb-3 hidden border-[1px] md:block"></div>
        {/* Reviews */}
        <div className=" md:pl-3 md:pr-2 md:pb-2">
          {props.reviews.map((review) => (
            <div key={review.id} className="mb-2 flex items-center gap-3">
              <Image
                src="/images/business/review/ben-parker.jpg"
                alt="profile"
                width={23}
                height={23}
                objectFit="cover"
                className="rounded-full"
              />
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
