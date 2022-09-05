import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import AppLayout from '../../../layout/app/AppLayout';

interface IRecommendedSection {
  title: string;
  description?: string;
  children: React.ReactNode;
}

function RecommendedSection({
  title,
  description,
  children,
}: IRecommendedSection) {
  const slideLeft = () => {
    const slider = document.getElementById(title) as HTMLDivElement;
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById(title) as HTMLDivElement;
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <AppLayout size="sm">
      <div className="md:mb-16">
        <div className="mb-5 font-rubik">
          <h3 className="mb-2 text-xl font-medium text-gray-800 sm:text-[22px] md:mt-10 md:text-2xl">
            {title}
          </h3>
          <p className="text-base text-gray-800 md:block">{description}</p>
        </div>

        <div className="relative">
          <div
            id={title}
            className="hide-scrollbar mb-10 flex gap-3 overflow-x-scroll scroll-smooth"
          >
            {/* LEFT BUTTON */}
            <div
              className="absolute top-[35%] left-5 z-10 cursor-pointer rounded-full bg-white p-2 text-black hover:bg-primaryred hover:text-white"
              onClick={slideLeft}
            >
              <AiOutlineArrowLeft size={25} />
            </div>
            {/* RIGHT BUTTON */}
            <div
              className="absolute top-[35%] right-5 z-10 cursor-pointer rounded-full bg-white p-2 text-black hover:bg-primaryred hover:text-white"
              onClick={slideRight}
            >
              <AiOutlineArrowRight size={25} />
            </div>
            {children}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default RecommendedSection;
