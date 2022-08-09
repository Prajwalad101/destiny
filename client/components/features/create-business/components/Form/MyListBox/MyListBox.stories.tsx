import { ComponentMeta, ComponentStory } from '@storybook/react';
import businessCategories from '../../../../../../data/business/categoriesData';
import MyListBox from './MyListBox';

export default {
  title: 'components/Listbox',
  component: MyListBox,
} as ComponentMeta<typeof MyListBox>;

const Template: ComponentStory<typeof MyListBox> = (args) => (
  <MyListBox {...args} />
);

export const Base = Template.bind({});

Base.args = { list: businessCategories };
