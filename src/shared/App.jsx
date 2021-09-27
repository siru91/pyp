import React, { Component } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Welcome, About, Works, Contents } from "../pages/";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  console.log("App rendered.");
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path={["/pyp", "/"]} component={Welcome} />
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
