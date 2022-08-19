import { sortItemData } from '../../data/sortItem';
import { ISortItems } from './SortItems';

const base: ISortItems = {
  sortItemData: sortItemData,
  selectedSort: sortItemData[0],
  setSelectedSort: () => sortItemData[0],
  setIsFilter: () => false,
};

export const mockSortItemsProps = {
  base,
};
