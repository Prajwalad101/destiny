export interface ISelectedFilters {
  tags: string[];
  price: string | null;
}

export interface IBusinessCategoryDropdown {
  name: string;
  subCategories: IBusinessSubcategoryDropdown[];
}

interface IBusinessSubcategoryDropdown {
  name: string;
  features?: string[];
  icon: JSX.Element;
}
