import * as act from '../constants/calc_modes';
import { evaluate, add } from 'mathjs';


function strip_zeroes(state, action) {
  if (state.display === '0') {
    return action.value;
  } else {
    return state.display + action.value;
  }
}

function calculate_total(ops_list) {
  return evaluate(ops_list);
}

/* export const calcReducer = (state, action) => {
  
  const last_input = (state) => {
    alert(state.ops_list);
  }

  let new_total;
  switch (action.type) {
    case modes.NUMBER_ENTRY: {
      if (state.mode == modes.DISPLAY_INPUT) {
        last_input(state);
        // Just add to the current input if we're already inputting.
        return { ...state, display: strip_zeroes(state, action) }
      } else if (state.mode == modes.DISPLAY_TOTAL) {
        // Remove the displayed total if on total mode and switch to input.
        return { ...state, display: action.value, mode: modes.DISPLAY_INPUT }
      }
    }
    case modes.EQUALS:
      let total = evaluate(state.ops_list + state.display);
      return { ...state, display: 0, ops_list: state.ops_list+"="+total, total: total, mode: modes.DISPLAY_TOTAL }
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
    case modes.DECIMAL:
      if (state.display.includes('.')) {
        return state;
      } else {
        return {...state, display: state.display+"."}
      }
    case modes.CLEAR:
      return { ...state, display: 0, mode: modes.DISPLAY_INPUT };
    case modes.ALLCLEAR:
      return { ...state, total: 0, display: 0, ops_list: "", mode: modes.DISPLAY_TOTAL };
    default:
      return state;
  }
} */

function was_operation(action) {
  if (action == null) {
    return false;
  }


  let operations = [
    act.ADD,
    act.SUBTRACT,
    act.DIVIDE,
    act.MULTIPLY
  ]

  if (operations.includes(action.type)) {
    return true;
  } else {
    return false;
  }
}

function is_blank_slate(state) {
  if (state.display === '') {
    return true;
  } else {
    return false;
  }
}

function adjust_for_trailing_decimal(state) {
  if (state.display[state.display.length - 1] === '.') {
    return { ...state, display: state.display + "0" };
  } else {
    return state;
  }
}

function process_negatives(state, action) {
  // Placeholder. Will probably need an 'is_negative' flag for the display to handle this.
}

function process_operations(state, action) {

  // All math operations work the same, so we just need to adjust formatting for the four main ops.
  let icon;
  switch (action.type) {
    case act.ADD:
      icon = '+';
      break;
    case act.SUBTRACT:
      icon = '-';
      break;
    case act.MULTIPLY:
      icon = '*';
      break;
    case act.DIVIDE:
      icon = '/';
      break;
  }

  state = adjust_for_trailing_decimal(state);

  // If the last action was equals, start a new equation using the results of the last one.
  if (state.last_action.type === act.EQUALS) {
    return { ...state, last_action: action, display: '', ops_list: state.display + icon }
  }

  // If the last action was also an operation, we just replace it with the new one (you can't add and then subtract with no input)
  if (was_operation(state.last_action)) {
    return { ...state, last_action: action, display: '', ops_list: state.ops_list.slice(0, -1) + icon }
  } else {
    return { ...state, last_action: action, display: '', ops_list: state.ops_list + state.display + icon }
  }
}

export const calcReducer = (state, action) => {
  switch (action.type) {
    case act.NUMBER_ENTRY:
      if (state.last_action.type === act.EQUALS) {
        return { ...state, ops_list: '', last_action: action, display: action.value.toString() }
      }
      // Eliminate a leading 0 when entering numbers.
      let input = strip_zeroes(state, action);
      return { ...state, last_action: action, display: input.toString() }
    case act.ADD:
    case act.SUBTRACT:
    case act.MULTIPLY:
    case act.DIVIDE:
      return process_operations(state, action);
    case act.EQUALS:
      if (state.last_action.type === act.EQUALS) {
        return state;
      }

      state = adjust_for_trailing_decimal(state);

      // Make sure any blank equals values are counted as zero (so if the user hits equals before filling in a value it does not error).
      let equals_input = state.display === '' ? '0' : state.display;

      let total = evaluate(state.ops_list + equals_input);
      return { ...state, display: total.toString(), last_action: action, ops_list: state.ops_list + equals_input + "=" + total }
    case act.DECIMAL:
      if (is_blank_slate(state)) {
        return { ...state, display: '0.' }
      }

      // Prevent adding two decimals to a number.
      if (state.display.includes('.')) {
        return state;
      } else {
        return { ...state, last_action: action, display: state.display + "." }
      }
    case act.ALLCLEAR:
      return { ...state, ops_list: '', last_action: action, display: '' }
    default:
      return state;
  }
}