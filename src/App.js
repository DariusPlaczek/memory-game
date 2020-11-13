import React, {useState} from 'react';
import AudioPlayer from 'react-modular-audio-player';
import {listArray} from './Data';
import Board from './Board';
import './App.css';

let random = 0;
const card = [];
let playlist = [
	{
		src: "https://jsons.darius-design.de/memory/Sound/Ambient_Music_by_Michael-K_long.mp3",
		title: "Michael-K",
		artist: "Ambient_Music"
	},
	{
		src: "https://jsons.darius-design.de/memory/Sound/Inspiring-Ambient-Background.mp3",
		title: "Inspiring-Ambient-Background",
		artist: "StockMusicPro"
	}
];


function App() {
	
	const [start, setStart] = useState(true);
	const [cardsNumbers, setCardsNumbers] = useState(null);

	function randomPush(e) {

		const cardsNumber = e.target.id
		setCardsNumbers(cardsNumber)
		const newCardsArray = listArray.slice(0, cardsNumber);
		
		for (let i = 0; i < cardsNumber; i++) {
			random = Math.floor(Math.random() * Math.floor(newCardsArray.length));
			card.push(newCardsArray[random]);
			newCardsArray.splice(random, 1);
			card[i].id = i;
		}
 
		setStart(false);
	}

  return (
    <div className="main-container">
		{start ?
			<div className="before-start">
				<h2>Welcome to</h2>
				<h1> Memory-Game</h1>
				<div className="btn-container">
					<button id="36" className="btn slide" onClick={(e) => randomPush(e)} >Easy</button>
					<button id="64" className="slide" onClick={(e) => randomPush(e)} >Hard</button>
				</div>
			</div>
		 : <Board value={cardsNumbers}></Board> 
		 }

		<div className="musik-player">
			<AudioPlayer hideForward={true} hideRewind={true} audioFiles={playlist} />
		</div>
    </div>
  );
}

export {card};
export default App;