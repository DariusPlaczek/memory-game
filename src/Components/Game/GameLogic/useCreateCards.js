import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { listArray } from "../../../Data/data";


function useCreateCards() {
  let cacheArray = [];
  const [{ cards }, setCards] = useState({ cards: [] });
  const { numberOfCards } = useSelector((state) => state.difficult);
  const randomNumberArray = [...Array(numberOfCards).keys()].sort(() => .5 - Math.random())
  const [countArray, setCountArray] = useState(0)

  useEffect(() => {

    if (countArray !== numberOfCards) {
      for (let i = 0; i < numberOfCards; i++) {
        cacheArray.push(listArray[randomNumberArray[i]]);
        setCards({ cards: cacheArray });
        setCountArray((prev) => prev + 1)
      }
    }
  }, [numberOfCards, randomNumberArray, cacheArray, countArray])


  return { cards };
}

export default useCreateCards;
