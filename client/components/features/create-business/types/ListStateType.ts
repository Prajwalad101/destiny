type ListItem = { name: string };

type ListState = {
  selected: ListItem | ListItem[];
  // union function type used to assign a different functions to setSelected
  setSelected: ((_item: ListItem) => void) | ((_items: ListItem[]) => void);
};

export type { ListState, ListItem };
