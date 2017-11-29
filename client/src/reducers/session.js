import { browserHistory } from 'react-router';

export default function sessionReducer(state = {
    loggedIn: !!sessionStorage.jwt,
    sort: 'recent'
  }, action) {
  switch (action.type) {
    case 'LOG_IN_SUCCESS':
      return {
        sort: state.sort,
        loggedIn: !!sessionStorage.jwt,
        username: action.userInfo.username,
        email: action.userInfo.email,
        id: action.userInfo.id
      }
    case 'AUTHENTICATE_USER':
      if (!!sessionStorage.jwt) {
        return {
          sort: state.sort,
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
    case 'SWITCH_TO_RECENT':
      return {...state, sort: 'recent'};
    case 'SWITCH_TO_HIGH_SCORE':
      return {...state, sort: 'popular'};
    case 'SWITCH_TO_LOW_SCORE':
      return {...state, sort: 'unpopular'};
    case 'SWITCH_TO_MOST_POINTS':
      return {...state, sort: 'controversial'};
    default:
      return state;
  }
}
