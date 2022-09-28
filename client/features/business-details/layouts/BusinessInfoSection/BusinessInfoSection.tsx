import { IBusiness } from '@destiny/common/types';
import { OpenOrClosed } from '@features/business-details/components';
import RatingIcons from 'components/icons/ratings/RatingIcons';
import Slider from 'components/slider/Slider';
import Image from 'next/image';
import { useState } from 'react';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md';
import { getPublicFilePath, truncateText } from 'utils/text';

interface BusinessInfoSectionProps {
  business: IBusiness;
}

function BusinessInfoSection({ business }: BusinessInfoSectionProps) {
  // Destructuring business properties
  const {
    name,
    avgRating,
    rating_count,
    businessHours,
    location,
    description,
  } = business;

  const images = business.images.map((image) => getPublicFilePath(image));

  return (
    <div className="mt-4 font-rubik">
      <div className="mb-7 flex flex-col gap-5 md:flex-row">
        <div className="relative group">
          <Slider
            numItems={images.length}
            className="shrink-0 w-full md:w-[400px] h-[300px] md:h-[400px] lg:w-[535px]"
          >
            {images.map((image, key) => (
              <div key={key} className="relative w-full h-full">
                <Image
                  src={image}
                  alt="business images"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </Slider>
          <div className="group-hover:opacity-100 transition-opacity flex opacity-0 absolute bottom-3 left-5 gap-3 items-end text-gray-100 hover:underline cursor-pointer">
            <MdOutlinePhotoSizeSelectActual size={25} />
            <span className="inline-block">
              View all {images.length} photos
            </span>
          </div>
        </div>
        <div>
          {/* Business Name */}
          <h4 className="mb-2 text-[23px] font-medium">{name}</h4>
          {/* AvgRating, NumReviews, Open/Closed */}
          <BasicInfo
            avgRating={avgRating}
            rating_count={rating_count}
            className="mb-5 flex items-center gap-10"
          />
          {/* Address */}
          <span className="inline-block mb-3">{location.address}</span>
          {/* <span className="inline-block">
            {checkInterval(businessHours.open, businessHours.close)
              ? 'Open right now'
              : 'Closed'}
          </span> */}
          <OpenOrClosed
            openingTime={businessHours.open}
            closingTime={businessHours.close}
          />
          <Description
            description={description}
            className="text-gray-700 md:overflow-y-auto"
          />
        </div>
      </div>
      {/* Horizontal Line */}
      <div className="mb-5 border-b-2 border-gray-200" />
    </div>
  );
}

export default BusinessInfoSection;

interface BasicInfoProps {
  avgRating: number;
  rating_count: number;
  className?: string;
}

function BasicInfo({
  avgRating,
  rating_count,
  className = '',
}: BasicInfoProps) {
  return (
    <div className={className}>
      <RatingIcons rating={avgRating} size={20} />
      <span className="inline-block underline text-gray-800">
        {rating_count} reviews
      </span>
      {/* <span className="font-medium">
        {checkInterval(businessHours.open, businessHours.close)
          ? 'Open Now'
          : 'Closed'}
      </span> */}
    </div>
  );
}

interface DescriptionProps {
  description: string;
  className?: string;
}
function Description({ description, className = '' }: DescriptionProps) {
  // state of the readMore button
  const [readMore, setReadMore] = useState(false);
  const wordLimit = 40;
  let text;

  // if readMore button is clicked or description is less than limit, return original text
  if (readMore || description.length < wordLimit) {
    text = description;
  } else {
    text = truncateText(description, wordLimit);
  }

  return (
    <div className={className}>
      <span className="leading-[26px]">{text}</span>
      {description.length > wordLimit && (
        <button
          className="cursor-pointer text-primaryred  hover:text-red-600"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
}
