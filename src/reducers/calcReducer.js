import * as modes from '../constants/calc_modes';
import { evaluate, mode } from 'mathjs';


function strip_zeroes(state, action) {
  if (state.display == 0) {
    return action.value;
  } else {
    return state.display + action.value;
  }
}

function calculate_total(ops_list) {
  return evaluate(ops_list);
}

export const calcReducer = (state, action) => {
  let new_total;
  switch (action.type) {
    case modes.NUMBER_ENTRY: {
      if (state.mode == modes.DISPLAY_INPUT) {
        // Just add to the current input if we're already inputting.
        return { ...state, display: strip_zeroes(state, action) }
      } else if (state.mode == modes.DISPLAY_TOTAL) {
        // Remove the displayed total if on total mode and switch to input.
        return { ...state, display: action.value, mode: modes.DISPLAY_INPUT }
      }
    }
    case modes.EQUALS:
      let total = evaluate(state.ops_list + state.display);
      return { ...state, display: 0, ops_list: "", total: total, mode: modes.DISPLAY_TOTAL }
    case modes.ADD:
      if (state.mode === modes.DISPLAY_INPUT) {
        return { ...state, display: 0, ops_list: state.ops_list + state.display + "+", mode: modes.DISPLAY_TOTAL }
      } else {
        // CLear the ops list if we're continuing right after displaying a total.
        return { ...state, display: 0, ops_list: state.total + "+", mode: modes.DISPLAY_TOTAL }
      }
    case modes.SUBTRACT:
      if (state.mode === modes.DISPLAY_INPUT) {
        return { ...state, display: 0, ops_list: state.ops_list + state.display + "-", mode: modes.DISPLAY_TOTAL }
      } else {
        // CLear the ops list if we're continuing right after displaying a total.
        return { ...state, display: 0, ops_list: state.total + "-", mode: modes.DISPLAY_TOTAL }
      }

    case modes.CLEAR:
      return { ...state, display: 0, mode: modes.DISPLAY_INPUT };
    case modes.ALLCLEAR:
      return { ...state, total: 0, display: 0, ops_list: "", mode: modes.DISPLAY_TOTAL };
    default:
      return state;
  }
}