const rootReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'STARTING_ADDING_MOVIES':
      
    case 'ADD_MOVIES':
      return {movies: action.movies};
    default:
      return state
  }

}

export default rootReducer;
