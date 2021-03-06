import React,{ useEffect } from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { startNewGame } from '../../../ReduxStore/gameResults'

function EndGame() {

  const dispatch = useDispatch();
  const {resultList} = useSelector((state) => state.gameResult)

  useEffect(() => {
    if (resultList.length !== 0) {
      return localStorage.setItem("memory", JSON.stringify(resultList))
    }
  }, [resultList])

  return (
    <div className="before-start">
      <h2>congratulations</h2>
      <h1 className="spaceLacing">You win</h1>
      <hr />
      <div className="count wins">
      <Link to="/react/memory">
          <button id="36" className="btn-fullsize slide" onClick={() => dispatch(startNewGame())}>NEW GAME</button>
        </Link>
      </div>
    </div>
  );
}

export default EndGame;
