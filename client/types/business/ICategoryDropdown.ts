import { ISubcategoryDropdown } from 'types/business';

export interface ICategoryDropdown {
  name: string;
  subcategories: ISubcategoryDropdown[];
}
