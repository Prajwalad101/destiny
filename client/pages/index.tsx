import {
  CategoriesDropdown,
  MainHeading,
  Searchbar,
} from '@features/home-page/components';
import { RecommendedSection } from '@features/recommended-business/layouts';
import { QueryProvider } from 'components/context-provider';
import { NavigationProvider } from 'components/context-provider/NavigationProvider/NavigationProvider';
import { AppLayout } from 'components/layout';
import { Navbar } from 'components/navigation';
import Sidebar from 'components/navigation/sidebar/Sidebar';
import { businessCategoriesData } from 'data';
import { NextPageWithLayout } from 'pages/_app';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <div className="relative mb-10 md:mb-0 md:h-[700px]">
        {/* BG Image */}
        <div className="absolute inset-0 -z-10 hidden bg-main-img bg-cover bg-no-repeat md:block" />
        {/* Navbar */}
        <Navbar theme="dark" size="sm" />
        <AppLayout size="sm">
          <section className="mt-7 md:mt-20">
            <MainHeading className="mb-5 max-w-sm sm:max-w-xl md:mb-7">
              Find and support local businesses
            </MainHeading>
            <div className="w-full max-w-xl md:max-w-2xl">
              <Searchbar
                foodPlaceholder="Search for stuff"
                locationPlaceholder="Kathmandu, New baneshwor"
              />
            </div>
            {/* Dropdown Items */}
            <div className="mt-5 hidden gap-5 font-rubik md:flex">
              {businessCategoriesData.map((data, index) => (
                <div key={index}>
                  <CategoriesDropdown
                    name={data.name}
                    subcategories={data.subcategories}
                  />
                </div>
              ))}
            </div>
          </section>
        </AppLayout>
      </div>
      <div>
        <RecommendedSection
          title="Trending right now"
          description="Take a look at some of the hottest places to explore"
          groupBy="trending"
        />

        <RecommendedSection
          title="Near to you"
          description="Explore local businesses near to your location"
          groupBy="location"
        />
      </div>
    </div>
  );
};

// since navbar should render with background image, it is present inside the hero section
Home.getLayout = (page, pageProps) => (
  <QueryProvider pageProps={pageProps}>
    <NavigationProvider>
      <Sidebar />
      {page}
    </NavigationProvider>
  </QueryProvider>
);

export default Home;
