import { browserHistory } from 'react-router';

export default function sessionReducer(state = !!sessionStorage.jwt, action) {
  switch (action.type) {
    case 'LOG_IN_SUCCESS':
      // browserHistory.push('/'); !!!!!!!!!! might cause future issues
      return !!sessionStorage.jwt;
    default:
      return state;
  }
}
