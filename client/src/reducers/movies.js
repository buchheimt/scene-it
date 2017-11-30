const movies = (state = [], action) => {
  console.log(action);
  let moviesNonmatch;
  let movieIndex;
  let postPointIndex;
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
    // case 'CREATE_POST_SCORE':
    //   movieIndex = state.indexOf(state.find(movie => movie.id == action.post_point.post.movie_id));
    //   return [
    //     ...state.slice(0,movieIndex),
    //     {
    //       ...state[movieIndex],
    //       post_points: [
    //         ...state[movieIndex].post_points,
    //         action.post_point
    //       ]
    //     },
    //     ...state.slice(movieIndex + 1)
    //   ]
    // case 'UPDATE_POST_SCORE':
    //   movieIndex = state.indexOf(state.find(movie => movie.id == action.post_point.post.movie_id));
    //   movie = state[movieIndex]
    //   postPointIndex = movie.post_points.indexOf(movie.post_points.find(pp => pp.id == action.post_point.id));
    //
    //   return [
    //     ...state.slice(0, movieIndex),
    //     {
    //       ...state[movieIndex],
    //       post_points: [
    //         ...movie.post_points.slice(0, postPointIndex),
    //         action.post_point,
    //         ...movie.post_points.slice(postPointIndex + 1)
    //       ]
    //     },
    //     ...state.slice(movieIndex + 1)
    //   ]
    default:
      return state;
  }
}

export default movies;
