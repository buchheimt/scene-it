const comments = (state = [], action) => {
  //console.log(action);
  let comment;
  let commentIndex;
  let newComments;
  switch (action.type) {
    case 'START_ADDING_COMMENTS':
      return state;
    case 'ADD_POST':
      if (!!action.post.comments) {
        return [
          ...state.filter(comment => comment.post_id != action.post.id),
          ...action.post.comments
        ].sort((a,b) => a.id - b.id);
      } else {
        return state;
      }
    case 'ADD_COMMENTS':
      return [
        ...state.filter(comment => !action.comments.find(aComment => aComment.id == comment.id)),
        ...action.comments
      ].sort((a,b) => a.id > b.id);
    case 'TOGGLE_ACTIVE':
      comment = state.find(comment => comment.id == action.commentId);
      newComments = state.map(comment => {
        return {...comment, active: false, editable: false};
      });
      return [
        ...newComments.slice(0, state.indexOf(comment)),
        {...comment, active: !comment.active, editable: false},
        ...newComments.slice(state.indexOf(comment) + 1)
      ];
    case 'CREATE_COMMENT':
      return [
        ...state,
        action.comment
      ];
    case 'UPDATE_COMMENT':
      commentIndex = state.indexOf(state.find(comment => comment.id == action.comment.id));
      return [
        ...state.slice(0, commentIndex),
        action.comment,
        ...state.slice(commentIndex + 1)
      ];
    case 'ADD_COMMENT_POINTS':
      return [
        ...state.filter(comment => !action.comments.find(aComment => comment.id == aComment.id)),
        ...action.comments
      ].sort((a,b) => a.id - b.id)
    case 'CREATE_COMMENT_SCORE':
      commentIndex = state.indexOf(state.find(comment => comment.id == action.comment_point.comment.id));
      return [
        ...state.slice(0, commentIndex),
        action.comment_point.comment,
        ...state.slice(commentIndex + 1)
      ];
    case 'UPDATE_COMMENT_SCORE':
      commentIndex = state.indexOf(state.find(comment => comment.id == action.comment_point.comment.id));
      return [
        ...state.slice(0, commentIndex),
        action.comment_point.comment,
        ...state.slice(commentIndex + 1)
      ];
    case 'TOGGLE_EDIT':
      comment = state.find(comment => comment.id == action.commentId);
      newComments = state.map(comment => {
        return {...comment, active: false, editable: false};
      });
      return [
        ...newComments.slice(0, state.indexOf(comment)),
        {...comment, active: false, editable: !comment.editable},
        ...newComments.slice(state.indexOf(comment) + 1)
      ];
    default:
      return state;
  }
}

export default comments;
