import Image from 'next/image';
import { truncateText } from '../../../utils/text';
import RatingIcons from '../../icons/ratings/RatingIcons';

export interface IBusinessCard {
  name: string;
  location: string;
  image: string;
  numReviews: number;
  avgRating: number;
  status?: string;
}

function BusinessCard(props: IBusinessCard) {
  const location = truncateText(props.location, 20);

  return (
    <div className="w-max border-2 font-rubik">
      {/* IMAGE COMPONENT */}
      <div className="relative mb-3 h-[148px] w-full">
        <Image
          src={props.image}
          alt={props.name}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* BODY */}
      <div className="mx-2">
        {/* NAME */}
        <div className="mb-[10px] flex items-center gap-3">
          <p className="text-base">{props.name}</p>
          <div className="rounded-sm bg-[#DDE7CA] px-1 py-[2px]">
            <p className="text-[12px] capitalize">{props.status}</p>
          </div>
        </div>

        {/* LOCATION */}
        <p className="mb-1 text-sm text-secondarytext">{location}</p>

        {/* BUSINESS RATING */}
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm">{props.numReviews} reviews</span>
          <RatingIcons avgRating={props.avgRating} />
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
