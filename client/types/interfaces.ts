import { IBusinessCategory } from '@destiny/types/business/businessInterface';

export interface ISelectedFilters {
  tags: string[];
  price: string | null;
}

// dropdown menu to explore business by category
export interface IBusinessCategoryDropdown
  extends Omit<IBusinessCategory, 'subCategories'> {
  id: number;
  subCategories: IBusinessSubCategory[];
}

export interface IBusinessSubCategory {
  name: string;
  icon: JSX.Element;
}
