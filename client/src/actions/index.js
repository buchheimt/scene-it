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

export function addPoint(id, format) {
  return (dispatch) => {
    return fetch(`/${format}_points`, {
      method: 'POST',
      headers: {
        'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        [`${format}_point`]: {
          [`${format}_id`]: id,
          value: 1
        }
      })
    }).then(resp => resp.json())
      .then(content => dispatch({type: `UPDATE_${format.toUpperCase()}_SCORE`, [`${format}_point`]: content}));
  }
}

export function subtractPoint(id, format) {
  return (dispatch) => {
    return fetch(`/${format}_points`, {
      method: 'POST',
      headers: {
        'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        [`${format}_point`]: {
          [`${format}_id`]: id,
          value: -1
        }
      })
    }).then(resp => resp.json())
      .then(content => dispatch({type: `UPDATE_${format.toUpperCase()}_SCORE`, [`${format}_point`]: content}));
  }
}

export function updatePoint(id, format, value) {
  return (dispatch) => {
    return fetch(`/${format}_points/${id}`, {
      method: 'PATCH',
      headers: {
        'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        [`${format}_point`]: {
          value
        }
      })
    }).then(resp => resp.json())
      .then(content => dispatch({type: `UPDATE_${format.toUpperCase()}_SCORE`, [`${format}_point`]: content}));
  }
}

export function createPost(values) {
  return (dispatch) => {
    dispatch({type: "CREATING_POST"});
    return fetch('/posts', {
      method: 'POST',
      headers: {
        'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({post: values})
    }).then(resp => resp.json())
      .then(post => dispatch({type: 'CREATE_POST', post}))
  }
}
