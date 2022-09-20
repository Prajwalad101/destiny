import { infoCardData } from '@features/create-business/data';
import { HeroSection } from '@features/create-business/layouts';
import { EllipsisSeperator, InfoCard } from '@features/create-business/ui';
import AppLayout from 'components/layout/app/AppLayout';
import React from 'react';
import { NextPageWithLayout } from '../_app';

const CreateBusiness: NextPageWithLayout = () => {
  return (
    <div>
      <HeroSection />
      <AppLayout size="sm">
        <div className="md:my-20">
          {infoCardData.map((data, index) => (
            <React.Fragment key={index}>
              <InfoCard {...data} flip={index % 2 ? true : false} key={index} />
              <EllipsisSeperator />
            </React.Fragment>
          ))}
        </div>
      </AppLayout>
    </div>
  );
};

export default CreateBusiness;
