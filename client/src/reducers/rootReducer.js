import { combineReducers } from 'redux';
import movies from './movies';
import posts from './posts';
import comments from './comments';
import session from './session';

const rootReducer = combineReducers({
  movies,
  posts,
  comments,
  session
})

export default rootReducer;
