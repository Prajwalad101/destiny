import { sortItemData } from '../../data/sortBusiness.data';
import { ISortItems } from './SortItems';

const base: ISortItems = {
  sortItems: sortItemData,
  setSortField: () => {
    return;
  },
};

export const mockSortItemsProps = {
  base,
};
