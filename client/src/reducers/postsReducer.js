const postsReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'START_ADDING_POSTS':
      return state;
    case 'ADD_POSTS':
      return action.posts;
    default:
      return state;
  }
}

export default postsReducer;
