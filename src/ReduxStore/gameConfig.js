const DIFFICULT_GAME = "difficult/DIFFICULT_GAME";

export const gameMode = (event) => ({ type: DIFFICULT_GAME, payload: event });

const INITIAL_STATE = {
  numberOfCards: 12,
  boardWidth: 660,
  gameDifficult: "E"
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DIFFICULT_GAME:
      return {
        ...state,
    //  numberOfCards: action.payload.numberOfCards,
      numberOfCards: action.payload.numberOfCards,
      boardWidth: action.payload.boardWidth,
      gameDifficult: action.payload.gameDifficult
      };

    default:
      return state;
  }
}

export default reducer;
