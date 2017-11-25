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
    default:
      return state;
  }
}
