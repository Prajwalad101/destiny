import { IBusiness } from '@destiny/common/types';
import {
  BusinessDescription,
  BusinessImage,
  OpenOrClosed,
} from '@features/business-details/components';
import RatingIcons from 'components/icons/ratings/RatingIcons';
import { FaPhoneAlt } from 'react-icons/fa';

interface BusinessInfoSectionProps {
  business: IBusiness;
}

function BusinessInfoSection({ business }: BusinessInfoSectionProps) {
  return (
    <div className="mt-4 font-rubik">
      <div className="mb-7 flex flex-col gap-5 md:flex-row">
        <BusinessImage images={business.images} />
        <div>
          <h4 className="mb-2 text-[23px] font-medium">{business.name}</h4>
          <div className="mb-5 flex items-center gap-10">
            <RatingIcons rating={business.avgRating} size={20} />
            <span className="inline-block underline text-gray-800">
              {business.rating_count} reviews
            </span>
          </div>
          <span className="inline-block mb-2">{business.location.address}</span>
          <OpenOrClosed
            openingTime={business.businessHours.open}
            closingTime={business.businessHours.close}
            className="mb-5"
          />
          <BusinessDescription
            description={business.description}
            className="mb-7"
          />
          <div className="text-gray-800 flex gap-7 mb-4">
            <span>$$-$$$</span>
            <span>Healthy, Authentic, Vegeterian Friendly</span>
          </div>
          <div className="flex gap-3 items-center text-gray-800">
            <FaPhoneAlt size={17} />
            <span>+977 9083939558</span>
          </div>
        </div>
      </div>
      <div className="mb-5 border-b-2 border-gray-200" />
    </div>
  );
}

export default BusinessInfoSection;
