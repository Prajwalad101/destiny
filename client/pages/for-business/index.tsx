import Sidebar from '../../components/navigation/sidebar/Sidebar';
import ForBusinessHero from '../../components/sections/for-business/hero/ForBusinessHero.section';
import { NavigationProvider } from '../../context/navigation.context';
import { NextPageWithLayout } from '../_app';

const ForBusiness: NextPageWithLayout = () => {
  return (
    <div>
      <ForBusinessHero />
    </div>
  );
};

export default ForBusiness;

ForBusiness.getLayout = (page) => (
  <NavigationProvider>
    <Sidebar />
    {page}
  </NavigationProvider>
);
