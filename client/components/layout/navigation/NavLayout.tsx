import Navbar from 'components/navigation/navbar/Navbar';
import Sidebar from 'components/navigation/sidebar/Sidebar';
import { NavigationProvider } from 'context/navigation.context';

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
