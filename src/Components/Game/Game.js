import React, { useState, useEffect, useCallback } from "react";
import {useSelector} from 'react-redux'

import useCreateCards from "./useCreateCards";

function Game() {
  const { cards } = useCreateCards();
  const howManyCards = useSelector((state) => state.difficult.cards)
  const [firstClick, setFirstClick] = useState(false);
  const [addTheCards, setAddTheCards] = useState(true);
  const [showFirstCard, setShowFirstCard] = useState({cardId: 0, cardKey: 0});
	const [showSecondCard, setShowSecondCard] = useState({cardId: 0, cardKey: 0});

	const [visible, setVisible] = useState(Array(howManyCards).fill(false))
  const [stopClicks, setStopClicks] = useState(false)

  const [winningCount, setWinningCount] = useState(0);

  const checkTheCards = useCallback(() => {

    if (showFirstCard.cardKey !== showSecondCard.cardKey) {
      const visibleArray = visible.slice()

      setTimeout(() => {
        visibleArray[showFirstCard.cardId] = false;
        visibleArray[showSecondCard.cardId] = false;
        setVisible(visibleArray)
        setStopClicks(false)
      }, 1000);
    } else {
      setStopClicks(false)
      setWinningCount((state) => state + 1)
    }

  }, [showFirstCard, showSecondCard, visible]);

  useEffect(() => {
		if (!addTheCards) {
      checkTheCards();
      setAddTheCards(true);
    }
  }, [addTheCards, checkTheCards]);


  const flipCard = (event) => {

    const visibleArray = visible.slice()
    const cardTarget = cards[event.target.id].id
    const cardKey = cards[event.target.id].key

    console.log(event.target.id);
    console.log(cardTarget);

    if (stopClicks) {
      console.error('WHAT.....STOP IT');
      return
    }

    if (!firstClick) {
      visibleArray[cardTarget] = true
			setVisible(visibleArray)
			setShowFirstCard({cardId: cardTarget, cardKey: cardKey});
			setFirstClick(true);
    } else {
      visibleArray[cardTarget] = true
			setVisible(visibleArray)
      setShowSecondCard({cardId: cardTarget, cardKey: cardKey});
      setFirstClick(false);
      setAddTheCards(false);
      setStopClicks(true)
    }
  };

  const isClickable = (value, key) => {

    if (visible[value.id]) {
      return (
        <div id={key} className="first">
          <img src={value.img} alt={value.img}></img>
        </div>
      );
    }

    return (
      <div id={key} onClick={(event) => flipCard(event)} className="first">
        {visible[value.id] ? <img src={value.img} alt=""></img> : ''}
      </div>
    )
  }


  return (
    <div className="game-board">
      {cards &&
        cards.map((value, key) => (
          <div key={value.id} className="card-column">
              {isClickable(value, key)}
          </div>
        ))}
    </div>
  );
}

export default Game;
