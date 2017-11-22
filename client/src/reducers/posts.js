const posts = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'START_ADDING_POSTS':
      return state;
    case 'ADD_POSTS':
      const postsNonmatch = state.filter(post => post.movie_id !== action.posts[0].movie_id);
      return [...postsNonmatch, ...action.posts].sort((a,b) => a.id > b.id);
    default:
      return state;
  }
}

export default posts;
