import { IBusiness } from '@destiny/types';

export interface ISelectedFilters {
  tags: string[];
  price: string | null;
}

export interface Data {
  status: string;
  data: IBusiness[];
}
