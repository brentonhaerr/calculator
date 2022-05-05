export const calcReducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      // Add check here to prevent leading zeroes.
      if (state.input == "0") {
        return { ...state, input: action.value }
      } else {
        return { ...state, input: state.input + action.value }
      }
    case "ADD":
      return { ...state, total: state.total + parseInt(action.value), input: 0 }
    case "SUBTRACT":
      return { ...state, total: state.total - parseInt(action.value), input: 0 }
    case "CLEAR":
      return { ...state, input: 0 };
    case "ALLCLEAR":
      return { ...state, total: 0, input: 0 };
    default:
      return state;
  }
}