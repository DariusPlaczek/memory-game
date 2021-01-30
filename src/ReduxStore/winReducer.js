const SET_WINNING = "/win/SET_WINNING";
const ADD_COUNT = "/win/ADD_COUNT";
const SET_GAMESTOP = "/win/SET_GAMESTOP"
const ADD_NEW_RESULT = "/win/ADD_NEW_RESULT"
const START_NEW_GAME = "/win/START_NEW_GAME"

const INITIAL_STATE = {
  winValue: false,
  gameStop: false,
  count: 0,
//  resultList: [1,2,3,4,5,6,7,8,9]
  resultList: [
    {
      count: "19", 
      time: "99:99",
      difficult: 'H'
    },
    {
      count: "29", 
      time: "99:99",
      difficult: 'H'
    },
    {
      count: "39", 
      time: "99:99",
      difficult: 'H'
    },
    {
      count: "49", 
      time: "99:99",
      difficult: 'E'
    },
    {
      count: "59", 
      time: "99:99",
      difficult: 'H'
    },
    {
      count: "69", 
      time: "99:99",
      difficult: 'E'
    },
    {
      count: "79", 
      time: "99:99",
      difficult: 'E'
    }
]
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
        // resultList: state.resultList.push([{count: state.count, time: action.payload}])
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