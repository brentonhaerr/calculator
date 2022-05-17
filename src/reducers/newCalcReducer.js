import * as act from '../constants/calc_actions';
import * as modes from '../constants/calc_modes';
import { evaluate } from 'mathjs';

export const newCalcReducer = (state, action) => {
  switch (action.type) {
    case act.NUMBER_ENTRY:
      return process_numbers(state, action);
    case act.DECIMAL:
      return process_decimal(state, action);
    case act.EQUALS:
      return process_equals(state, action);
    case act.ALLCLEAR:
      return process_all_clear(state, action);
    case act.SUBTRACT:
      return process_subtraction_operation(state, action);
    case act.ADD:
    case act.DIVIDE:
    case act.MULTIPLY:
      return process_non_subtraction_operations(state, action);
    case act.CLEAR:
      return process_display_clear(state, action);
    default:
      return state;
  }
}

function process_numbers(state, action) {
  // if we are currently displaying a total, start a new display
  if (state.mode === modes.SHOW_TOTAL) {
    return { ...state, last_action: action, display: action.value, ops_list: '', mode: modes.SHOW_INPUT }
  }

  // Prevent leading zeroes.
  if (state.display === '0') {
    return { ...state, last_action: action, display: action.value }
  }
  // if we are already in the middle of entering numbers, add a new one
  return { ...state, last_action: action, display: state.display + action.value };
}

function process_display_clear(state, action) {
  if (state.mode === modes.SHOW_TOTAL) {
    return { ...state, ops_list: '', last_action: action, display: '0', mode: modes.SHOW_TOTAL }
  } else {
    return { ...state, last_action: action, display: '0', mode: modes.SHOW_INPUT }
  }
}

function process_all_clear(state, action) {
  return { ...state, ops_list: '', last_action: action, display: '0', mode: modes.SHOW_TOTAL }
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
  return { ...state, last_action: action, display: state.display + '.' }
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

  // Strip last operator if no value is input.
  if (state.display === '') {
    state = { ...state, ops_list: state.ops_list.slice(0, -1) }
  }

  // Otherwise, return the total, add it to display and ops list, and set
  // the mode to modes.SHOW_TOTAL
  let total = evaluate(state.ops_list + state.display);
  total = Math.round((total + Number.EPSILON) * 10000000) / 10000000;
  return { ...state, last_action: action, display: total, ops_list: state.ops_list + state.display + "=" + total, mode: modes.SHOW_TOTAL }
}

function process_non_subtraction_operations(state, action) {
  // We separate subtraction since it can also swap back and forth between
  // negative and positive, so it works differently.
  let icon;
  switch (action.type) {
    case act.ADD:
      icon = '+';
      break;
    case act.MULTIPLY:
      icon = '*';
      break;
    case act.DIVIDE:
      icon = '/';
      break;
    default:
      alert("Non-standard action type reached by process_non_subtraction_operations");
      break;
  }

  // Start a new equation if immediately after receiving a total
  if (state.mode === modes.SHOW_TOTAL) {
    return { ...state, last_action: action, display: '', ops_list: state.display + icon, mode: modes.SHOW_INPUT }
  }

  // Swap operations if pressed after another operation
  if ([act.ADD, act.MULTIPLY, act.DIVIDE, act.SUBTRACT].includes(state.last_action.type)) {
    return { ...state, last_action: action, display: '', ops_list: state.ops_list.slice(0, -1) + icon }
  }

  // Add the operation to the ops_list otherwise
  return { ...state, last_action: action, display: '', ops_list: state.ops_list + state.display + icon }
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