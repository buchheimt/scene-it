const comments = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'START_ADDING_COMMENTS':
      return state;
    case 'ADD_POST':
      console.log('!!!state', state)
      console.log("!!!new comments for this post", action.post.comments)
      if (!!action.post.comments) {
        const commentsNonmatch = state.filter(comment => comment.post_id != action.post.id);
        console.log('!!!unsorted',[...commentsNonmatch, ...action.post.comments])
        console.log([...commentsNonmatch, ...action.post.comments].sort((a,b) => a.id > b.id));
        return [...commentsNonmatch, ...action.post.comments].sort((a,b) => a.id - b.id);
      } else {
        return state;
      }
    case 'TOGGLE_ACTIVE':
      let comment = state.find(comment => comment.id == action.commentId);
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
    default:
      return state;
  }
}

export default comments;
