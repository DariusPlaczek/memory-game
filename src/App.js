import React, {useState} from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";

import {listArray} from './Components/Data';
import Musikplayer from './Components/Musikplayer/Musikplayer'
import Board from './Components/Board';
import './App.css';

import rootReducer from "./rootReducer";
import "./App.css";

const store = createStore(rootReducer);


let random = 0;
const card = [];


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
		 <Musikplayer />
    </div>
  );
}

export {card};
export default App;