import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";

export default (initialState = {}) => {
  const state = initialState;

  return createStore(
    rootReducer,
    state,
    compose(applyMiddleware(thunkMiddleware))
  );
};
