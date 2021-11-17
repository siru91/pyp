import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Route, Switch } from "react-router-dom";

//Import pages
import { Contents, WorksList } from "../pages/index";

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
        {/* <Route path="/" component={NotFound} */}
        {/* <Route
          path="/"
          render={({ history, location, match }) => {
            const Page = lazy(() =>
              import("./pages" + location.pathname).catch((e) => {
                if (/not find module/.test(e.message)) {
                  // return import("./pages/NotFound.js");
                  return;
                }
                if (/Loading chunk \d+ failed/.test(e.message)) {
                  window.location.reload();
                  return;
                }
                throw e;
              })
            );
            return (
              <Suspense fallback={<div>Loading..</div>}>
                <Page />
              </Suspense>
            );
          }}
        /> */}
      </Switch>
    </motion.div>
  );
}
