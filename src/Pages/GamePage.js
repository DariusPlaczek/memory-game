import React from "react";
import { useSelector } from "react-redux";

import {GameBoard, RightSidebar, EndGame} from '../Components/Game/'
//import EndGame from "../Components/Game/EndGame";

function GamePage() {
  const { winValue } = useSelector((state) => state.win);

  const wellPlayer = () => {
    if (winValue) {
      return <EndGame />;
    }
    return <GameBoard />;
  };

  return (
    <>
      {wellPlayer()}
      <RightSidebar />
    </>
  );
}

export default GamePage;
