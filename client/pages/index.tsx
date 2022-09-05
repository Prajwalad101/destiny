import BusinessCard from '../components/cards/recommended-business/RecommendedBusinessCard';
import { mockRecommendBusinessCardProps } from '../components/cards/recommended-business/RecommendedBusinessCard.mocks';
import Sidebar from '../components/navigation/sidebar/Sidebar';
import HeroSection from '../components/sections/home/hero/HeroSection';
import RecommendedSection from '../components/sections/home/recommended/RecommendSection';
import { NavigationProvider } from '../context/navigation.context';
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

// since navbar should render behind background image, it is present inside the hero section
Home.getLayout = (page) => (
  <NavigationProvider>
    <Sidebar />
    {page}
  </NavigationProvider>
);

export default Home;
