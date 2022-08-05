import MyTextArea from './components/Form/MyTextArea';
import MyTextInput from './components/Form/MyTextInput';
import { initialValues, validationSchema } from './data/form.data';
import { cardData } from './data/info-card.data';
import linkData from './data/link.data.json';
import FormContainer from './layouts/FormContainer';
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
  FormContainer,
  initialValues,
  validationSchema,
  cardData,
  linkData,
};
// types
export type { OtherProps, MyFormValues };
