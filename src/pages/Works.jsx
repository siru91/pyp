import React from "react";
import { motion } from "framer-motion";
import {
  Route,
  Switch,
} from "react-router-dom";

//Import pages
import { Contents, WorksList } from "../pages/index";
import Header from "../components/Header";

export default function Works({ match }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Switch>
        <Route exact path={match.path} component={WorksList} />
        <Route path={`${match.path}/:contentsId`} component={Contents} />
      </Switch>

    </motion.div>
  );
}
