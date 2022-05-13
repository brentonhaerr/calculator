import * as act from '../constants/calc_actions';
import * as modes from '../constants/calc_modes';
import { evaluate, add, mode } from 'mathjs';

export const newCalcReducer = (state, action) => {
  switch (action.type) {
    case act.NUMBER_ENTRY:
      return process_numbers(state, action);
    case act.DECIMAL:
      return process_decimal(state, action);
    case act.EQUALS:
      return process_equals(state, action);
    case act.ALLCLEAR:
      return process_clear(state, action);
    case act.SUBTRACT:
      return process_subtraction_operation(state, action);
    case act.ADD:
    case act.DIVIDE:
    case act.MULTIPLY:
      return process_non_subtraction_operations(state, action);
    default:
      return state;
  }
}

function process_numbers(state, action) {
  // if we are currently displaying a total, start a new display
  if (state.mode === modes.SHOW_TOTAL) {
    return { ...state, last_action: action, display: action.value, ops_list: '', mode: modes.SHOW_INPUT }
  }

  // Replace the default 0 with whatever we are typing.
  if (state.display === '0') {
    return { ...state, last_action: action, display: action.value }
  }
  // if we are already in the middle of entering numbers, add a new one
  return { ...state, last_action: action, display: state.display + action.value };
}

function process_clear(state, action) {
  return { ...state, ops_list: '', last_action: action, display: '', mode: modes.SHOW_TOTAL }
}

function process_decimal(state, action) {
  // Start with a decimal and a number below 0 if we are leading off from total
  if (state.mode === modes.SHOW_TOTAL) {
    return { ...state, last_action: action, display: '0.', ops_list: '', mode: modes.SHOW_INPUT }
  }

  // Prevent adding a decimal if one already exists
  if (state.display.includes('.')) {
    return state;
  }

  // Otherwise add a decimal
  return { ...state, last_action: action, display: state.display+'.' }
}

function process_equals(state, action) {

  // Do nothing if we're in show total mode.
  if (state.mode === modes.SHOW_TOTAL) {
    return state;
  }

  // Do nothing if incomplete equation is present
  if (state.ops_list === '') {
    return state;
  }

  // Correct error if operation left in last value
  if (state.display === '') {
    state = { ...state, ops_list: state.ops_list.slice(0, -1) }
  }

  // Otherwise, return the total, add it to display and ops list, and set
  // the mode to modes.SHOW_TOTAL
  let total = evaluate(state.ops_list + state.display);
  return { ...state, last_action: action, display: total, ops_list: state.ops_list + state.display + "=" + total, mode: modes.SHOW_TOTAL }
}

function process_non_subtraction_operations(state, action) {
  // We separate subtraction since it can also swap back and forth between
  // negative and positive, so it works differently.
  return state;
}

function process_subtraction_operation(state, action) {
  // Create a new equation from the previous total if we are on show_total
  if (state.mode === modes.SHOW_TOTAL) {
    return { ...state, mode: modes.SHOW_INPUT, display: '', ops_list: state.display + '-', last_action: action }
  }
  // Swap back and forth between negatives if we have blank display
  if (state.display === '') {
    return { ...state, last_action: action, display: '-' }
  } else if (state.display === '-') {
    return { ...state, last_action: action, display: '' }
  }

  // Subtract by default
  return { ...state, last_action: action, display: '', ops_list: state.ops_list + state.display + '-' }
}