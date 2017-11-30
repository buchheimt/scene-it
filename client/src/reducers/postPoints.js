const postPoints = (state = [], action) => {
  console.log(action);
  let moviePoints;
  let moviesNonmatch;
  let moviePointsNonmatch;
  let movieIndex;
  let postPointIndex;
  let moviePointIndex;
  let movie;
  switch (action.type) {
    case 'ADD_MOVIES':
      moviePoints = action.movies.reduce((output, movie) => {
        output = [
          ...output,
          ...movie.movie_points
        ]
        return output
      }, [])
      return [
        ...state.filter(mp => !moviePoints.find(amp => mp.id == amp.id)),
        ...moviePoints
      ].sort((a,b) => a.id - b.id)
    case 'ADD_MOVIE':
      moviePointsNonmatch = state.filter(mp => mp.movie_id != action.movie.id);
      return [
        ...moviePointsNonmatch,
        action.movie.movie_points
      ]
    case 'ADD_MOVIE_POINTS':
      return [
        ...state.filter(mp => !action.moviePoints.find(amp => mp.id == amp.id)),
        ...action.moviePoints
      ].sort((a,b) => a.id - b.id)
    case 'CREATE_MOVIE_SCORE':
      return [
        ...state,
        action.movie_point
      ].sort((a,b) => a.id - b.id);

    case 'UPDATE_MOVIE_SCORE':
      moviePointIndex = state.indexOf(state.find(mp => mp.id == action.movie_point.id));
      return [
        ...state.slice(0, moviePointIndex),
        action.movie_point,
        ...state.slice(moviePointIndex + 1)
      ]
    default:
      return state;
  }
}

export default postPoints;
