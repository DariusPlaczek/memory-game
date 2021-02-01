import { combineReducers } from "redux";

import useGameConfig from './ReduxStore/gameConfig';
import useGameResults from './ReduxStore/gameResults';

const rootReducer = combineReducers({
  difficult: useGameConfig,
  win: useGameResults
});

export default rootReducer;