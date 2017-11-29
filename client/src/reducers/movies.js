const movies = (state = [], action) => {
  console.log(action);
  let moviesNonmatch;
  let movie;
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
    case 'CREATE_MOVIE_SCORE':
      moviesNonmatch = state.filter(movie => movie.id != action.movie_point.movie_id);
      movie = state.find(movie => movie.id == action.movie_point.movie_id)
      return [
        ...moviesNonmatch,
        {
          ...action.movie_point.movie,
          movie_points: [
            ...movie.movie_points.filter(mp => mp.id == action.movie_point.id),
            action.movie_point
          ]
        }
      ].sort((a,b) => a.id - b.id);
    case 'UPDATE_MOVIE_SCORE':
      moviesNonmatch = state.filter(movie => movie.id != action.movie_point.movie_id);
      movie = state.find(movie => movie.id == action.movie_point.movie_id)
      return [
        ...moviesNonmatch,
        {
          ...action.movie_point.movie,
          movie_points: [
            ...movie.movie_points.filter(mp => mp.id != action.movie_point.id),
            action.movie_point
          ].sort((a,b) => a.id - b.id)
        }
      ].sort((a,b) => a.id - b.id);
    default:
      return state;
  }
}

export default movies;
