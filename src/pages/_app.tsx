import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import "./Container.css"
import theme from "../theme";
import Header from "../components/Header";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <CSSReset />
        <Header />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
