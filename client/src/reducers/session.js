import { browserHistory } from 'react-router';

export default function sessionReducer(state = {
    loggedIn: !!sessionStorage.jwt
  }, action) {
  switch (action.type) {
    case 'LOG_IN_SUCCESS':
      return {
        loggedIn: !!sessionStorage.jwt,
        username: action.userInfo.username,
        email: action.userInfo.email,
        id: action.userInfo.id
      }
    case 'AUTHENTICATE_USER':
      if (!!sessionStorage.jwt) {
        return {
          loggedIn: !!sessionStorage.jwt,
          username: action.credentials.username,
          email: action.credentials.email,
          id: action.credentials.id
        }
      } else {
        return state;
      }
    case 'LOGOUT_USER':
      return {loggedIn: false}
    default:
      return state;
  }
}
