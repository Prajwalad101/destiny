import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import BusinessCard from '../../cards/business/BusinessCard';
import { mockBusinessCardProps } from '../../cards/business/BusinessCard.mocks';
import AppLayout from '../../layout/app/AppLayout';

function RecommendedSection() {
  const slideLeft = () => {
    const slider = document.getElementById('slider') as HTMLDivElement;
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    const slider = document.getElementById('slider') as HTMLDivElement;
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <AppLayout>
      <h3 className="mb-4 mt-7 font-rubik text-xl font-medium text-gray-800 sm:text-[22px] md:mt-10 md:mb-5 md:text-2xl">
        Trending right now
      </h3>

      <div className="relative">
        <div
          id="slider"
          className="hide-scrollbar mb-10 flex gap-3 overflow-x-scroll scroll-smooth"
        >
          <div className="absolute top-[35%] left-5 z-10 cursor-pointer rounded-full bg-white p-1 text-black">
            <AiOutlineArrowLeft size={30} onClick={slideLeft} />
          </div>
          <div className="absolute top-[35%] right-5 z-10 cursor-pointer rounded-full bg-white p-1 text-black">
            <AiOutlineArrowRight size={30} onClick={slideRight} />
          </div>

          <BusinessCard {...mockBusinessCardProps.base} />
          <BusinessCard {...mockBusinessCardProps.card2} />
          <BusinessCard {...mockBusinessCardProps.card3} />
          <BusinessCard {...mockBusinessCardProps.card3} />
          <BusinessCard {...mockBusinessCardProps.card3} />
        </div>
      </div>
    </AppLayout>
  );
}

export default RecommendedSection;
