import '../styles/globals.css'
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../src/theme/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import React, {useEffect} from "react";
import Header from "../src/components/header/Header";
import Hidden from "@material-ui/core/Hidden";
import MobileHeader from "../src/components/header/MobileHeader";
import {AddBokunScript} from "../src/services/BokunService";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AddBokunScript()
    }, []);

  return (
      <ThemeProvider theme={theme}>
          <title>Lunfarda Travel - Explore Argentina</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta
                name="description"
                content="We connect travelers and locals alike through socially responsible and bespoke experiences & tours."
            />

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
