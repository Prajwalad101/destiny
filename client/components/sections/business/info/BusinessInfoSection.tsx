import { IBusiness } from '@destiny/types';
import RatingIcons from 'components/icons/ratings/RatingIcons';
import ImageSlider from 'components/image-slider/ImageSlider';
import Image from 'next/image';
import { useState } from 'react';
import { checkIsOpen } from 'utils/api';
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
    features,
    location,
    description,
  } = business;

  const images = business.images.map((image) => getPublicFilePath(image));

  return (
    <div className="mt-4 font-rubik">
      <div className="mb-7 flex flex-col gap-5 md:flex-row">
        {/* Cover Image */}
        <div className="relative h-[250px] w-full shrink-0 sm:h-[300px] md:w-[300px] lg:w-[450px]">
          <Image alt={name} src={images[0]} layout="fill" objectFit="cover" />
        </div>
        <div>
          {/* Business Name */}
          <h4 className="mb-2 text-xl font-medium">{name}</h4>
          {/* AvgRating, NumReviews, Open/Closed */}
          <BasicInfo
            avgRating={avgRating}
            rating_count={rating_count}
            businessHours={businessHours}
            className="mb-2 flex items-center gap-4"
          />
          {/* Address */}
          <p className="mb-3 text-secondarytext">{location.address}</p>
          <Feature features={features} className="mb-3 flex gap-2" />
          <Description
            description={description}
            className="text-gray-700 md:h-[150px] md:overflow-y-auto"
          />
        </div>
      </div>
      <div className="mb-5 h-[150px] w-full">
        <ImageSlider images={images} className="w-1/2 sm:w-1/4 lg:w-1/6" />
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
  businessHours: { open: string; close: string };
  className?: string;
}
function BasicInfo({
  avgRating,
  rating_count,
  businessHours,
  className = '',
}: BasicInfoProps) {
  return (
    <div className={className}>
      <RatingIcons avgRating={avgRating} />
      <span>{rating_count} reviews</span>
      <span className="font-medium">
        {checkIsOpen(businessHours) ? 'Open Now' : 'Closed'}
      </span>
    </div>
  );
}

interface FeatureProps {
  features: string[];
  className?: string;
}
function Feature({ features, className = '' }: FeatureProps) {
  return (
    <div className={className}>
      {features.map((feature, index) => (
        <div
          key={index}
          className="w-max cursor-pointer rounded-sm bg-gray-200 px-3 py-[2px] hover:bg-gray-300"
        >
          <span className="text-sm capitalize text-secondarytext">
            {feature}
          </span>
        </div>
      ))}
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
