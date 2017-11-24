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

export function fetchComments(postId) {
  return (dispatch) => {
    dispatch({type: 'STARTING_ADDING_COMMENTS'});
    return fetch(`/comments?post_id=${postId}`)
      .then(resp => resp.json())
      .then(comments => dispatch({type: 'ADD_COMMENTS', comments}));
  }
}
