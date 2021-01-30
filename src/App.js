import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

import { Starting, Game } from "./Pages/";
import rootReducer from "./rootReducer";
import "./App.css";

//const store = createStore(rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer /* preloadedState, */, composeEnhancers());

function App() {
  return (
    <Provider store={store}>
      <div className="main-container">
        <Router>
          <Switch>
            <Route path="/game">
              <Game />
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
