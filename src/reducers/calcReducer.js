export const calcReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {total: state.total + parseInt(action.value), input: 0}
    case "SUBTRACT":
      return {total: state.total - parseInt(action.value), input: 0}
    case "CLEAR":
      return {total: state.total, input: 0};
    default:
      return state;
  }
}