import AppLayout from '../../components/layout/app/AppLayout';
import { cardData } from '../../features/create-business/data/InfoCardData';
import CreateBusinessHero from '../../features/create-business/layouts/Hero';
import EllipsisSeperator from '../../features/create-business/ui/EllipsisSeperator';
import InfoCard from '../../features/create-business/ui/InfoCard';
import { NextPageWithLayout } from '../_app';

const ForBusiness: NextPageWithLayout = () => {
  return (
    <div>
      <CreateBusinessHero />
      <AppLayout>
        <div className="md:my-20">
          {cardData.map((data, index) => (
            <>
              <InfoCard {...data} flip={index % 2 ? true : false} key={index} />
              <EllipsisSeperator />
            </>
          ))}
        </div>
      </AppLayout>
    </div>
  );
};

export default ForBusiness;
