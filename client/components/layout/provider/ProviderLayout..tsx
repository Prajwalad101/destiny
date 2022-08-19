import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

interface IProviderLayout {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps?: any;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function ProviderLayout({ children, pageProps }: IProviderLayout) {
  let component;
  if (pageProps) {
    component = <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>;
  } else {
    component = children;
  }

  return (
    <QueryClientProvider client={queryClient}>
      {component}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default ProviderLayout;
