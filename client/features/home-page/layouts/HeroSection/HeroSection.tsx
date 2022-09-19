import {
  CategoriesDropdown,
  MainHeading,
  Searchbar,
} from '@features/home-page/components';
import AppLayout from 'components/layout/app/AppLayout';
import Navbar from 'components/navigation/navbar/Navbar';
import businessCategories from 'data/business/categoriesData';

function HeroSection() {
  return (
    <div className="relative mb-10 md:mb-0 md:h-[700px]">
      <AppLayout size="sm">
        {/* BG Image */}
        <div className="absolute inset-0 -z-10 hidden bg-main-img bg-cover bg-no-repeat md:block" />
        {/* Navbar */}
        <Navbar theme="dark" />
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
            {businessCategories.map((data, index) => (
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
  );
}

export default HeroSection;
