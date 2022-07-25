import BusinessCard from '../components/cards/recommended-business/RecommendedBusinessCard';
import { mockRecommendBusinessCardProps } from '../components/cards/recommended-business/RecommendedBusinessCard.mocks';
import NavLayout from '../components/layout/navigation/NavLayout';
import HeroSection from '../components/sections/hero/HeroSection';
import Recommended from '../components/sections/recommended/Recommend.section';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <HeroSection />
      <div>
        {/* Recommended Businesses */}
        <Recommended
          title="Trending right now"
          description="Take a look at some of the hottest places to explore"
        >
          <BusinessCard {...mockRecommendBusinessCardProps.base} />
          <BusinessCard {...mockRecommendBusinessCardProps.card2} />
          <BusinessCard {...mockRecommendBusinessCardProps.card3} />
          <BusinessCard {...mockRecommendBusinessCardProps.card3} />
          <BusinessCard {...mockRecommendBusinessCardProps.card3} />
        </Recommended>

        <Recommended
          title="Near to you"
          description="Explore local businesses near to your location"
        >
          <BusinessCard {...mockRecommendBusinessCardProps.base} />
          <BusinessCard {...mockRecommendBusinessCardProps.card2} />
          <BusinessCard {...mockRecommendBusinessCardProps.card3} />
          <BusinessCard {...mockRecommendBusinessCardProps.card3} />
          <BusinessCard {...mockRecommendBusinessCardProps.card3} />
        </Recommended>
      </div>
    </div>
  );
};

// navbar set to false, because navbar is rendered seperately inside the hero section
Home.getLayout = (page) => <NavLayout navbar={false}>{page}</NavLayout>;

export default Home;
