const comments = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'START_ADDING_COMMENTS':
      return state;
    case 'ADD_POST':
      if (!!action.post.comments) {
        const commentsNonmatch = state.filter(comment => comment.post_id != action.post.id);
        return [...commentsNonmatch, ...action.post.comments].sort((a,b) => a.id > b.id);
      } else {
        return state;
      }
    case 'TOGGLE_ACTIVE':
      state.forEach(comment => comment.active = false);
      let comment = state.find(comment => comment.id == action.commentId);
      comment.active = true;
      return [
        ...state.slice(0, state.indexOf(comment)),
        comment,
        ...state.slice(state.indexOf(comment) + 1)
      ]
    case 'ADD_COMMENT':
      return [
        ...state,
        action.comment
      ]
    default:
      return state;
  }
}

export default comments;
