import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import {card} from './App';
import './App.css';

const visible = [];
const targetNumber = [ null, null]

function Board(props) {
	
	const [verifyFirst, setVerifyFirst] = useState(null);
	const [verifySecond, setVerifySecond] = useState(null);
	const [noClick, setNoClick] = useState(false);
	const [count, setCount] = useState(0);
	const [firstClick, setFirstClick] = useState(true);
	const [verifyCardTrue, setVerifyCardTrue] = useState(false)
	const [gameStart, setGameStart] = useState(false);
	const [letTime, setLetTime] = useState(null);
	const [winning, setWinning] = useState(true);
	const [winningCount, setWinningCount] = useState(0);
	const [gameWidth, setGameWidth] = useState(660);
	
	useEffect(function setBoardWidth() {
		if (props.value === "64") {
			setGameWidth(880)
		} else {
			setGameWidth(660)
		}
	}, [props.value]);


	useEffect(() => {

			if (verifyFirst === verifySecond && verifyCardTrue) {
				setFirstClick(true);
				setNoClick(false);
				setVerifyCardTrue(false);
				setVerifyFirst(null);
				setVerifySecond(null);
				setWinningCount(winningCount + 1);
			}

			if (verifyFirst !== verifySecond && verifyCardTrue) {
				setTimeout(() => {
					setNoClick(false);
					setVerifyCardTrue(false);
					visible[targetNumber[0]] = false;
					visible[targetNumber[1]] = false;
					setFirstClick(true);
					setVerifyFirst(undefined);
					setVerifySecond(null);
				}, 1000);
			}
		
	}, [verifyFirst, verifySecond, verifyCardTrue, winningCount]);
	
	const gamePlay = (event) => {

		if (!gameStart) {
			setLetTime(new Date().getTime());
		}
		setGameStart(true);

		if (firstClick) {
			const idNumber = card[event.target.id].id;
			setVerifyFirst(card[event.target.id].key);
			setFirstClick(false);
			targetNumber[0] = idNumber;
			visible[idNumber] = true;
		} else {
			const idNumber = card[event.target.id].id;
			visible[idNumber] = true;
			targetNumber[1] = idNumber;
			setVerifySecond(card[event.target.id].key);
			setNoClick(true);
			setCount(count + 1);
			setVerifyCardTrue(true)
		}
	}

	const toManyClicks = () => {
		console.log('Wrong or to Many Clicks');
	}


	useEffect(function win() {
		(card.length/2 !== winningCount) ? setWinning(true) : setWinning(false);
	}, [winningCount]);


  return (
    <>
	{winning ? 

	<div className="right-sidebar">
		<Sidebar timeValue={letTime} gameStart={gameStart} winning={winning} count={count} ></Sidebar>
	</div>

	: <></>}
	{winning ? 
		<div className="game-board" style={{width: gameWidth}} >
			{card.map((cards, keys) => <div key={cards.id} className="card-column">
				<div id={cards.id} onClick={!visible[keys] && !noClick ? (event) => gamePlay(event) : toManyClicks } className="first"> 
				{visible[keys] ? <img src={cards.img} alt=""></img> : ''} </div></div>)}
		</div>
	: 	<div className="before-start">
			<h2>congratulations</h2>
			<h1 className="spaceLacing">You win</h1>
			<hr />
			<div className="count wins"><h3>It took you only</h3><h5>{count}</h5><h3>moves!</h3></div> 

		</div>
	}
    </>
  );
}

export default Board;