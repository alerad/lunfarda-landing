import React, {useEffect} from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import {BrowserRouter, BrowserRouter as Router, HashRouter, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {ThemeProvider} from '@material-ui/core/styles';
import 'react-toastify/dist/ReactToastify.css';
import loadable from '@loadable/component'
import theme from "./theme/Theme";
import {AddBokunScript} from "./services/BokunService";

const Header = loadable(() => import("./components/header/Header"))
const Landing = loadable(() => import("../pages/Landing"))
const BuenosAires = loadable(() => import("../pages/BuenosAires"))
const Argentina = loadable(() => import("../pages/Argentina"))
const JewishHeritage = loadable(() => import("../pages/JewishHeritage"))
const Faq = loadable(() => import("../pages/Faq"))
const Blog = loadable(() => import("../pages/Blog"))
const AboutUs = loadable(() => import("../pages/AboutUs"))
const Kids = loadable(() => import("../pages/Kids"))
const Hidden = loadable(() => import("@material-ui/core/Hidden"))
const MobileHeader = loadable(() => import("./components/header/MobileHeader"))
const Neighborhoods = loadable(() => import("../pages/Neighborhoods"))
const DayTrips = loadable(() => import("../pages/DayTrips"))
const Culture = loadable(() => import("../pages/Culture"))
const ScrollToTop = loadable(() => import("./components/ScrollToTop"))
const Book = loadable(() => import("../pages/Book"))

function App() {

    useEffect(() => {
        AddBokunScript()
    }, []);

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <HashRouter>
            <ScrollToTop>
                  <ToastContainer
                      position="bottom-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                  />
                <Hidden smDown>
                    <Header/>
                </Hidden>
                <Hidden mdUp>
                    <MobileHeader/>
                </Hidden>
                <Switch>
                    <Route path="/buenos-aires">
                        <BuenosAires />
                    </Route>
                    <Route path="/kids">
                        <Kids />
                    </Route>
                    <Route path="/argentina">
                        <Argentina/>
                    </Route>
                    <Route path="/jewish-heritage">
                        <JewishHeritage/>
                    </Route>
                    <Route path="/faq">
                        <Faq/>
                    </Route>
                    <Route path="/book">
                        <Book/>
                    </Route>
                    <Route path="/neighborhoods">
                        <Neighborhoods/>
                    </Route>
                    <Route path="/lunfarda-blog">
                        <Blog/>
                    </Route>
                    <Route path="/day-trips">
                        <DayTrips/>
                    </Route>
                    <Route path="/culture">
                        <Culture/>
                    </Route>
                    <Route path="/about-us">
                        <AboutUs/>
                    </Route>
                    <Route path="/">
                        <Landing/>
                    </Route>
                </Switch>
            </ScrollToTop>
        </HashRouter>
      </ThemeProvider>
  );
}

export default App;
