import { ComponentMeta, ComponentStory } from '@storybook/react';
import SortItems from './SortItems';

export default {
  title: 'components/SortItems',
  component: SortItems,
  argTypes: {},
} as ComponentMeta<typeof SortItems>;

const Template: ComponentStory<typeof SortItems> = () => <SortItems />;

export const Base = Template.bind({});
