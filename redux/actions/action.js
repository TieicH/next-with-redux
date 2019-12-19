import * as actionsTypes from "./types";

export const changeText = text => {
  return {
    type: actionsTypes.TEST_REDUX,
    text
  };
};
