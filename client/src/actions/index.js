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

export function fetchMoviePoints(id) {
  return (dispatch) => {
    dispatch({type: 'STARTING_ADDING_MOVIE_POINTS'});
    return fetch(`/users/${id}/movie_points`)
      .then(resp => resp.json())
      .then(moviePoints => {
        dispatch({type: 'ADD_MOVIE_POINTS', moviePoints, movies: moviePoints.map(mp => mp.movie)})
      })
  }
}

export function fetchPostPoints(id) {
  return (dispatch) => {
    dispatch({type: 'STARTING_ADDING_POST_POINTS'});
    return fetch(`/users/${id}/post_points`)
      .then(resp => resp.json())
      .then(postPoints => {
        dispatch({type: 'ADD_POST_POINTS', postPoints, posts: postPoints.map(pp => pp.post)})
      })
  }
}

export function fetchCommentPoints(id) {
  return (dispatch) => {
    dispatch({type: 'STARTING_ADDING_COMMENT_POINTS'});
    return fetch(`/users/${id}/comment_points`)
      .then(resp => resp.json())
      .then(commentPoints => {
        dispatch({type: 'ADD_COMMENT_POINTS', commentPoints, comments: commentPoints.map(cp => cp.comment)})
      })
  }
}

export function toggleActive(commentId) {
  return {type: 'TOGGLE_ACTIVE', commentId};
}

export function createComment(comment) {
  return (dispatch) => {
    dispatch({type: 'START_ADDING_COMMENT'});
    return fetch('/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`},
      body: JSON.stringify({comment})
    }).then(resp => resp.json())
      .then(comment => dispatch({type: 'CREATE_COMMENT', comment}));
  }
}

export function logInUser(credentials) {
  return (dispatch) => {
    return sessionApi.login(credentials)
      .then(credentials => {
        sessionStorage.setItem('jwt', credentials.jwt);
        return dispatch({type: 'LOG_IN_SUCCESS', credentials});
    });
  }
}

export function signupUser(credentials) {
  return (dispatch) => {
    return fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: credentials})
    }).then(resp => resp.json())
      .then(credentials => {
        sessionStorage.setItem('jwt', credentials.jwt);
        return dispatch({type: 'LOG_IN_SUCCESS', credentials});
      })
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

export function createPoint(id, format, value) {
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
          value
        }
      })
    }).then(resp => resp.json())
      .then(content => dispatch({type: `CREATE_${format.toUpperCase()}_SCORE`, [`${format}_point`]: content}));
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
      .then(content => dispatch({type: `CREATE_${format.toUpperCase()}_SCORE`, [`${format}_point`]: content}));
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

export function createMovie(values) {
  return (dispatch) => {
    dispatch({type: "CREATING_Movie"});
    return fetch('/movies', {
      method: 'POST',
      headers: {
        'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({movie: values})
    }).then(resp => resp.json())
      .then(movie => dispatch({type: 'CREATE_MOVIE', movie}))
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

export function toggleEdit(commentId) {
  return {type: 'TOGGLE_EDIT', commentId}
}

export function updateComment(comment) {
  return (dispatch) => {
    dispatch({type: 'UPDATING_COMMENT'});
    return fetch(`/comments/${comment.id}`, {
      method: 'PATCH',
      headers: {
        'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({comment})
    }).then(resp => resp.json())
      .then(comment => dispatch({type: 'UPDATE_COMMENT', comment}))
  }
}

export function removeComment(id) {
  return (dispatch) => {
    dispatch({type: 'REMOVING_COMMENT'});
    return fetch(`/comments/${id}`, {
      method: "DELETE",
      headers: {
        'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`,
      },
    }).then(resp => resp.json())
      .then(comment => dispatch({type: 'UPDATE_COMMENT', comment}))
  }
}

export function updateSort(sortMethod) {
  return {type: 'UPDATE_SORT', sortMethod}
}
