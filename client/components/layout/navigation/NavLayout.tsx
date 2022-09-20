import { AppLayout } from 'components/layout';
import { Navbar, Sidebar } from 'components/navigation';
import { NavigationProvider } from 'context';

interface INavLayout {
  children: React.ReactNode;
}

function NavLayout({ children }: INavLayout) {
  return (
    <NavigationProvider>
      <AppLayout>
        <Navbar theme="light" />
      </AppLayout>
      <Sidebar />
      {children}
    </NavigationProvider>
  );
}

export default NavLayout;
