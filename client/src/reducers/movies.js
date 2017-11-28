const movies = (state = [], action) => {
  console.log(action);
  let moviesNonmatch;
  switch (action.type) {
    case 'START_ADDING_MOVIES':
      return state;
    case 'ADD_MOVIES':
      return action.movies.sort((a,b) => a.id - b.id);
    case 'ADD_MOVIE':
      const movieIndex = state.indexOf(state.find(movie => movie.id == action.movie.id));
      return [
        ...state.slice(0, movieIndex),
        action.movie,
        ...state.slice(movieIndex + 1)
      ]
    case 'ADD_POINT_TO_MOVIE':
      moviesNonmatch = state.filter(movie => movie.id != action.movie.id);
      return [
        ...moviesNonmatch,
        action.movie
      ].sort((a,b) => a.id - b.id);
    case 'SUBTRACT_POINT_FROM_MOVIE':
      moviesNonmatch = state.filter(movie => movie.id != action.movie.id);
      return [
        ...moviesNonmatch,
        action.movie
      ].sort((a,b) => a.id - b.id);
    default:
      return state;
  }
}

export default movies;
