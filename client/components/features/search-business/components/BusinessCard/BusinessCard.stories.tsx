import { BusinessCard } from '@features/search-business/components';
import { mockBusinessCardProps } from '@features/search-business/data';
import { BusinessCardProps } from '@features/search-business/types';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'components/Cards/Business',
  component: BusinessCard,
};

const Template: ComponentStory<typeof BusinessCard> = (args) => (
  <BusinessCard {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockBusinessCardProps.card1,
} as BusinessCardProps;
