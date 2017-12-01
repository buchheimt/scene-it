export default function sessionReducer(state = {
    loggedIn: !!sessionStorage.jwt,
    sortMethod: 'recent'
  }, action) {
  //console.log(action);
  switch (action.type) {
    case 'STARTING_AUTHENTICATION':
      return state;
    case 'LOG_IN_SUCCESS':
      return {
        sortMethod: state.sortMethod,
        loggedIn: !!sessionStorage.jwt,
        username: action.credentials.username,
        id: action.credentials.id,
      };
    case 'LOG_IN_FAIL':
      return {
        sortMethod: state.sortMethod,
        loggedIn: !!sessionStorage.jwt,
        loginFailure: action.error
      }
    case 'AUTHENTICATE_USER':
      if (!!sessionStorage.jwt) {
        return {
          ...state,
          sortMethod: state.sortMethod,
          loggedIn: !!sessionStorage.jwt,
          username: action.credentials.username,
          id: action.credentials.id
        };
      } else {
        return state;
      }
    case 'LOGOUT_USER':
      return {loggedIn: false, sortMethod: 'recent'};
    case 'UPDATE_SORT':
      return {...state, sortMethod: action.sortMethod};
    default:
      return state;
  }
}
