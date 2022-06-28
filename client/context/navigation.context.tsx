import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface IContext {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface INavigationProvider {
  children: React.ReactNode;
}

const NavigationContext = createContext<IContext | undefined>(undefined);

function NavigationProvider({ children }: INavigationProvider) {
  // sidebar toggle state
  const [open, setOpen] = useState(false);
  const value = { open, setOpen };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

function useSidebar() {
  const navState = useContext(NavigationContext);

  if (navState === undefined) {
    throw new Error('useNav must be within the NavigationProvider');
  }

  return navState;
}

export { NavigationProvider, useSidebar };
