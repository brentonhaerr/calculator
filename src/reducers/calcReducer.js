export const calcReducer = (state, action) => {
  let new_total;
  switch (action.type) {
    case "SET_INPUT":
      // Add check here to prevent leading zeroes.
      if (state.display == "0") {
        return { ...state, display: action.value }
      } else {
        return { ...state, display: state.display + action.value }
      }
    case "ADD":
      new_total = state.total + parseInt(state.display);
      return { ...state, total: new_total, display: new_total }
    case "SUBTRACT":
      new_total = state.total - parseInt(state.display)
      return { ...state, total: new_total, display: new_total }
    case "CLEAR":
      return { ...state, display: 0 };
    case "ALLCLEAR":
      return { ...state, total: 0, display: 0 };
    default:
      return state;
  }
}