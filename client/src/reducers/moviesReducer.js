const moviesReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'START_ADDING_MOVIES':
      return state;
    case 'ADD_MOVIES':
      return action.movies;
    default:
      return state;
  }
}

export default moviesReducer;
