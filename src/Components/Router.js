import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv/" component={TV} />
        <Route path="/search/" component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
};

export default Router;
