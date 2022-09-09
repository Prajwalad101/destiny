import { HeroSection } from '@features/home-page/layouts';
import { RecommendedSection } from '@features/recommended-business/layouts';
import Sidebar from 'components/navigation/sidebar/Sidebar';
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
          groupBy="trending"
        />
        {/* <BusinessCard {...mockBusinessCardProps.base} />
          <BusinessCard {...mockBusinessCardProps.card2} />
          <BusinessCard {...mockBusinessCardProps.card3} />
          <BusinessCard {...mockBusinessCardProps.card3} />
          <BusinessCard {...mockBusinessCardProps.card3} /> */}

        <RecommendedSection
          title="Near to you"
          description="Explore local businesses near to your location"
          groupBy="location"
        />
        {/* <BusinessCard {...mockBusinessCardProps.base} />
          <BusinessCard {...mockBusinessCardProps.card2} />
          <BusinessCard {...mockBusinessCardProps.card3} />
          <BusinessCard {...mockBusinessCardProps.card3} />
          <BusinessCard {...mockBusinessCardProps.card3} />
        </RecommendedSection> */}
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
