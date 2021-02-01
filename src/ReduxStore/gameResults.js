import localStore from '../Data/localStore'

const SET_WINNING = "/gameResults/SET_WINNING";
const ADD_COUNT = "/gameResults/ADD_COUNT";
const SET_GAMESTOP = "/gameResults/SET_GAMESTOP"
const ADD_NEW_RESULT = "/gameResults/ADD_NEW_RESULT"
const START_NEW_GAME = "/gameResults/START_NEW_GAME"


const INITIAL_STATE = {
  winValue: false,
  gameStop: false,
  count: 0,
  resultList: localStore()
};

export const iWon = () => ({
  type: SET_WINNING,
});

export const addCount = () => ({
  type: ADD_COUNT,
});

export const gameStop = () => ({
  type: SET_GAMESTOP
});

export const addResult = (event) => ({
  type: ADD_NEW_RESULT, payload: event
})

export const startNewGame = () => ({
  type: START_NEW_GAME
})


function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_WINNING:
      return {
        ...state,
        winValue: true,
      };
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case SET_GAMESTOP:
      return {
        ...state,
        gameStop: true,
      }
    case ADD_NEW_RESULT:
      return {
        ...state,
        resultList: [...state.resultList, {count: state.count, time: action.payload.time, difficult: action.payload.difficult}]
      }
    case START_NEW_GAME:
      return {
        ...state,
        winValue: false,
        gameStop: false,
        count: 0,
      }
    default:
      return state;
  }
}

export default reducer;
