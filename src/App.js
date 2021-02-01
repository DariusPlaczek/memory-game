import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

import { StartGame, Game } from "./Pages/";
import MyLastGames from "./Components/MyLastGames/MyLastGames";
import Musikplayer from "./Components/Musikplayer/Musikplayer";

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
          <MyLastGames />
          <Musikplayer />

          <Switch>
            <Route path="/game">
              <Game />
            </Route>
            <Route exact path="/">
              <StartGame />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
