import { Navbar } from '@features/create-business/components';
import { infoCardData } from '@features/create-business/data';
import { HeroSection } from '@features/create-business/layouts';
import { EllipsisSeperator, InfoCard } from '@features/create-business/ui';
import { NavigationProvider } from 'components/context-provider';
import AppLayout from 'components/layout/app/AppLayout';
import React from 'react';
import { NextPageWithLayout } from '../_app';

const CreateBusiness: NextPageWithLayout = () => {
  return (
    <div>
      <HeroSection />
      <div className="md:my-20">
        {infoCardData.map((data, index) => (
          <React.Fragment key={index}>
            <InfoCard {...data} flip={index % 2 ? true : false} key={index} />
            <EllipsisSeperator />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

CreateBusiness.getLayout = (page) => (
  <AppLayout size="sm">
    <NavigationProvider>
      <div className="mb-7 md:mb-10">
        <Navbar theme="dark" />
      </div>
      {page}
    </NavigationProvider>
  </AppLayout>
);

export default CreateBusiness;
