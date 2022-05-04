export const calcReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state + parseInt(action.value);
    case "SUBTRACT":
      return state - parseInt(action.value);
    case "CLEAR":
      return 0;
    default:
      return state;
  }
}