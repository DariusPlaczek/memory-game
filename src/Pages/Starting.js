import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { gameMode } from "../ReduxStore/gameConfig";

function Starting() {
  const dispatch = useDispatch();

  return (
    <div className="before-start">
      <h2>Welcome to</h2>
      <h1> Memory-Game</h1>
      <div className="btn-container">
        <Link to="/game">
          <button id="36" className="btn slide" onClick={() => dispatch(gameMode({numberOfCards: 36, boardWidth: 660, gameDifficult: "E"}))}>Easy</button>
        </Link>
        <Link to="/game">
          <button id="64" className="slide" onClick={() => dispatch(gameMode({numberOfCards: 64, boardWidth: 880, gameDifficult: "H"}))}>Hard</button>
        </Link>
      </div>
    </div>
  );
}

export default Starting;



// function name(params) {
//   if (!window.indexedDB) {
//     window.alert('Ihr Browser unterstützt keine stabile IndexdDB version')
//   } else {
//     console.log(window.indexedDB);
//   }
// }


// var connection = window.indexedDB.open('notes', 1);

// connection.onsuccess = (e) => {
//   console.log('success');
//   var database = e.target.result;
//   var transaction = database.transaction(['notes']);
//   var objectStore = transaction.objectStore('notes');
//   var index = objectStore.index('title');
//   var request = index.get("Chrome");
//   request.onsuccess = (e) => {
//     console.info(e.target.result);
//   }
//   request.onerror = (e) => {
//     console.error(e.target.result);
//   }

// }

