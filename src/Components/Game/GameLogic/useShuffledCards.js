import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { listArray } from "../../../Data/data";

function useShuffledCards() {
  const [{ cards }, setCards] = useState({ cards: [] });
  const { numberOfCards } = useSelector((state) => state.gameConfig);

  useEffect(() => {
    const copyOfCards = listArray.slice(0, numberOfCards);

    for (let i = numberOfCards - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [copyOfCards[i], copyOfCards[random]] = [copyOfCards[random], copyOfCards[i]];
    }
    setCards({ cards: copyOfCards });

  }, [numberOfCards]);

  return { cards };
}

export default useShuffledCards;
