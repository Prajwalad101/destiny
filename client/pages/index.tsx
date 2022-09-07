import { BusinessCard } from '@features/recommended-business/components';
import { mockBusinessCardProps } from '@features/recommended-business/data';
import { RecommendedSection } from '@features/recommended-business/layouts';
import Sidebar from 'components/navigation/sidebar/Sidebar';
import HeroSection from 'components/sections/home/hero/HeroSection';
import { NavigationProvider } from 'context/navigation.context';
import { NextPageWithLayout } from 'pages/_app';

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

// since navbar should render behind background image, it is present inside the hero section
Home.getLayout = (page) => (
  <NavigationProvider>
    <Sidebar />
    {page}
  </NavigationProvider>
);

export default Home;
