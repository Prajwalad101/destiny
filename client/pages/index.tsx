import BusinessCard from '../components/cards/recommended-business/RecommendedBusinessCard';
import { mockRecommendBusinessCardProps } from '../components/cards/recommended-business/RecommendedBusinessCard.mocks';
import NavLayout from '../components/layout/navigation/NavLayout';
import HeroSection from '../components/sections/hero/HeroSection';
import RecommendedSection from '../components/sections/recommended/RecommendedSection';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <HeroSection />
      <div>
        {/* Recommended Businesses */}
        <RecommendedSection
          title="Trending right now"
          description="Take a look at some of the hottest places to explore"
        >
          <BusinessCard {...mockRecommendBusinessCardProps.base} />
          <BusinessCard {...mockRecommendBusinessCardProps.card2} />
          <BusinessCard {...mockRecommendBusinessCardProps.card3} />
          <BusinessCard {...mockRecommendBusinessCardProps.card3} />
          <BusinessCard {...mockRecommendBusinessCardProps.card3} />
        </RecommendedSection>

        <RecommendedSection
          title="Near to you"
          description="Explore local businesses near to your location"
        >
          <BusinessCard {...mockRecommendBusinessCardProps.base} />
          <BusinessCard {...mockRecommendBusinessCardProps.card2} />
          <BusinessCard {...mockRecommendBusinessCardProps.card3} />
          <BusinessCard {...mockRecommendBusinessCardProps.card3} />
          <BusinessCard {...mockRecommendBusinessCardProps.card3} />
        </RecommendedSection>
      </div>
    </div>
  );
};

Home.getLayout = (page) => <NavLayout>{page}</NavLayout>;

export default Home;
