import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ThemeProvider,
  mmTheme,
  GlobalStyle,
} from "@mms/webmobile-sc-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mmTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
