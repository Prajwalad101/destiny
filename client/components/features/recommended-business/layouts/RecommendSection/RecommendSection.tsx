import { BusinessCard } from '@features/recommended-business/components';
import { mockBusinessCardProps } from '@features/recommended-business/data';
import { BusinessCardProps } from '@features/recommended-business/types';
import AppLayout from 'components/layout/app/AppLayout';
import Slider from 'components/slider/Slider';

interface IRecommendedSection {
  title: string;
  description?: string;
  groupBy: string;
}

function RecommendedSection({
  title,
  description,
  groupBy: _groupBy,
}: IRecommendedSection) {
  const cards: BusinessCardProps[] = [
    mockBusinessCardProps.card1,
    mockBusinessCardProps.card2,
    mockBusinessCardProps.card3,
    mockBusinessCardProps.card3,
    mockBusinessCardProps.card3,
    mockBusinessCardProps.card3,
  ];

  return (
    <AppLayout size="sm">
      <div className="md:mb-16">
        <div className="mb-5 font-rubik">
          <h3 className="mb-2 text-xl font-medium text-gray-800 sm:text-[22px] md:mt-10 md:text-2xl">
            {title}
          </h3>
          <p className="text-base text-gray-800 md:block">{description}</p>
        </div>
        <Slider numItems={cards.length} className="mb-10">
          {cards.map((card, index) => (
            <div key={index} className="w-1/4 px-2">
              <BusinessCard {...card} />
            </div>
          ))}
        </Slider>
      </div>
    </AppLayout>
  );
}

export default RecommendedSection;
