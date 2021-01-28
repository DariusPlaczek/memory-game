import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { gameMode } from "../ReduxStore/gameDifficult";

function Starting() {
  const dispatch = useDispatch();

  return (
    <div className="before-start">
      <h2>Welcome to</h2>
      <h1> Memory-Game</h1>
      <div className="btn-container">
        <Link to="/game">
          <button id="36" className="btn slide" onClick={() => dispatch(gameMode(36))}>Easy</button>
        </Link>
        <Link to="/game">
          <button id="64" className="slide" onClick={() => dispatch(gameMode(64))}>Hard</button>
        </Link>
      </div>
    </div>
  );
}

export default Starting;
