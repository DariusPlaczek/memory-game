import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { Starting, Game, Win } from "./Pages/";
import rootReducer from "./rootReducer";
import "./App.css";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="main-container">
        <Router>
          <Switch>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/win">
              <Win />
            </Route>
            <Route exact path="/">
              <Starting />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
