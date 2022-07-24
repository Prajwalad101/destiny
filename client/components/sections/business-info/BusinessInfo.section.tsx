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
  // Destructuring business properties
  const {
    name,
    images,
    avgRating,
    rating_count,
    businessHours,
    tags,
    location,
    description,
  } = business;

  return (
    <div className="mt-4 font-rubik">
      <div className="mb-7 flex flex-col gap-5 md:flex-row">
        {/* Cover Image */}
        <div className="relative h-[250px] w-full sm:h-[300px] md:max-w-[500px]">
          <Image alt={name} src={images[0]} layout="fill" objectFit="cover" />
        </div>
        <div>
          {/* Business Name */}
          <h4 className="mb-2 text-xl font-medium">{name}</h4>
          {/* avg rating, num reviews, open/closed */}
          <BasicInfo
            avgRating={avgRating}
            rating_count={rating_count}
            businessHours={businessHours}
            className="mb-2 flex items-center gap-4"
          />
          {/* Address */}
          <p className="mb-3 text-secondarytext">{location.address}</p>
          <Tags tags={tags} className="mb-3 flex gap-2" />
          <Description description={description} />
        </div>
      </div>

      <ImageScroll noItems={images.length} initialItems={2} className="mb-8">
        {images.map((image, index) => (
          <div key={index} className="slider-img relative h-[150px] shrink-0">
            <Image
              src={image}
              key={index}
              alt="image"
              layout="fill"
              className="slider-next-img"
              objectFit="cover"
            />
          </div>
        ))}
      </ImageScroll>
      {/* Horizontal Line */}
      <div className="mb-5 border-b-2 border-gray-200" />
    </div>
  );
}

export default BusinessInfo;

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

interface TagsProps {
  tags: string[];
  className?: string;
}
function Tags({ tags, className = '' }: TagsProps) {
  return (
    <div className={className}>
      <div className="w-max cursor-pointer rounded-sm bg-gray-200 px-3 py-[2px] hover:bg-gray-300">
        <span className="text-sm capitalize text-secondarytext">{tags[0]}</span>
      </div>
      <div className="w-max cursor-pointer rounded-sm bg-gray-200 px-3 py-[2px] hover:bg-gray-300">
        <span className="text-sm capitalize text-secondarytext">{tags[1]}</span>
      </div>
    </div>
  );
}

interface DescriptionProps {
  description: string;
  className?: string;
}
function Description({
  description: _description,
  className = '',
}: DescriptionProps) {
  return (
    <div className={className}>
      {truncateText(
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, nihil dignissimos? Odio vitae dolor quasi eum eos sequi asperiores unde.',
        20
      )}
      <span className="cursor-pointer text-primaryred  hover:text-red-600">
        {' '}
        Read More
      </span>
    </div>
  );
}
