import { BusinessCard } from '@features/recommended-business/components';
import { useBusinesses } from '@features/search-business/hooks';
import AppLayout from 'components/layout/app/AppLayout';
import Slider from 'components/slider/Slider';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface IRecommendedSection {
  title: string;
  description: string;
  groupBy: string;
}

function RecommendedSection({
  title,
  description,
  groupBy: _groupBy,
}: IRecommendedSection) {
  const businessResult = useBusinesses();
  const businesses = businessResult.data?.data;

  if (!businesses) {
    return <></>;
  }

  return (
    <AppLayout size="sm">
      <div className="font-rubik">
        <h3 className="mb-2 text-xl font-medium text-gray-800 sm:text-[22px] md:mt-10 md:text-2xl">
          {title}
        </h3>
        <p className="mb-5 text-base text-gray-800 md:block">{description}</p>

        <Slider
          numItems={businesses.length}
          leftButton={<LeftButton />}
          rightButton={<RightButton />}
          className="sm:-mx-2"
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

const RightButton = () => {
  return (
    <button
      type="button"
      className="md:right-[15px] right-[10px] absolute top-[35%] z-10 translate-y-[-50%] rounded-full bg-gray-50 p-2 transition-colors hover:bg-primaryred hover:text-xl hover:text-white shadow-md"
    >
      <AiOutlineRight size={20} />
    </button>
  );
};

const LeftButton = () => {
  return (
    <button
      type="button"
      className="md:left-[15px] left-[10px] absolute top-[35%] z-10 translate-y-[-50%] rounded-full bg-gray-50 p-2 transition-colors hover:bg-primaryred hover:text-xl hover:text-white shadow-md"
    >
      <AiOutlineLeft size={20} />
    </button>
  );
};

export default RecommendedSection;
