import { IBusiness } from '@destiny/types';
import Image from 'next/image';
import { useState } from 'react';
import { checkIsOpen } from '../../../../utils/api';
import { truncateText } from '../../../../utils/text';
import RatingIcons from '../../../icons/ratings/RatingIcons';
import ImageScroll from '../../../image/scroll/ImageScroll';

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
        <div className="relative h-[250px] w-full shrink-0 sm:h-[300px] md:w-[300px] lg:w-[450px]">
          <Image alt={name} src={images[0]} layout="fill" objectFit="cover" />
        </div>
        <div>
          {/* Business Name */}
          <h4 className="mb-2 text-xl font-medium">{name}</h4>
          {/* AvgRating, NumReviews Open/Closed */}
          <BasicInfo
            avgRating={avgRating}
            rating_count={rating_count}
            businessHours={businessHours}
            className="mb-2 flex items-center gap-4"
          />
          {/* Address */}
          <p className="mb-3 text-secondarytext">{location.address}</p>
          <Tags tags={tags} className="mb-3 flex gap-2" />
          <Description
            description={description}
            className="text-gray-700 md:h-[150px] md:overflow-y-auto"
          />
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
  const [readMore, setReadMore] = useState(false);

  return (
    <div className={className}>
      <span className="leading-[26px]">
        {truncateText(
          ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio laborum molestiae laboriosam illo adipisci asperiores cum nostrum, dolore debitis atque, ad porro est ipsam consectetur delectus fuga, ratione aut inventore natus possimus. Iste dolorem totam cupiditate quisquam repudiandae accusantium dignissimos unde inventore sit, asperiores laboriosam ea voluptatum voluptatibus, culpa dolorum animi in atque iusto, exercitationem rem! Rerum possimus, iste quod tempore facere ipsa. Maiores, quaerat! Veniam recusandae optio voluptate vitae, accusantium ea iure quo eveniet facere. Nemo assumenda accusantium quas doloribus excepturi dolore voluptate modi mollitia? Obcaecati dolorum ea sit quas. Error ex explicabo ipsam aliquid qui sapiente esse cum fugiat enim similique optio tempora, impedit consectetur natus odit nulla inventore, quod asperiores rem blanditiis cumque! Deleniti cupiditate dolores dicta facilis. Perferendis, doloribus, ipsum nemo, omnis cupiditate harum temporibus quae ipsam labore dolor nostrum voluptates distinctio magnam accusantium. Ex numquam aspernatur illo quibusdam atque similique tempora ea reprehenderit, autem, sunt hic laborum? Fugiat animi voluptatibus ullam, voluptate minima, distinctio natus placeat saepe sequi deserunt velit consectetur officia, eaque facere tempora qui vero consequatur repudiandae dolore ipsam est pariatur obcaecati! Maiores quas molestias voluptatem architecto sunt. Sed error consequatur provident atque earum eos autem ducimus adipisci repellat, magni velit iusto minus?',
          40,
          readMore
        )}
      </span>

      <span
        className="cursor-pointer text-primaryred  hover:text-red-600"
        onClick={() => setReadMore(!readMore)}
      >
        {' '}
        {readMore && 'Read Less'}
        {!readMore && 'Read More'}
      </span>
    </div>
  );
}
