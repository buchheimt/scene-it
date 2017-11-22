const rootReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'STUB_MOVIES':
      return action.stateStub;
    default:
      return state
  }

}

export default rootReducer;
