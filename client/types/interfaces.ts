export interface ISelectedFilters {
  features: string[];
  price: string | null;
}

export interface IBusinessCategoryDropdown {
  name: string;
  subCategories: IBusinessSubcategoryDropdown[];
}

export interface IBusinessSubcategoryDropdown {
  name: string;
  features: { name: string }[];
  icon?: JSX.Element;
}
