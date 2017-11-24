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
    default:
      return state;
  }
}

export default comments;
