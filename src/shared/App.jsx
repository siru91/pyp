import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Welcome, About, Works } from "../pages/";
import { AnimatePresence, motion } from "framer-motion";

class App extends Component {
  render() {
    console.log("App rendered.");
    return (
      <>
        <AnimatePresence exitBeforeEnter />

        <Route exact path="/" component={Welcome} />
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
      </>
    );
  }
}

export default App;
