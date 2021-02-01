import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { gameMode } from "../../../ReduxStore/gameConfig";

function StartGame() {
  const dispatch = useDispatch();

  return (
    <div className="before-start">
      <h2>Welcome to</h2>
      <h1> Memory-Game</h1>
      <div className="btn-container">
        <Link to="/react/memory/game">
          <button id="36" className="btn slide" onClick={() => dispatch(gameMode({numberOfCards: 36, boardWidth: 660, gameDifficult: "E"}))}>Easy</button>
        </Link>
        <Link to="/react/memory/game">
          <button id="64" className="slide" onClick={() => dispatch(gameMode({numberOfCards: 64, boardWidth: 880, gameDifficult: "H"}))}>Hard</button>
        </Link>
      </div>
    </div>
  );
}

export default StartGame;
