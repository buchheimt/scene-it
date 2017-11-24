export function fetchMovies() {
  return (dispatch) => {
    dispatch({type: 'STARTING_ADDING_MOVIES'});
    return fetch('/movies')
      .then(resp => resp.json())
      .then(movies => dispatch({type: 'ADD_MOVIES', movies}));
  }
}

export function fetchMovie(movieId) {
  return (dispatch) => {
    dispatch({type: 'STARTING_ADDING_MOVIE'});
    return fetch(`/movies/${movieId}`)
      .then(resp => resp.json())
      .then(movie => dispatch({type: 'ADD_MOVIE', movie}));
  }
}

export function fetchPost(postId) {
  return (dispatch) => {
    dispatch({type: 'STARTING_ADDING_POST'});
    return fetch(`/posts/${postId}`)
      .then(resp => resp.json())
      .then(post => dispatch({type: 'ADD_POST', post}));
  }
}
