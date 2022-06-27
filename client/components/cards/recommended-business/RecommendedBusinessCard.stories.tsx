import { ComponentMeta, ComponentStory } from '@storybook/react';
import BusinessCard, { IBusinessCard } from './RecommendedBusinessCard';
import { mockBusinessCardProps } from './RecommendedBusinessCard.mocks';

export default {
  title: 'components/Cards/Business',
  component: BusinessCard,
  argTypes: {},
} as ComponentMeta<typeof BusinessCard>;

const Template: ComponentStory<typeof BusinessCard> = (args) => (
  <BusinessCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBusinessCardProps.base,
} as IBusinessCard;
