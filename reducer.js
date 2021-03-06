import { TOGGLE_SWITCH, INCREASE, DECREASE, MULTIPLY } from "./action.js";
const initialState = {
  toggle: false,
  counter: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case MULTIPLY:
      return {
        ...state,
        counter: state.counter * 2,
      };
    default:
      return state;
  }
};
