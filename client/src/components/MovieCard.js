import React from 'react';

const MovieCard = props => {

  function handleOnClick() {
    props.routeToMovieShow(props.movie.id)
  }

  return (
    <div className="movieCard" onClick={handleOnClick}>
      <p>{props.movie.title}</p>
    </div>
  )
}

export default MovieCard
