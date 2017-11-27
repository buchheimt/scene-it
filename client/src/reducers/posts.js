const posts = (state = [], action) => {
  console.log(action);
  let postIndex;
  switch (action.type) {
    case 'START_ADDING_POSTS':
      return state;
    case 'ADD_MOVIE':
      if (!!action.movie.posts) {
        const postsNonmatch = state.filter(post => post.movie_id !== action.movie.id);
        return [...postsNonmatch, ...action.movie.posts].sort((a,b) => a.id > b.id);
      } else {
        return state;
      }
    case 'ADD_POST':
      postIndex = state.indexOf(state.find(post => post.id == action.post.id));
      return [
        ...state.slice(0, postIndex),
        action.post,
        ...state.slice(postIndex + 1)
      ]
    case 'ADD_COMMENT':
      postIndex = state.indexOf(state.find(post => post.id == action.comment.post_id));
      return [
        ...state.slice(0, postIndex),
        {...state[postIndex], users: [
          ...state[postIndex]['users'],
          action.comment.user
        ].sort((a,b) => a.id - b.id)},
        ...state.slice(postIndex + 1)
      ]
    default:
      return state;
  }
}

export default posts;
