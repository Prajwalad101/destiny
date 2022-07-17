import { IBusiness } from '@destiny/types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
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
  const [businessData, setBusinessData] = useState<IBusiness[] | null>(null);
  const businessResult = useBusinesses(sortField, selectedFilters, isFilter);

  // when fetch settles, change the filter state back to false
  useEffect(() => {
    setIsFilter(false);
  }, [businessResult, setIsFilter]);

  // only update data on success
  useEffect(() => {
    if (businessResult.isSuccess) {
      setBusinessData(businessResult.data?.data);
    }
  }, [businessResult, isFilter]);

  // render according to the fetch status
  if (businessResult.isLoading) {
    return <span>Loading...</span>;
  }

  if (businessResult.isError) {
    if (businessResult.error instanceof Error) {
      return <p>Error: {businessResult.error.message}</p>;
    }
    return <p>Error: {businessResult.error}</p>;
  }

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
