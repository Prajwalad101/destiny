import { BusinessFeatures, BusinessTypes } from '@destiny/common/data';
import { ValueOf } from '@destiny/common/types';

// any specific type of business (eg. resturant)
export interface IBusinessType {
  name: ValueOf<typeof BusinessTypes>;
  icon: JSX.Element;
  features: { name: ValueOf<typeof BusinessFeatures> }[];
}
