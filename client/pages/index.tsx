import { NextPage } from 'next';
import BusinessCard from '../components/cards/recommended-business/RecommendedBusinessCard';
import { mockBusinessCardProps } from '../components/cards/recommended-business/RecommendedBusinessCard.mocks';
import HeroSection from '../components/sections/hero/HeroSection';
import RecommendedSection from '../components/sections/recommended/RecommendedSection';

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <div className="">
        {/* Recommended Businesses */}
        <RecommendedSection
          title="Trending right now"
          description="Take a look at some of the hottest places to explore"
        >
          <BusinessCard {...mockBusinessCardProps.base} />
          <BusinessCard {...mockBusinessCardProps.card2} />
          <BusinessCard {...mockBusinessCardProps.card3} />
          <BusinessCard {...mockBusinessCardProps.card3} />
          <BusinessCard {...mockBusinessCardProps.card3} />
        </RecommendedSection>

        <RecommendedSection
          title="Near to you"
          description="Explore local businesses near to your location"
        >
          <BusinessCard {...mockBusinessCardProps.base} />
          <BusinessCard {...mockBusinessCardProps.card2} />
          <BusinessCard {...mockBusinessCardProps.card3} />
          <BusinessCard {...mockBusinessCardProps.card3} />
          <BusinessCard {...mockBusinessCardProps.card3} />
        </RecommendedSection>
      </div>
    </div>
  );
};

export default Home;
