const comments = (state = [], action) => {
  console.log(action);
  let comment;
  let commentsNonmatch;
  switch (action.type) {
    case 'START_ADDING_COMMENTS':
      return state;
    case 'ADD_POST':
      if (!!action.post.comments) {
        commentsNonmatch = state.filter(comment => comment.post_id != action.post.id);
        return [...commentsNonmatch, ...action.post.comments].sort((a,b) => a.id - b.id);
      } else {
        return state;
      }
    case 'TOGGLE_ACTIVE':
      comment = state.find(comment => comment.id == action.commentId);
      let newComments = state.map(comment => {
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
    case 'ADD_POINT_TO_COMMENT':
      commentsNonmatch = state.filter(comment => comment.id != action.comment.id);
      return [
        ...commentsNonmatch,
        action.comment
      ].sort((a,b) => a.id - b.id);
    case 'SUBTRACT_POINT_FROM_COMMENT':
      commentsNonmatch = state.filter(comment => comment.id != action.comment.id);
      return [
        ...commentsNonmatch,
        action.comment
      ].sort((a,b) => a.id - b.id);
    default:
      return state;
  }
}

export default comments;
