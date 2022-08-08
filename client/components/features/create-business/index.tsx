import MyTextArea from './components/Form/MyTextArea';
import MyTextInput from './components/Form/MyTextInput';
import { initialValues } from './data/formData';
import { cardData } from './data/infoCardData';
import linkData from './data/linkData.json';
import FormContainer from './layouts/FormContainer';
import GetStartedLayout from './layouts/GetStarted';
import Hero from './layouts/Hero';
import Navbar from './layouts/Navbar';
import { validationSchema } from './schema/FormikValidationSchema';
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
