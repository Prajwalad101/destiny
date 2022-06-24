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
    <div className="font-rubik">
      {/* IMAGE COMPONENT */}
      <Image
        src={props.image}
        alt={props.name}
        width={300}
        height={240}
        layout="responsive"
        objectFit="cover"
        className="rounded-t-sm"
      />

      {/* BODY */}
      <div className="rounded-sm border-x-2 border-b-2 px-2 pt-3">
        {/* NAME */}
        <div className="mb-1">
          <p className="text-base font-medium">{props.name}</p>
        </div>
        {props.status ? (
          <div className="mb-3 w-max rounded-sm bg-[#DDE7CA] px-2 py-[2px]">
            <p className="text-sm capitalize text-secondarytext">
              {props.status}
            </p>
          </div>
        ) : null}

        {/* LOCATION */}
        <p className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm text-secondarytext">
          {props.location}
        </p>

        {/* BUSINESS RATING */}
        <div className="mb-2 flex gap-2 ">
          <RatingIcons avgRating={props.avgRating} />
          <span className="text-sm">({props.numReviews})</span>
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
