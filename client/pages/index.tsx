import { NextPage } from 'next';
import HeroSection from '../components/sections/hero/HeroSection';
import RecommendedSection from '../components/sections/recommended/RecommendedSection';

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
      {/* BUSINESSES CARD LIST */}
      <RecommendedSection />
    </div>
  );
};

export default Home;
