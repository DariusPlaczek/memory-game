import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import useCreateCards from "./useCreateCards";
import { iWon, addCount, gameStop } from "../../ReduxStore/winReducer";


function GameLogic() {
  const dispatch = useDispatch();
  const { cards } = useCreateCards();
  const { numberOfCards, boardWidth } = useSelector((state) => state.difficult);
  const [firstClick, setFirstClick] = useState(false);
  const [addTheCards, setAddTheCards] = useState(true);
  const [showFirstCard, setShowFirstCard] = useState({ cardId: 0, cardKey: 0 });
  const [showSecondCard, setShowSecondCard] = useState({ cardId: 0, cardKey: 0 });

  const [visible, setVisible] = useState(Array(numberOfCards).fill(false));
  const [stopClicks, setStopClicks] = useState(false);

  const checkTheCards = useCallback(() => {
    if (showFirstCard.cardKey !== showSecondCard.cardKey) {
      const visibleArray = visible.slice();

      setTimeout(() => {
        visibleArray[showFirstCard.cardId] = false;
        visibleArray[showSecondCard.cardId] = false;
        setVisible(visibleArray);
        setStopClicks(false);
      }, 1000);
    } else {
      setStopClicks(false);
    }
  }, [showFirstCard, showSecondCard, visible]);

  useEffect(() => {
    if (!addTheCards) {
      checkTheCards();
      setAddTheCards(true);
    }
  }, [addTheCards, checkTheCards]);

  useEffect(() => {
    if (!visible.includes(false)) {
      dispatch(gameStop())
      dispatch(iWon());
    }
  }, [visible, dispatch]);

  const flipCard = (event) => {
    const visibleArray = visible.slice();
    const cardTarget = cards[event.target.id].id;
    const cardKey = cards[event.target.id].pairKey;

    if (stopClicks) {
      console.error("WHAT.....STOP IT");
      return;
    }

    if (!firstClick) {
      visibleArray[cardTarget] = true;
      setVisible(visibleArray);
      setShowFirstCard({ cardId: cardTarget, cardKey: cardKey });
      setFirstClick(true);
    } else {
      visibleArray[cardTarget] = true;
      setVisible(visibleArray);
      setShowSecondCard({ cardId: cardTarget, cardKey: cardKey });
      setFirstClick(false);
      setAddTheCards(false);
      setStopClicks(true);
      dispatch(addCount())
      return
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
      <div id={key} onClick={(event) => flipCard(event)} className="first shadow-3" >
        {visible[value.id] ? <img src={value.img} alt=""></img> : ""}
      </div>
    );
  };

  return (
    <div className="game-board" style={{ width: boardWidth }}>
      {cards &&
        cards.map((value, key) => (
          <div key={value.id} className="card-column shadow-10">
            {isClickable(value, key)}
            <p>{value.pairKey}</p>
          </div>
        ))}
    </div>
  );
}

export default GameLogic;
