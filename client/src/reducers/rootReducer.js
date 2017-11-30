import { combineReducers } from 'redux';
import movies from './movies';
import moviePoints from './moviePoints';
import posts from './posts';
import comments from './comments';
import session from './session';

const rootReducer = combineReducers({
  movies,
  moviePoints,
  posts,
  comments,
  session
})

export default rootReducer;
