const comments = (state = [], action) => {
  console.log(action);
  let comment;
  let commentsNonmatch;
  let newComments;
  switch (action.type) {
    case 'START_ADDING_COMMENTS':
      return state;
    case 'ADD_POST':
      if (!!action.post.comments) {
        commentsNonmatch = state.filter(comment => comment.post_id != action.post.id);
        return [
          ...commentsNonmatch,
          ...action.post.comments
        ].sort((a,b) => a.id - b.id);
      } else {
        return state;
      }
    case 'TOGGLE_ACTIVE':
      comment = state.find(comment => comment.id == action.commentId);
      newComments = state.map(comment => {
        return {...comment, active: false};
      })
      return [
        ...newComments.slice(0, state.indexOf(comment)),
        {...comment, active: !comment.active},
        ...newComments.slice(state.indexOf(comment) + 1)
      ]
    case 'ADD_COMMENT':
      return [
        ...state,
        action.comment
      ]
    case 'UPDATE_COMMENT':
      commentsNonmatch = state.filter(comment => comment.id != action.comment.id);
      return [
        ...commentsNonmatch,
        action.comment
      ].sort((a,b) => a.id - b.id);
    case 'ADD_COMMENT_POINTS':
      return [
        ...state.filter(comment => !action.comments.find(aComment => comment.id == aComment.id)),
        ...action.comments
      ].sort((a,b) => a.id - b.id)
    case 'CREATE_COMMENT_SCORE':
      commentsNonmatch = state.filter(comment => comment.id != action.comment_point.comment_id);
      return [
        ...commentsNonmatch,
        action.comment_point.comment
      ].sort((a,b) => a.id - b.id);
    case 'UPDATE_COMMENT_SCORE':
      commentsNonmatch = state.filter(comment => comment.id != action.comment_point.comment_id);
      return [
        ...commentsNonmatch,
        action.comment_point.comment
      ].sort((a,b) => a.id - b.id);
    case 'TOGGLE_EDIT':
      comment = state.find(comment => comment.id == action.commentId);
      newComments = state.map(comment => {
        return {...comment, active: false};
      })
      return [
        ...newComments.slice(0, state.indexOf(comment)),
        {...comment, editable: !comment.editable},
        ...newComments.slice(state.indexOf(comment) + 1)
      ]
    default:
      return state;
  }
}

export default comments;
