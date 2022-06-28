import { NavigationProvider } from '../../../context/navigation.context';
import Sidebar from '../../navigation/sidebar/Sidebar';

interface INavLayout {
  children: React.ReactNode;
}

function NavLayout({ children }: INavLayout) {
  return (
    <NavigationProvider>
      <Sidebar />
      {children}
    </NavigationProvider>
  );
}

export default NavLayout;
