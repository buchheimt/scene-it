const movies = (state = [], action) => {
  console.log(action);
  let movieIndex;
  let movie;
  switch (action.type) {
    case 'START_ADDING_MOVIES':
      return state;
    case 'ADD_MOVIES':
      return action.movies;
    case 'ADD_MOVIE':
      movieIndex = state.indexOf(state.find(movie => movie.id == action.movie.id));
      return [
        ...state.slice(0, movieIndex),
        action.movie,
        ...state.slice(movieIndex + 1)
      ]
    case 'CREATE_MOVIE':
      return [
        ...state,
        action.movie
      ]
    case 'ADD_MOVIE_POINTS':
      return [
        ...state.filter(movie => !action.movies.find(aMovie => movie.id == aMovie.id)),
        ...action.movies
      ].sort((a,b) => a.id - b.id)
    case 'CREATE_MOVIE_SCORE':
      movieIndex = state.indexOf(state.find(movie => movie.id == action.movie_point.movie.id));
      return [
        ...state.slice(0, movieIndex),
        action.movie_point.movie,
        ...state.slice(movieIndex + 1)
      ].sort((a,b) => a.id - b.id);
    case 'UPDATE_MOVIE_SCORE':
      movieIndex = state.indexOf(state.find(movie => movie.id == action.movie_point.movie.id));
      return [
        ...state.slice(0, movieIndex),
        action.movie_point.movie,
        ...state.slice(movieIndex + 1)
      ].sort((a,b) => a.id - b.id);
    case 'CREATE_POST':
      movie = state.find(movie => movie.id == action.post.movie_id);
      movieIndex = state.indexOf(movie);
      return [
        ...state.slice(0, movieIndex),
        {...movie, post_count: movie.post_count + 1},
        ...state.slice(movieIndex + 1)
      ]
    default:
      return state;
  }
}

export default movies;
