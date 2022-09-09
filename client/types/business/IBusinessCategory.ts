import { IBusinessSubcategory } from 'types/business';

export interface IBusinessCategory {
  name: string;
  subCategories: IBusinessSubcategory[];
}
