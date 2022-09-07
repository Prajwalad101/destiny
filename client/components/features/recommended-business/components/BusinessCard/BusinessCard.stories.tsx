import { BusinessCard } from '@features/recommended-business/components';
import { BusinessCardProps } from '@features/recommended-business/types';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockRecommendBusinessCardProps } from './BusinessCard.mocks';

export default {
  title: 'components/Cards/RecommendBusiness',
  component: BusinessCard,
  argTypes: {},
} as ComponentMeta<typeof BusinessCard>;

const Template: ComponentStory<typeof BusinessCard> = (args) => (
  <BusinessCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockRecommendBusinessCardProps.base,
} as BusinessCardProps;
