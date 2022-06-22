import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="mt-10">
      <div className="relative z-10">
        <h1 className="max-w-sm font-merriweather text-4xl font-black leading-tight tracking-wider md:max-w-xl md:text-[45px] md:leading-snug md:text-white">
          Find and support local businesses
        </h1>
      </div>
      <div className="absolute inset-0 h-[95vh] bg-main-img bg-cover bg-no-repeat"></div>
    </div>
  );
};

export default Home;
