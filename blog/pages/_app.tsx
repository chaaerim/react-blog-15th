import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <div>
          <Component />
        </div>
      </RecoilRoot>
    </>
  );
}
export default MyApp;
