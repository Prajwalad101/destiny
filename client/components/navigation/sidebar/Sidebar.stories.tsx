import { ComponentMeta, ComponentStory } from '@storybook/react';
import Sidebar from './Sidebar';

export default {
  title: 'components/navigation/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const Base = Template.bind({});
