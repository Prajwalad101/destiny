import BusinessCard from '../components/cards/business/BusinessCard';
import { mockBusinessCardProps } from '../components/cards/business/BusinessCard.mocks';
import AppLayout from '../components/layout/app/AppLayout';
import CardsListLayout from '../components/layout/cards-list/CardsListLayout';
import HeroLayout from '../components/layout/hero/HeroLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <HeroLayout />
      {/* BUSINESSES CARD LIST */}
      <AppLayout>
        <CardsListLayout>
          <BusinessCard {...mockBusinessCardProps.base} />
          <BusinessCard {...mockBusinessCardProps.card1} />
          <BusinessCard {...mockBusinessCardProps.card2} />
          <BusinessCard {...mockBusinessCardProps.card3} />
        </CardsListLayout>
      </AppLayout>
    </div>
  );
};

export default Home;
