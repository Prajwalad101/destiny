import { IBusinessSubCategory } from '@features/home-page/types';

export interface IBusinessCategory {
  name: string;
  subCategories: IBusinessSubCategory[];
}
