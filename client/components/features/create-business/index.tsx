import MyTextArea from './components/Form/MyTextArea';
import MyTextInput from './components/Form/MyTextInput';
import FormStep1 from './components/Form/Steps/FormStep1';
import FormStep2 from './components/Form/Steps/FormStep2';
import { initialValues, validationSchema } from './data/form.data';
import { cardData } from './data/info-card.data';
import linkData from './data/link.data.json';
import FormSlider from './layouts/FormSlider';
import GetStartedLayout from './layouts/GetStarted';
import Hero from './layouts/Hero';
import Navbar from './layouts/Navbar';
import { MyFormValues, OtherProps } from './types/interfaces';
import EllipsisSeperator from './ui/EllipsisSeperator';
import InfoCard from './ui/InfoCard';

export {
  Hero,
  EllipsisSeperator,
  InfoCard,
  Navbar,
  GetStartedLayout,
  MyTextInput,
  MyTextArea,
  FormStep1,
  FormStep2,
  FormSlider,
  initialValues,
  validationSchema,
  cardData,
  linkData,
};
// types
export type { OtherProps, MyFormValues };
