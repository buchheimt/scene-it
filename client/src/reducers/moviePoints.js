const movie_points = (state = [], action) => {
  console.log(action);
  let moviesNonmatch;
  let movieIndex;
  let postPointIndex;
  let movie;
  switch (action.type) {
    case 'ADD_MOVIE_POINTS':
      return [
        ...state.filter(mp => !action.moviePoints.find(amp => mp.id == amp.id)),
        ...action.moviePoints
      ].sort((a,b) => a.id - b.id)
    default:
      return state;
  }
}

export default movie_points;
