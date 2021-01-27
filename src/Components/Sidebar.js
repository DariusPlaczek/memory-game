import React, { useState, useEffect } from "react";

function Sidebar(props) {
  const [seconds, setSeconds] = useState(null);
	const [minutes, setMinutes] = useState(null);
	
	const {gameStart, winning, timeValue} = props;

  useEffect(
    function time() {
      if (gameStart && winning) {
        const updatedTime = new Date().getTime();
        const nowTime = updatedTime - timeValue;
        const sec = ("0" + (Math.floor(nowTime / 1000) % 60)).slice(-2);
        const min = ("0" + (Math.floor(nowTime / 60000) % 60)).slice(-2);

        const clock = setInterval(() => {
          setSeconds(sec);
          setMinutes(min);
        }, 1000);

        return () => clearInterval(clock);
      }
    },
    [seconds, gameStart, winning, timeValue]
  );

  return (
    <>
      <div className="round-time">
        <div className="time-text">Play Time</div>
        <div className="time-count">
          {minutes}:{seconds}{" "}
        </div>
      </div>

      <div className="round-count">
        <div className="count-text">Count</div>
        <div className="count">{props.count}</div>
      </div>
    </>
  );
}

export default Sidebar;
