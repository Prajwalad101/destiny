type ListboxItem = { name: string };

type ListboxState = {
  selected: ListboxItem | ListboxItem[];
  // union function type used to assign a different functions to setSelected
  setSelected:
    | ((_item: ListboxItem) => void)
    | ((_items: ListboxItem[]) => void);
};

export type { ListboxState, ListboxItem };
