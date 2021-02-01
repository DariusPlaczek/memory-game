import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

import { StartPage, GamePage } from "./Pages/";
import {LastGames, Musicplayer} from "./Components/"


import rootReducer from "./rootReducer";
import "./App.css";

//const store = createStore(rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer /* preloadedState, */,
  composeEnhancers()
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="main-container">
          <LastGames />
          <Musicplayer />

          <Switch>
            <Route path="/react/memory/game">
              <GamePage />
            </Route>
            <Route exact path="/react/memory/">
              <StartPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
