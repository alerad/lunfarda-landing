import '../styles/globals.css'
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../src/theme/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import Header from "../src/components/header/Header";
import Hidden from "@material-ui/core/Hidden";
import MobileHeader from "../src/components/header/MobileHeader";

function MyApp({ Component, pageProps }) {

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <Hidden smDown>
              <Header/>
          </Hidden>
          <Hidden mdUp>
              <MobileHeader/>
          </Hidden>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
