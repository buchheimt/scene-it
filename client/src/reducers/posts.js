const posts = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'START_ADDING_POSTS':
      return state;
    case 'ADD_MOVIE':
      const postsNonmatch = state.filter(post => post.movie_id !== action.movie.id);
      console.log(action.movie.posts)
      return [...postsNonmatch, ...action.movie.posts].sort((a,b) => a.id > b.id);
    default:
      return state;
  }
}

export default posts;
