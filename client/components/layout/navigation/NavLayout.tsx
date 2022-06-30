import { NavigationProvider } from '../../../context/navigation.context';
import Navbar from '../../navigation/navbar/Navbar';
import Sidebar from '../../navigation/sidebar/Sidebar';

interface INavLayout {
  children: React.ReactNode;
  navbar?: boolean;
}

function NavLayout({ children, navbar = true }: INavLayout) {
  return (
    <NavigationProvider>
      {navbar && <Navbar theme="light" />}
      <Sidebar />
      {children}
    </NavigationProvider>
  );
}

export default NavLayout;
