export interface INavbarLayout {
  children: React.ReactNode;
}

function NavbarLayout({ children }: INavbarLayout) {
  return <div className="flex justify-between py-2 shadow-md">{children}</div>;
}

export default NavbarLayout;
