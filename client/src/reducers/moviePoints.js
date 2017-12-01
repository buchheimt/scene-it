const moviePoints = (state = [], action) => {
  //console.log(action);
  let moviePointIndex;
  switch (action.type) {
    case 'START_ADDING_MOVIE_POINTS':
      return state;
    case 'START_CREATING_POINT':
      return state;
    case 'START_UPDATING_POINT':
      return state;
    case 'LOG_IN_SUCCESS':
      return action.credentials.movie_points;
    case 'AUTHENTICATE_USER':
      if (!!sessionStorage.jwt) {
        return action.credentials.movie_points;
      } else {
        return state;
      }
    case 'ADD_MOVIE_POINTS':
      return [
        ...state.filter(mp => !action.moviePoints.find(amp => mp.id === amp.id)),
        ...action.moviePoints
      ].sort((a,b) => a.id - b.id);
    case 'CREATE_MOVIE_SCORE':
      return [
        ...state,
        action.movie_point
      ];

    case 'UPDATE_MOVIE_SCORE':
      moviePointIndex = state.indexOf(state.find(mp => mp.id === action.movie_point.id));
      return [
        ...state.slice(0, moviePointIndex),
        action.movie_point,
        ...state.slice(moviePointIndex + 1)
      ];
    default:
      return state;
  }
}

export default moviePoints;
