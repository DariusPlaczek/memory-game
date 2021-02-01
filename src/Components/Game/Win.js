import React,{ useEffect } from "react";
import {Link} from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux'

import {startNewGame} from '../../ReduxStore/winReducer'


function Win() {

  const dispatch = useDispatch();
  const {resultList} = useSelector((state) => state.win)

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
      <Link to="/">
          <button id="36" className="btn-fullsize slide" onClick={() => dispatch(startNewGame())}>NEW GAME</button>
        </Link>
      </div>
    </div>
  );
}

export default Win;
