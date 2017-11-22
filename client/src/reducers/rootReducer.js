import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  posts: postsReducer
})

export default rootReducer;
