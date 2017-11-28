const posts = (state = [], action) => {
  console.log(action);
  let post;
  let postIndex;
  let postsNonmatch;
  let commentPointIndex;
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
    case 'CREATE_POST':
      return [
        ...state,
        {
          id: action.post.id,
          title: action.post.title,
          content: action.post.content,
          movie_id: action.post.movie_id
        }
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
    case 'ADD_POINT_TO_POST':
      postsNonmatch = state.filter(post => post.id != action.post.id);
      return [
        ...postsNonmatch,
        action.post
      ].sort((a,b) => a.id - b.id);
    case 'SUBTRACT_POINT_FROM_POST':
      postsNonmatch = state.filter(post => post.id != action.post.id);
      return [
        ...postsNonmatch,
        action.post
      ].sort((a,b) => a.id - b.id);
    case 'CREATE_COMMENT_SCORE':
      postIndex = state.indexOf(state.find(post => post.id == action.comment_point.comment.post_id));
      return [
        ...state.slice(0, postIndex),
        {
          ...state[postIndex],
          comment_points: [
            ...state[postIndex].comment_points,
            action.comment_point
          ]
        },
        ...state.slice(postIndex + 1)
      ]
    case 'UPDATE_COMMENT_SCORE':
      postIndex = state.indexOf(state.find(post => post.id == action.comment_point.comment.post_id));
      post = state[postIndex]
      commentPointIndex = post.comment_points.indexOf(post.comment_points.find(cp => cp.id == action.comment_point.id));

      return [
        ...state.slice(0, postIndex),
        {
          ...state[postIndex],
          comment_points: [
            ...post.comment_points.slice(0, commentPointIndex),
            action.comment_point,
            ...post.comment_points.slice(commentPointIndex + 1)
          ]
        },
        ...state.slice(postIndex + 1)
      ]
    default:
      return state;
  }
}

export default posts;
