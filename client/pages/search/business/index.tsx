import { useRouter } from 'next/router';
import BusinessCard from '../../../components/cards/business/BusinessCard';
import { mockBusinessCardProps } from '../../../components/cards/business/BusinessCard.mocks';
import AppLayout from '../../../components/layout/app/AppLayout';
import NavLayout from '../../../components/layout/navigation/NavLayout';
import { NextPageWithLayout } from '../../_app';

const SearchBusiness: NextPageWithLayout = () => {
  const router = useRouter();

  const { desc, city } = router.query;

  return (
    <div className="mt-5 flex gap-8 md:mt-10">
      <div className="hidden h-[600px] w-[400px] bg-gray-300 lg:block" />
      <div className="min-w-0 grow">
        <h2 className="mb-5 font-merriweather text-2xl font-bold md:mb-10">
          Top <span className="capitalize">{desc}s</span> in{' '}
          <span className="capitalize">{city}</span>
        </h2>
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
