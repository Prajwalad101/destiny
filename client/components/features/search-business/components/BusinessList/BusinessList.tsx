import { IBusiness } from '@destiny/types';
import { BusinessCard } from '@features/search-business/components';

function BusinessList({ businessData }: { businessData: IBusiness[] }) {
  return (
    <>
      {businessData.map((business) => (
        <div key={business._id.toString()} className="mb-4">
          <BusinessCard business={business} />
        </div>
      ))}
    </>
  );
}

export default BusinessList;
