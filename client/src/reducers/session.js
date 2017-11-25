import { browserHistory } from 'react-router';

export default function sessionReducer(state = {
    loggedIn: !!sessionStorage.jwt
  }, action) {
  switch (action.type) {
    case 'LOG_IN_SUCCESS':
      return {
        loggedIn: !!sessionStorage.jwt,
        username: action.userInfo.username,
        email: action.userInfo.email
      }
    case 'AUTHENTICATE_USER':
    if (!!sessionStorage.jwt) {
      return {
        loggedIn: !!sessionStorage.jwt,
        username: action.credentials.username,
        email: action.credentials.email
      }
    } else {
      return state;
    }
    default:
      return state;
  }
}
