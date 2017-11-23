const comments = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'START_ADDING_COMMENTS':
      return state;
    case 'ADD_COMMENTS':
      if (!!action.comments[0]) {
        const commentsNonmatch = state.filter(comment => comment.post_id !== action.comments[0].post_id);
        return [...commentsNonmatch, ...action.comments].sort((a,b) => a.id > b.id);
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default comments;
