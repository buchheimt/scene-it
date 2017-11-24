const movies = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'START_ADDING_MOVIES':
      return state;
    case 'ADD_MOVIES':
      return action.movies;
    case 'ADD_MOVIE':
      const movieIndex = state.indexOf(state.find(movie => movie.id == action.movie.id));
      return [
        ...state.slice(0, movieIndex),
        action.movie,
        ...state.slice(movieIndex + 1)
      ]
    default:
      return state;
  }
}

export default movies;
