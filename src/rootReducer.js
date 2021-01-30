import { combineReducers } from "redux";

import useDifficult from './ReduxStore/gameConfig';
import useWin from './ReduxStore/winReducer';

const rootReducer = combineReducers({
  difficult: useDifficult,
  win: useWin
});

export default rootReducer;