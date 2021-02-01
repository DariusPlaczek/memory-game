import React from "react";

import { useSelector } from "react-redux";

function LeftSidebar() {
  const { resultList } = useSelector((state) => state.win);

 const copyEntity = resultList.slice()
 const entity  = copyEntity.reverse().slice(0,5)

  return (
    <div className="leftsidebar-container">
      <div className="lastgames-title shadow-5">
        <h3>My Last Games</h3>
      </div>
        {entity && entity.map((value, key) => (
          <div key={`lg-${key}`} className="lastgame-list shadow-2">
            <div className="lastgame-key col-20">{key + 1}</div>
            <div className="lastgame-object col-20">{value.count}</div>
            <div className="lastgame-object col-40">{value.time}</div>
            <div className="lastgame-object col-20">{value.difficult}</div>
          </div>
        ))}
    </div>
  );
}

export default LeftSidebar;
