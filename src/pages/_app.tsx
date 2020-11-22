import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import theme from "../theme";
import "../styles/Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/navbar/Header";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>

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
    </>
  );
}

export default MyApp;
