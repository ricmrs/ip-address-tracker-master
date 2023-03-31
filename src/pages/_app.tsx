import { AppProps } from 'next/app';
import GlobalStyle from "@/theme/GlobalStyle";
import ThemeProvider from "@/theme/ThemeProvider";
import 'leaflet/dist/leaflet.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
