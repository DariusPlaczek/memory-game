import React from "react";
import { useSelector } from "react-redux";

import Game from "../Components/Game/GameLogic";
import Win from "../Components/Game/Win";
import RightSidebar from "../Components/RightSidebar";
import LeftSidebar from '../Components/LeftSidebar'

function GamePage() {
  const { winValue } = useSelector((state) => state.win);

  const wellPlayer = () => {
    if (winValue) {
      return <Win />;
    }
    return <Game />;
  };

  return (
    <>
      {wellPlayer()}
      <RightSidebar />
      <LeftSidebar />
    </>
  );
}

export default GamePage;
