import React from 'react';
import { NavLink } from 'react-router-dom';

const MyLinks = props => {
  console.log(props.history)
  return (
    <div className="text-center">
      <h5>My Scored:</h5>
      <NavLink to={`/users/${props.userId}/movie_points`}>Movies</NavLink>
      <NavLink to={`/users/${props.userId}/post_points`}>Posts</NavLink>
      <NavLink to={`/users/${props.userId}/comment_points`}>Comments</NavLink>
    </div>
  )
}

export default MyLinks;
