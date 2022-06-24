import type { AppProps } from 'next/app';
import AppLayout from '../components/layout/app/AppLayout';
import Navbar from '../components/navigation/navbar/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default MyApp;
