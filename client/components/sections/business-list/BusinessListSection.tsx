import { IBusiness } from '@destiny/types';
import { useEffect, useState } from 'react';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';
import useBusinesses, { Data } from '../../../hooks/business/useBusinesses';
import { ISelectedFilters } from '../../../pages/search/business';
import BusinessCard from '../../cards/business/BusinessCard';

interface BusinessListSectionProps {
  sortField: string;
  selectedFilters: ISelectedFilters;
  getRefetch: (
    _refetchFn: <TPageData>(
      _options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<QueryObserverResult<Data, Error>>
  ) => void;
}

function BusinessListSection({
  sortField,
  selectedFilters,
  getRefetch,
}: BusinessListSectionProps) {
  const [businessData, setBusinessData] = useState<IBusiness[] | null>(null);
  const businessResult = useBusinesses(sortField, selectedFilters);

  useEffect(() => {
    getRefetch(businessResult.refetch);
  }, [getRefetch, businessResult.refetch]);

  useEffect(() => {
    // only update data on success and if filter button is clicked
    if (businessResult.isSuccess) {
      setBusinessData(businessResult.data?.data);
    }
  }, [businessResult]);

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
