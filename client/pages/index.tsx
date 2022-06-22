import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="mt-7 md:mt-12">
      <div className="relative z-10">
        <h1 className="max-w-sm font-merriweather text-4xl font-black leading-tight tracking-wider sm:max-w-xl sm:text-[40px] md:text-[45px] md:leading-[69px] md:text-white">
          Find and support local businesses
        </h1>
      </div>
      <div className="absolute inset-0 hidden h-[95vh] bg-main-img bg-cover bg-no-repeat md:block"></div>
    </div>
  );
};

export default Home;
