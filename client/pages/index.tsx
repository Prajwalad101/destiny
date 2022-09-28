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
import { categoryDropdownData } from 'data';
import { NextPageWithLayout } from 'pages/_app';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <div className="mb-10 md:mb-0 md:h-[550px]">
        <div className="absolute h-[700px] inset-0 -z-10 hidden bg-main-img bg-cover bg-no-repeat md:block" />

        <section className="mt-7 md:mt-20">
          <MainHeading className="mb-5 max-w-sm sm:max-w-xl md:mb-7">
            Find and support local businesses
          </MainHeading>
          <Searchbar
            placeholder1="Search for stuff"
            placeholder2="Kathmandu, New baneshwor"
            className="max-w-xl md:max-w-2xl h-[60px] shadow-md rounded-md focus-within:shadow-lg transition-shadow"
          />
          {/* Dropdown Items */}
          <div className="mt-5 hidden gap-5 font-rubik md:flex">
            {categoryDropdownData.map((data, index) => (
              <div key={index}>
                <CategoriesDropdown
                  name={data.name}
                  subcategories={data.subcategories}
                />
              </div>
            ))}
          </div>
        </section>
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
    <AppLayout size="sm">
      <NavigationProvider>
        <Navbar theme="dark" />
        <Sidebar />
      </NavigationProvider>
      {page}
    </AppLayout>
  </QueryProvider>
);

export default Home;
