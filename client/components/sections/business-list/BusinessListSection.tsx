import { ISortItem } from '../../../data/sortBusiness.data';
import useBusinesses from '../../../hooks/business/useBusinesses';
import BusinessCard from '../../cards/business/BusinessCard';

interface BusinessListSectionProps {
  selectedSort: ISortItem;
  selectedFilters: {
    tags: string[];
    price: string | null;
  };
}

function BusinessListSection({
  selectedSort,
  selectedFilters,
}: BusinessListSectionProps) {
  const businessResult = useBusinesses(selectedSort, selectedFilters);

  if (businessResult.isLoading) {
    return <span>Loading...</span>;
  }

  if (businessResult.isError) {
    if (businessResult.error instanceof Error) {
      return <p>Error: {businessResult.error.message}</p>;
    }
    return <p>Error: {businessResult.error}</p>;
  }

  const businessData = businessResult.data?.data;

  return (
    <div>
      {businessData?.map((business) => (
        <div key={business._id.toString()} className="mb-4">
          <BusinessCard business={business} />
        </div>
      ))}
    </div>
  );
}

export default BusinessListSection;
