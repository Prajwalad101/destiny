import RatingIcons from 'components/icons/ratings/RatingIcons';
import Image from 'next/image';

export interface BusinessCardProps {
  name: string;
  location: string;
  image: string;
  total_rating: number;
  rating_count: number;
  status?: string;
}

function BusinessCard(props: BusinessCardProps) {
  return (
    <div className="cursor-pointer font-rubik">
      <div className="relative h-[200px] sm:h-[250px]">
        <Image
          src={props.image}
          alt={props.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-sm hover:opacity-90"
        />
      </div>

      <div className="rounded-sm px-2 pt-3">
        {/* Business Name */}
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

        {/* Business Rating */}
        <div className="mb-2 flex gap-2 ">
          <RatingIcons avgRating={props.total_rating / props.rating_count} />
          <span className="text-sm text-secondarytext">
            ({props.rating_count})
          </span>
        </div>

        {/* Location */}
        <p className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {props.location}
        </p>
      </div>
    </div>
  );
}

export default BusinessCard;
