import { combineReducers } from 'redux';
import movies from './movies';
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
  movies,
  posts,
  comments
})

export default rootReducer;
