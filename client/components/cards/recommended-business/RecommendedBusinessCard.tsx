import RatingIcons from 'components/icons/ratings/RatingIcons';
import Image from 'next/image';

export interface IRecommendBusinessCard {
  name: string;
  location: string;
  image: string;
  total_rating: number;
  rating_count: number;
  status?: string;
}

function RecommendedBusinessCard(props: IRecommendBusinessCard) {
  return (
    <div className="w-[55%] shrink-0 cursor-pointer font-rubik md:w-[30%] lg:md:w-[25%]">
      {/* IMAGE COMPONENT */}
      <Image
        src={props.image}
        alt={props.name}
        width={300}
        height={300}
        layout="responsive"
        objectFit="cover"
        className="rounded-t-sm hover:opacity-90"
      />

      {/* BODY */}
      <div className="rounded-sm px-2 pt-3">
        {/* NAME */}
        <div className="mb-1">
          <p className="text-base font-medium sm:text-lg">{props.name}</p>
        </div>
        {/* {props.status ? (
          <div className="mb-3 w-max rounded-sm bg-[#DDE7CA] px-2 py-[2px]">
            <p className="text-sm capitalize text-secondarytext">
              {props.status}
            </p>
          </div>
        ) : null} */}

        {/* BUSINESS RATING */}
        <div className="mb-2 flex gap-2 ">
          <RatingIcons avgRating={props.total_rating / props.rating_count} />
          <span className="text-sm text-secondarytext">
            ({props.rating_count})
          </span>
        </div>

        {/* LOCATION */}
        <p className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {props.location}
        </p>
      </div>
    </div>
  );
}

export default RecommendedBusinessCard;
