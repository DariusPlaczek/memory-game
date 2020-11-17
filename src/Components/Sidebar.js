import React, {useState, useEffect} from 'react';


function Sidebar(props) {
	const [seconds, setSeconds] = useState(null);
	const [minutes, setMinutes] = useState(null);

	useEffect(function time() {

		if (props.gameStart && props.winning) {

			const updatedTime = new Date().getTime();
			const nowTime = updatedTime - props.timeValue;
			const sec = ("0" + (Math.floor(nowTime / 1000) % 60)).slice(-2);
			const min = ("0" + (Math.floor(nowTime / 60000) % 60)).slice(-2);

				const clock = setInterval(() => {
					setSeconds(sec);
					setMinutes(min);
				}, 1000);

				return () => clearInterval(clock);
		}
	}, [seconds, props.gameStart, props.winning, props.timeValue]);

	return (
		<>
			<div className="round-time">
				<div className="time-text">Play Time</div>
				<div className="time-count" >{minutes}:{seconds} </div>
			</div>

			<div className="round-count">
				<div className="count-text">Count</div>
				<div className="count">{props.count}</div>
			</div>


		</>
	)
}

export default Sidebar;
