import { ComponentMeta, ComponentStory } from '@storybook/react';
import RecommendedBusinessCard, {
  IRecommendBusinessCard,
} from './RecommendedBusinessCard';
import { mockRecommendBusinessCardProps } from './RecommendedBusinessCard.mocks';

export default {
  title: 'components/Cards/RecommendBusiness',
  component: RecommendedBusinessCard,
  argTypes: {},
} as ComponentMeta<typeof RecommendedBusinessCard>;

const Template: ComponentStory<typeof RecommendedBusinessCard> = (args) => (
  <RecommendedBusinessCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockRecommendBusinessCardProps.base,
} as IRecommendBusinessCard;
