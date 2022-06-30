import { ComponentStory } from '@storybook/react';
import BusinessCard, { IBusinessCard } from './BusinessCard';
import { mockBusinessCardProps } from './BusinessCard.mocks';

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
} as IBusinessCard;
