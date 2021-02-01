import { combineReducers } from "redux";

import useGameConfig from './ReduxStore/gameConfig';
import useGameResults from './ReduxStore/gameResults';

const rootReducer = combineReducers({
  gameConfig: useGameConfig,
  gameResult: useGameResults
});

export default rootReducer;