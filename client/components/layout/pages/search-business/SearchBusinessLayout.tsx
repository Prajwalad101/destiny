import { IBusiness } from '@destiny/types';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import searchFilterData from '../../../../data/searchFilter.data';
import { sortItemData } from '../../../../data/sortBusiness.data';
import useBusinesses from '../../../../hooks/business/useBusinesses';
import { ISelectedFilters } from '../../../../pages/search/business';
import SearchFilter from '../../../search-filter/SearchFilter';
import SortItems from '../../../sort/SortItems';

interface SearchBusinessLayoutProps {
  children: React.ReactNode;
  setBusinessData: Dispatch<SetStateAction<IBusiness[]>>;
}

function SearchBusinessLayout({
  children,
  setBusinessData,
}: SearchBusinessLayoutProps) {
  const router = useRouter();
  const { name, city } = router.query;

  const [isFilter, setIsFilter] = useState(true);
  const [selectedSort, setSelectedSort] = useState(sortItemData[0]);
  const [selectedFilters, setSelectedFilters] = useState<ISelectedFilters>({
    tags: [],
    price: null,
  });

  const sortField = selectedSort.sortField;
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
  }, [businessResult, setBusinessData]);

  return (
    <div className="mt-5 flex gap-10 md:mt-10">
      <SearchFilter
        filterOption={searchFilterData.resturants}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        setIsFilter={setIsFilter}
      />
      <div className="min-w-0 grow">
        <div className="mb-7 sm:mr-5 md:mb-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            {/* Heading */}
            <h2 className="font-merriweather text-2xl font-bold">
              Top <span className="capitalize">{name}</span> in{' '}
              <span className="capitalize">{city}</span>
            </h2>
            {/* Sort Menu */}
            <div className="w-72">
              <SortItems
                sortItemData={sortItemData}
                selectedSort={selectedSort}
                setSelectedSort={setSelectedSort}
                setIsFilter={setIsFilter}
              />
            </div>
          </div>
        </div>
        {/* List of business cards */}
        {children}
      </div>
    </div>
  );
}

export default SearchBusinessLayout;
