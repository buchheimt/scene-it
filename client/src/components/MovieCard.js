import React from 'react';

const MovieCard = props => (
  <div className="movieCard" onClick={props.handleOnClick}>
    <p>{props.movie.title}</p>
  </div>
)

export default MovieCard
