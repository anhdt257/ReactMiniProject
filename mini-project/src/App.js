import "./App.css";
import TodoFeature from "./features/Todo";
import SongFeature from "./features/Song";
import { Route } from "react-router-dom";
import React from "react";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Notfound from "./components/notfound";
function App() {
  return (
    <div className="App">
      <p>
        <Link to="/">HomePage</Link>
      </p>
      <p>
        <Link to="/todos">Todos Link</Link>
      </p>
      <p>
        <Link to="/songs">Songs Link</Link>
      </p>
      <p>
        <NavLink to="/todos">Todos NavLink</NavLink>
      </p>
      <p>
        <NavLink to="/songs">Songs NavLink</NavLink>
      </p>
      <Switch>
        <Redirect from="/todos/:id" to="/" />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/songs" component={SongFeature} />
        <Route component={Notfound} />
      </Switch>
      Footer
    </div>
  );
}
export default App;
