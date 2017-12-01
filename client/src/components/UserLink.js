import React from 'react';
import { NavLink } from 'react-router-dom';

const UserLink = props => {
  return (
    <NavLink
      className="navLink"
      to={`/users/${props.userId}/${props.format + props.extension}`}
    >
      {`${props.format[0].toUpperCase() + props.format.slice(1)}s`}
    </NavLink>
  )
}

export default UserLink;
