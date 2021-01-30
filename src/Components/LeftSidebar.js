import React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function LeftSidebar() {
  const { resultList } = useSelector((state) => state.win);
  const entity = [];

  const reverseList = useMemo(() => {
    return sliceAndReverse(entity);
  }, [entity])

  return (
    <div className="leftsidebar-container">
      <div className="lastgames-title shadow-5">
        <h3>My Last Games</h3>
      </div>
        {reverseList.map((value, key) => (
          <div key={`lg-${key}`} className="lastgame-list shadow-2">
            <div className="lastgame-key col-20">{key + 1}</div>
            <div className="lastgame-object col-20">{value[0]}</div>
            <div className="lastgame-object col-40">{value[1]}</div>
            <div className="lastgame-object col-20">{value[2]}</div>
          </div>
        ))}
    </div>
  );
}

function sliceAndReverse(entity) {
  if (localStorage.getItem("memory") === null) {
    return
  }

  entity = JSON.parse(localStorage.getItem("memory")).reverse().slice(0,5)
  console.log(entity);
  return entity
}
// function sliceAndReverse(value) {
//   const entity = value.reverse().slice(0,5)
//   return entity
// }

export default LeftSidebar;
