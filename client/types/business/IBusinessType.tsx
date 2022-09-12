import { BusinessFeature, BusinessType } from '@destiny/common/types';

// any specific type of business (eg. resturant)
export interface IBusinessType {
  name: BusinessType;
  icon: JSX.Element;
  features: { name: BusinessFeature }[];
}
