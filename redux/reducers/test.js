import * as ActionType from "../actions/types";

export const initialState = {
  textPrueba: "1"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionType.TEST_REDUX:
      return { ...state, textPrueba: action.text };
    default:
      return state;
  }
}
