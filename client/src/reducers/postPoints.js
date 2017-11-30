const postPoints = (state = [], action) => {
  console.log(action);
  let postPoints;
  let postsNonmatch;
  let postPointsNonmatch;
  let postIndex;
  let postPointIndex;
  let moviePointIndex;
  let post;
  switch (action.type) {
    case 'ADD_MOVIE':
      postPointsNonmatch = state.filter(pp => pp.movie_id != action.movie.id);
      return [
        ...postPointsNonmatch,
        ...action.movie.post_points
      ]
    case 'ADD_POST':

    case 'ADD_POST_POINTS':
      return [
        ...state.filter(mp => !action.moviePoints.find(amp => mp.id == amp.id)),
        ...action.moviePoints
      ].sort((a,b) => a.id - b.id)
    case 'CREATE_POST_SCORE':
      return [
        ...state,
        action.movie_point
      ].sort((a,b) => a.id - b.id);

    case 'UPDATE_POST_SCORE':
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
