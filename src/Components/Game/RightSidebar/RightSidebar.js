import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addResult } from "../../../ReduxStore/gameResults";

function RightSidebar() {
  const [seconds, setSeconds] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [newDate, setNewDate] = useState(null);

  const { count, gameStop } = useSelector((state) => state.win);
  const { gameDifficult } = useSelector((state) => state.difficult)

  const dispatch = useDispatch();

  useEffect(() => {
    setNewDate(new Date().getTime());
  }, []);

  useEffect(
    function time() {
      if (!gameStop) {
        const updatedTime = new Date().getTime();
        const nowTime = updatedTime - newDate;
        const sec = ("0" + (Math.floor(nowTime / 1000) % 60)).slice(-2);
        const min = ("0" + (Math.floor(nowTime / 60000) % 60)).slice(-2);

        const clock = setInterval(() => {
          setSeconds(sec);
          setMinutes(min);
        }, 1000);

        return () => clearInterval(clock);
      }
    },
    [seconds, gameStop, newDate]
  );


  useEffect(() => {

    if (gameStop) {
      dispatch(addResult({time: `${minutes}:${seconds}`, difficult: gameDifficult}))
    }

  }, [gameStop, dispatch, seconds, minutes, gameDifficult]);

  return (
    <div className="right-sidebar">
      <div className="round-time shadow-10">
        <div className="time-text">Play Time</div>
        <div className="time-count">
          {minutes}:{seconds}{" "}
        </div>
      </div>

      <div className="round-count shadow-10">
        <div className="count-text">Count</div>
        <div className="count">{count}</div>
      </div>
    </div>
  );
}

export default RightSidebar;
