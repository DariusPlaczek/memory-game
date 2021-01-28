import { combineReducers } from "redux";

import useDifficult from './ReduxStore/gameDifficult';

const rootReducer = combineReducers({
  difficult: useDifficult
});

export default rootReducer;