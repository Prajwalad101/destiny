import businessCategories from '../../../../data/business/categoriesData';
import BusinessCategoryDropdown from '../../../dropdown/businessCategories/BusinessCategories';
import AppLayout from '../../../layout/app/AppLayout';
import Navbar from '../../../navigation/navbar/Navbar';
import Searchbar from '../../../search-bar/Searchbar';
import MainHeading from '../../../text/main-heading/MainHeading';

function HomeHero() {
  return (
    <div className="relative mb-10 md:mb-0 md:h-[700px]">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10 hidden bg-main-img bg-cover bg-no-repeat md:block" />

      {/* NAVIGATION BAR */}
      <Navbar theme="dark" />
      <AppLayout size="sm">
        <section className="mt-7 md:mt-20">
          {/*/ MAIN HEADING */}
          <MainHeading className="mb-5 max-w-sm sm:max-w-xl md:mb-7">
            Find and support local businesses
          </MainHeading>
          {/*/ SEARCH BAR */}
          <div className="w-full max-w-xl md:max-w-2xl">
            <Searchbar
              foodPlaceholder="Search for stuff"
              locationPlaceholder="Kathmandu, New baneshwor"
            />
          </div>

          {/* DROPDOWN ITEMS */}
          <div className="mt-5 hidden gap-5 font-rubik md:flex">
            {businessCategories.map((data, index) => (
              <div key={index}>
                <BusinessCategoryDropdown
                  name={data.name}
                  subCategories={data.subCategories}
                />
              </div>
            ))}
          </div>
        </section>
      </AppLayout>
    </div>
  );
}

export default HomeHero;
