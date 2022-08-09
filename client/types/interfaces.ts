import { IBusinessCategory } from '@destiny/types/business/businessInterface';

export interface ISelectedFilters {
  tags: string[];
  price: string | null;
}

// implement a different subcategory on dropdown items
export interface IBusinessCategoryDropdown
  extends Omit<IBusinessCategory, 'subCategories'> {
  subCategories: IBusinessSubCategory[];
}

export interface IBusinessSubCategory {
  name: string;
  icon: JSX.Element;
}
