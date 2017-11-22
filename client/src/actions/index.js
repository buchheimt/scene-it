export function fetchMovies() {
  return (dispatch) => {
    dispatch({type: 'STARTING_ADDING_MOVIES'});
    return fetch('/movies')
      .then(resp => resp.json())
      .then(movies => dispatch({type: 'ADD_MOVIES', movies}));
  }
}

export function fetchPosts(movieId) {
  return (dispatch) => {
    dispatch({type: 'STARTING_ADDING_POSTS'});
    return fetch(`/posts?movie_id=${movieId}`)
      .then(resp => resp.json())
      .then(posts => dispatch({type: 'ADD_POSTS', posts}));
  }
}
