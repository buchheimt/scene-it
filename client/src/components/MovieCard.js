import React from 'react';

const MovieCard = props => {

  function handleOnClick() {
    props.routeToMovieShow(props.movie.id)
  }

  return (
    <div className="movieCard" onClick={handleOnClick}>
      <h4>{props.movie.title}</h4>
      <p>{props.movie.description.split(" ").slice(0, 40).join(' ')}...</p>
    </div>
  )
}

export default MovieCard;
