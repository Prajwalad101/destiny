import { BusinessCard } from '@features/recommended-business/components';
import { mockBusinessCardProps } from '@features/recommended-business/data';
import { BusinessCardProps } from '@features/recommended-business/types';
import { useBusinesses } from '@features/search-business/hooks';
import AppLayout from 'components/layout/app/AppLayout';
import Slider from 'components/slider/Slider';
import { BiArrowBack } from 'react-icons/bi';
import { ButtonProps } from 'types/props/button/ButtonProps';
import { classNames } from 'utils/tailwind';

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

  const businessResult = useBusinesses();
  const businesses = businessResult.data?.data;

  if (!businesses) {
    return <></>;
  }

  const leftButton = (
    <SliderButton className="left-[10px]">
      <BiArrowBack size={20} />
    </SliderButton>
  );

  const rightButton = (
    <SliderButton className="right-[10px]">
      <BiArrowBack size={20} className="rotate-180" />
    </SliderButton>
  );

  return (
    <AppLayout size="sm">
      <div className="font-rubik md:mb-16">
        <h3 className="mb-2 text-xl font-medium text-gray-800 sm:text-[22px] md:mt-10 md:text-2xl">
          {title}
        </h3>
        <p className="mb-5 text-base text-gray-800 md:block">{description}</p>

        <Slider
          numItems={cards.length}
          className="mb-10"
          leftButton={leftButton}
          rightButton={rightButton}
        >
          {businesses.map((business, index) => (
            <div key={index} className="w-full sm:w-1/2 sm:px-2 lg:w-1/4">
              <BusinessCard business={business} />
            </div>
          ))}
        </Slider>
      </div>
    </AppLayout>
  );
}

function SliderButton({ children, className = '' }: ButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        className,
        'absolute top-[40%] z-10 translate-y-[-50%] rounded-full bg-gray-50 p-2 transition-colors hover:bg-primaryred hover:text-xl hover:text-white'
      )}
    >
      {children}
    </button>
  );
}

export default RecommendedSection;
