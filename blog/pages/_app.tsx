import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import Link from 'next/link';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <div>
        <Component />
      </div>
    </>
  );
}
export default MyApp;
