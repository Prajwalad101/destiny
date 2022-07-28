import React from 'react';
import {
  cardData,
  EllipsisSeperator,
  Hero,
  InfoCard,
} from '../../components/features/create-business';
import AppLayout from '../../components/layout/app/AppLayout';
import { NextPageWithLayout } from '../_app';

const CreateBusiness: NextPageWithLayout = () => {
  return (
    <div>
      <Hero />
      <AppLayout>
        <div className="md:my-20">
          {cardData.map((data, index) => (
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
