import BusinessCard from '../../cards/business/BusinessCard';
import { mockBusinessCardProps } from '../../cards/business/BusinessCard.mocks';
import AppLayout from '../../layout/app/AppLayout';
import CardsListLayout from '../../layout/cards-list/CardsListLayout';

function RecommendedSection() {
  return (
    <AppLayout>
      <CardsListLayout>
        <BusinessCard {...mockBusinessCardProps.base} />
        <BusinessCard {...mockBusinessCardProps.card1} />
        <BusinessCard {...mockBusinessCardProps.card2} />
        <BusinessCard {...mockBusinessCardProps.card3} />
      </CardsListLayout>
    </AppLayout>
  );
}

export default RecommendedSection;
