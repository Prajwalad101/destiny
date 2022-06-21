interface IAppLayout {
  children: React.ReactNode;
}

function AppLayout({ children }: IAppLayout) {
  return (
    <div className="px-3">
      {/* Individual page of the whole app */}
      {children}
    </div>
  );
}

export default AppLayout;
