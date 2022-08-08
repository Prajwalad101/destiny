import { initialValues } from './data/formData';
import { cardData } from './data/infoCardData';
import linkData from './data/linkData.json';
import FormContainer from './layouts/FormContainer';
import GetStartedLayout from './layouts/GetStarted';
import Hero from './layouts/Hero';
import Navbar from './layouts/Navbar';
import { validationSchema } from './schema/formikValidationSchema';
import { MyFormValues } from './types/interfaces';
import EllipsisSeperator from './ui/EllipsisSeperator';
import InfoCard from './ui/InfoCard';

export {
  Navbar,
  FormContainer,
  GetStartedLayout,
  EllipsisSeperator,
  Hero,
  InfoCard,
  initialValues,
  validationSchema,
  cardData,
  linkData,
};
// types
export type { MyFormValues };
