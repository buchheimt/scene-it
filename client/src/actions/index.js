import sessionApi from '../api/SessionApi';

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

export function toggleActive(commentId) {
  return {type: 'TOGGLE_ACTIVE', commentId};
}

export function addComment(comment) {
  return (dispatch) => {
    dispatch({type: 'START_ADDING_COMMENT'});
    return fetch('/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`},
      body: JSON.stringify({comment})
    }).then(resp => resp.json())
      .then(comment => dispatch({type: 'ADD_COMMENT', comment}));
  }
}

export function loginSuccess(userInfo) {
  return {type: 'LOG_IN_SUCCESS', userInfo}
}

export function logInUser(credentials) {
  return (dispatch) => {
    return sessionApi.login(credentials)
      .then(resp => {
        sessionStorage.setItem('jwt', resp.jwt);
        dispatch(loginSuccess({
          username: resp.username,
          email: resp.email
        }));
    });
  }
}

export function authenticateUser() {
  return (dispatch) => {
    dispatch({type: "STARTING_AUTHENTICATION"});
    return fetch('/authenticate', {
      method: 'GET',
      headers: {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
    }).then(resp => resp.json())
      .then(credentials => {
        return dispatch({type: 'AUTHENTICATE_USER', credentials});
      });
  }
}

export function logoutUser() {
  sessionStorage.clear()
  return {type: 'LOGOUT_USER'};
}
