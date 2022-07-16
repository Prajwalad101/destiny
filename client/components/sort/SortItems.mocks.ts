import { sortItemData } from '../../data/sortBusiness.data';
import { ISortItems } from './SortItems';

const base: ISortItems = {
  sortItemData: sortItemData,
  selectedSort: sortItemData[0],
  setSelectedSort: () => sortItemData[0],
  refetch: null,
};

export const mockSortItemsProps = {
  base,
};
