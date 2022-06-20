import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { IButton } from './Button';
import { mockButtonProps } from './Button.mocks';

export default {
  title: 'templates/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// primary button
export const Primary = Template.bind({});
Primary.args = {
  ...mockButtonProps.base,
  variant: 'primary',
} as IButton;

// secondary button
export const Secondary = Template.bind({});
Secondary.args = {
  ...mockButtonProps.base,
  variant: 'secondary',
} as IButton;
