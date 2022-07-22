import { IBusiness } from '@destiny/types';
import Image from 'next/image';
import { checkIsOpen } from '../../../utils/api';
import { truncateText } from '../../../utils/text';
import RatingIcons from '../../icons/ratings/RatingIcons';
import ImageScroll from '../../image/scroll/ImageScroll';

interface BusinessInfoProps {
  business: IBusiness;
}

function BusinessInfo({ business }: BusinessInfoProps) {
  return (
    <div className="mt-4 font-rubik">
      <div className="relative mb-4 h-[200px] w-full">
        <Image
          alt={business.name}
          src={business.images[0]}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h4 className="mb-2 text-xl font-medium">{business.name}</h4>
      {/* Rating, Num Reviews */}
      <div className="mb-2 flex items-center gap-4">
        <RatingIcons avgRating={business.avgRating} />
        <span>{business.rating_count} reviews</span>
        <span className="font-medium">
          {checkIsOpen(business.businessHours) ? 'Open Now' : 'Closed'}
        </span>
      </div>
      {/* Address */}
      <p className="mb-3 text-secondarytext">{business.location.address}</p>
      {/* Tags */}
      <div className="mb-3 flex gap-2">
        <div className="w-max cursor-pointer rounded-sm bg-gray-200 px-3 py-[2px] hover:bg-gray-300">
          <span className="text-sm capitalize text-secondarytext">
            {business.tags[0]}
          </span>
        </div>
        <div className="w-max cursor-pointer rounded-sm bg-gray-200 px-3 py-[2px] hover:bg-gray-300">
          <span className="text-sm capitalize text-secondarytext">
            {business.tags[1]}
          </span>
        </div>
      </div>
      {/* Description */}
      {/* <p>{business.description}</p> */}
      <p className="mb-7 text-gray-600">
        {truncateText(
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, nihil dignissimos? Odio vitae dolor quasi eum eos sequi asperiores unde.',
          20
        )}
        <span className="cursor-pointer text-primaryred  hover:text-red-600">
          {' '}
          Read More
        </span>
      </p>
      <ImageScroll images={business.images} />
    </div>
  );
}

export default BusinessInfo;
