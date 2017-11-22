import { combineReducers } from 'redux';
import movies from './movies';
import posts from './posts';

const rootReducer = combineReducers({
  movies,
  posts
})

export default rootReducer;
