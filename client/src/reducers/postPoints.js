const postPoints = (state = [], action) => {
  //console.log(action);
  let postPointIndex;
  switch (action.type) {
    case 'LOG_IN_SUCCESS':
      return action.credentials.post_points;
    case 'AUTHENTICATE_USER':
      if (!!sessionStorage.jwt) {
        return action.credentials.post_points;
      } else {
        return state;
      }
    case 'ADD_POST_POINTS':
      return [
        ...state.filter(pp => !action.postPoints.find(app => pp.id === app.id)),
        ...action.postPoints
      ].sort((a,b) => a.id - b.id);
    case 'CREATE_POST_SCORE':
      return [
        ...state,
        action.post_point
      ];

    case 'UPDATE_POST_SCORE':
      postPointIndex = state.indexOf(state.find(pp => pp.id === action.post_point.id));
      return [
        ...state.slice(0, postPointIndex),
        action.post_point,
        ...state.slice(postPointIndex + 1)
      ];
    default:
      return state;
  }
}

export default postPoints;
