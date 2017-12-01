const posts = (state = [], action) => {
  console.log(action);
  let post;
  let postIndex;
  let postsNonmatch;
  switch (action.type) {
    case 'START_ADDING_POSTS':
      return state;
    case 'ADD_MOVIE':
      if (!!action.movie.posts) {
        const postsNonmatch = state.filter(post => post.movie_id !== action.movie.id);
        return [
          ...postsNonmatch,
          ...action.movie.posts
        ].sort((a,b) => a.id > b.id);
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
    case 'CREATE_POST':
      return [
        ...state,
        action.post
      ]
    case 'ADD_POST_POINTS':
      return [
        ...state.filter(post => !action.posts.find(aPost => post.id == aPost.id)),
        ...action.posts
      ].sort((a,b) => a.id - b.id)
    case 'CREATE_POST_SCORE':
      postIndex = state.indexOf(state.find(post => post.id == action.post_point.post.id));
      return [
        ...state.slice(0, postIndex),
        action.post_point.post,
        ...state.slice(postIndex + 1)
      ].sort((a,b) => a.id - b.id);
    case 'UPDATE_POST_SCORE':
      postIndex = state.indexOf(state.find(post => post.id == action.post_point.post.id));
      return [
        ...state.slice(0, postIndex),
        action.post_point.post,
        ...state.slice(postIndex + 1)
      ].sort((a,b) => a.id - b.id);
    case 'CREATE_COMMENT':
      post = state.find(post => post.id == action.comment.post_id);
      postIndex = state.indexOf(post);
      return [
        ...state.slice(0, postIndex),
        {...post, comment_count: post.comment_count + 1},
        ...state.slice(postIndex + 1)
      ]
    default:
      return state;
  }
}

export default posts;
