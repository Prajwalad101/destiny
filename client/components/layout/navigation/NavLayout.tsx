import { NavigationProvider } from '../../../context/navigation.context';
import Navbar from '../../navigation/navbar/Navbar';
import Sidebar from '../../navigation/sidebar/Sidebar';

interface INavLayout {
  children: React.ReactNode;
}

function NavLayout({ children }: INavLayout) {
  return (
    <NavigationProvider>
      <Navbar theme="light" />
      <Sidebar />
      {children}
    </NavigationProvider>
  );
}

export default NavLayout;
