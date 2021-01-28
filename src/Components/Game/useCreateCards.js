import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import { listArray } from "../Data/data";

let cacheArray = [];

function useCreateCards() {
  const bufferNumber = useSelector((state) => state.difficult.cards);
  const [numberOfCards, setNumberOfCards] = useState(bufferNumber);
  const [{ cards }, setCards] = useState({ cards: [] });
  const bufferArray = listArray.slice(0, numberOfCards);

  const ran = useCallback(() => {
    for (let i = numberOfCards; i > 0; i--) {
      const random = Math.floor(Math.random() * i);
      //setCards({cards: cards.push(bufferArray[random])})
      cacheArray.push(bufferArray[random]);
      setCards({ cards: cacheArray });
      bufferArray.splice(random, 1);
      setNumberOfCards((prev) => prev - 1);
    }
  }, [bufferArray, numberOfCards]);

  useEffect(() => {
    ran();
  }, [ran]);

  return { cards };
}

export default useCreateCards;
