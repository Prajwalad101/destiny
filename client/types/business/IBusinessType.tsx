import { businessFeatures, businessTypes, ValueOf } from '@destiny/types';

// any specific type of business (eg. resturant)
export interface IBusinessType {
  name: ValueOf<typeof businessTypes>;
  icon: JSX.Element;
  features: { name: ValueOf<typeof businessFeatures> }[];
}
