const DIFFICULT_GAME = "difficult/DIFFICULT_GAME";

export const gameMode = (event) => ({ type: DIFFICULT_GAME, payload: event });

const INITIAL_STATE = {
  cards: 36,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DIFFICULT_GAME:
      return {
        ...state,
        cards: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
