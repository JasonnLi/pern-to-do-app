import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App"

export default function AppRouter(props: any) {
  return (
    <Router>
      {props.children}
      <Switch>
        <Route exact path="/toDoApp">
          <App />
        </Route>
        {/* <Route exact path="/plays/createPlay">
          <CreatePlayPage />
        </Route>
        <Route exact path="/plays/login">
          <LoginPage />
        </Route>
        <Route exact path="/plays/register">
          <RegisterPage />
        </Route>
        <Route exact path="/plays/:userId">
          <PlayPage />
        </Route>
        <PrivateRoute exact path="/plays/dashboard" component={Dashboard} /> */}
      </Switch>
    </Router>
  );
}
