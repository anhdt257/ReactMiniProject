import "./App.css";
import TodoFeature from "./features/Todo";
import { Route } from "react-router-dom";
import React from "react";
function App() {
  return (
    <div className="App">
      HomePage
      <Route path="/todos" component={TodoFeature} />
      Footer
    </div>
  );
}
export default App;
