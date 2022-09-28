import { IBusiness } from '@destiny/common/types';
import { OpenOrClosed } from '@features/business-details/components';
import RatingIcons from 'components/icons/ratings/RatingIcons';
import Slider from 'components/slider/Slider';
import Image from 'next/image';
import { BsArrowUp, BsLaptop } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md';
import { getPublicFilePath } from 'utils/text';

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
          <div className="mb-5 flex items-center gap-10">
            <RatingIcons rating={avgRating} size={20} />
            <span className="inline-block underline text-gray-800">
              {rating_count} reviews
            </span>
          </div>
          {/* Address */}
          <span className="inline-block mb-3">{location.address}</span>
          <OpenOrClosed
            openingTime={businessHours.open}
            closingTime={businessHours.close}
            className="mb-5"
          />
          <Description description={description} className="mb-7" />

          <div className="text-gray-800 flex gap-7 mb-3">
            <span>$$-$$$</span>
            <span>Healthy, Authentic, Vegeterian Friendly</span>
          </div>

          <div className="flex gap-3 items-center mb-3 text-gray-800">
            <FaPhoneAlt size={17} />
            <span>+977 9083939558</span>
          </div>
          <div className="hover:underline cursor-pointer relative flex gap-3 items-center max-w-max text-gray-800">
            <BsLaptop size={19} />
            <div className="flex items-center gap-1 ">
              <span>Website</span>
              <BsArrowUp size={15} />
            </div>
          </div>
        </div>
      </div>
      {/* Horizontal Line */}
      <div className="mb-5 border-b-2 border-gray-200" />
    </div>
  );
}

export default BusinessInfoSection;

interface DescriptionProps {
  description: string;
  className?: string;
}

function Description({ description, className = '' }: DescriptionProps) {
  return (
    <div className={className}>
      <span className="leading-[26px] line-clamp-3">{description}</span>
      <span className="inline-block text-black cursor-pointer mt-1 underline">
        Read More
      </span>
    </div>
  );
}
