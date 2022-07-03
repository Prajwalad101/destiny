import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

interface IProviderLayout {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function ProviderLayout({ children, pageProps }: IProviderLayout) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
}

export default ProviderLayout;
