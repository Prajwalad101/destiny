import { useRouter } from 'next/router';
import BusinessCard from '../../../components/cards/business/BusinessCard';
import { mockBusinessCardProps } from '../../../components/cards/business/BusinessCard.mocks';
import AppLayout from '../../../components/layout/app/AppLayout';
import NavLayout from '../../../components/layout/navigation/NavLayout';
import SortItems from '../../../components/sort/SortItems';
import { mockSortItemsProps } from '../../../components/sort/SortItems.mocks';
import { NextPageWithLayout } from '../../_app';

const SearchBusiness: NextPageWithLayout = () => {
  const router = useRouter();

  const { name, city } = router.query;

  return (
    <div className="mt-5 flex gap-8 md:mt-10">
      <div className="hidden h-[600px] w-[400px] bg-gray-300 lg:block" />
      <div className="min-w-0 grow">
        <div className="mb-7 flex flex-col justify-between gap-x-3 gap-y-4 sm:mr-10 sm:flex-row sm:items-center md:mb-10">
          {/* Heading */}
          <h2 className="font-merriweather text-2xl font-bold">
            Top <span className="capitalize">{name}</span> in{' '}
            <span className="capitalize">{city}</span>
          </h2>
          {/* Sort Menu */}
          <div className="w-72">
            <SortItems {...mockSortItemsProps.base} />
          </div>
        </div>
        <div>
          <BusinessCard {...mockBusinessCardProps.card1} />
        </div>
      </div>
    </div>
  );
};

export default SearchBusiness;

SearchBusiness.getLayout = (page) => (
  <NavLayout>
    <AppLayout>{page}</AppLayout>
  </NavLayout>
);
