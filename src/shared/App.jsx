import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Welcome, About, Works } from "../pages/";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalStyle } from "../pages/sharedStyle";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <GlobalStyle />
      <Switch location={location} key={location.pathname}>

        <Route exact path={["/pyp", "/"]} component={Welcome} />
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
