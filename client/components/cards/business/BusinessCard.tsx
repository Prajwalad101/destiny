import Image from 'next/image';
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
  return (
    <div className="w-1/2 font-rubik">
      {/* IMAGE COMPONENT */}
      <div className="relative h-[148px] w-full">
        <Image
          src={props.image}
          alt={props.name}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* BODY */}
      <div className="border-x-2 border-b-2 px-2 pt-3">
        {/* NAME */}
        <div className="mb-[10px] flex items-center gap-3">
          <p className="text-base">{props.name}</p>
          <div className="rounded-sm bg-[#DDE7CA] px-1 py-[2px]">
            <p className="text-[12px] capitalize">{props.status}</p>
          </div>
        </div>

        {/* LOCATION */}
        <p className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm text-secondarytext">
          {props.location}
        </p>

        {/* BUSINESS RATING */}
        <div className="mb-2 flex gap-2 text-secondarytext">
          <RatingIcons avgRating={props.avgRating} />
          <span className="text-sm">({props.numReviews})</span>
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
