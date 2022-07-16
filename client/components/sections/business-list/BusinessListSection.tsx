import { Dispatch, SetStateAction } from 'react';
import useBusinesses from '../../../hooks/business/useBusinesses';
import { ISelectedFilters } from '../../../pages/search/business';
import BusinessCard from '../../cards/business/BusinessCard';

interface BusinessListSectionProps {
  sortField: string;
  selectedFilters: ISelectedFilters;
  isFilter: boolean;
  setIsFilter: Dispatch<SetStateAction<boolean>>;
}

function BusinessListSection({
  sortField,
  selectedFilters,
  isFilter,
  setIsFilter,
}: BusinessListSectionProps) {
  const businessResult = useBusinesses(
    sortField,
    selectedFilters,
    isFilter,
    setIsFilter
  );

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
