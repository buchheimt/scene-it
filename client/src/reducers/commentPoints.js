const commentPoints = (state = [], action) => {
  //console.log(action);
  let commentPointIndex;
  switch (action.type) {
    case 'START_ADDING_COMMENT_POINTS':
      return state;
    case 'START_CREATING_POINT':
      return state;
    case 'START_UPDATING_POINT':
      return state;
    case 'LOG_IN_SUCCESS':
      return action.credentials.comment_points;
    case 'AUTHENTICATE_USER':
      if (!!sessionStorage.jwt) {
        return action.credentials.comment_points;
      } else {
        return state;
      }
    case 'ADD_COMMENT_POINTS':
      return [
        ...state.filter(cp => !action.commentPoints.find(acp => cp.id === acp.id)),
        ...action.commentPoints
      ].sort((a,b) => a.id - b.id)
    case 'CREATE_COMMENT_SCORE':
      return [
        ...state,
        action.comment_point
      ];

    case 'UPDATE_COMMENT_SCORE':
      commentPointIndex = state.indexOf(state.find(cp => cp.id === action.comment_point.id));
      return [
        ...state.slice(0, commentPointIndex),
        action.comment_point,
        ...state.slice(commentPointIndex + 1)
      ];
    default:
      return state;
  }
}

export default commentPoints;
