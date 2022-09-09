import { ComponentMeta, ComponentStory } from '@storybook/react';
// import ImageSlider from './Slider';
import Slider from './Slider';

export default {
  title: 'components/ImageSlider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = () => (
  <div className="h-[200px] w-[500px]">
    <Slider numItems={5}>
      <div></div>
    </Slider>
  </div>
);

export const Base = Template.bind({});
