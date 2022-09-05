import { IBusiness } from '@destiny/types';
import BusinessCard from 'components/cards/business/BusinessCard';
import ConditionalRender from 'components/conditional-render/ConditionalRender';
import { Data } from 'hooks/business/useBusinesses';
import useIsomorphicLayoutEffect from 'hooks/useIsomorphicLayoutEffect';
import { useRouter } from 'next/router';
import { memo, useState } from 'react';
import { UseQueryResult } from 'react-query';

interface SearchBusinessLayoutProps {
  filterComponent: JSX.Element;
  sortComponent: JSX.Element;
  businessResult: UseQueryResult<Data, Error>;
}

function SearchBusinessLayout({
  filterComponent,
  sortComponent,
  businessResult,
}: SearchBusinessLayoutProps) {
  const router = useRouter();
  const { name, city } = router.query;

  const [businessData, setBusinessData] = useState(businessResult.data?.data);

  // set data after a successful query
  useIsomorphicLayoutEffect(() => {
    if (businessResult.isSuccess) {
      setBusinessData(businessResult.data?.data);
    }
  }, [businessResult]);

  if (businessData === undefined) {
    return null;
  }

  const { isLoading, isError } = businessResult;

  return (
    <div className="mt-5 flex gap-10 md:mt-10">
      {/* SearchFilter */}
      {filterComponent}
      <div className="min-w-0 grow">
        <div className="mb-7 sm:mr-5 md:mb-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            {/* Heading */}
            <h2 className="font-merriweather text-2xl font-bold">
              Top <span className="capitalize">{name}</span> in{' '}
              <span className="capitalize">{city}</span>
            </h2>
            {/* Sort Items */}
            <div className="w-72">{sortComponent}</div>
          </div>
        </div>
        {/* List of business cards */}
        <ConditionalRender isLoading={isLoading} isError={isError}>
          <MemoBusinessList businessData={businessData} />
        </ConditionalRender>
      </div>
    </div>
  );
}

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

const MemoBusinessList = memo(BusinessList);

export default SearchBusinessLayout;
