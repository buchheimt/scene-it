import React from 'react';

class MovieShowPage extends React.Component {

  render() {

    const moviesArray = [
      {title: "nemo", id: 1},
      {title: "shrek", id: 2},
      {title: "jumanji", id: 3}]


    const movie = moviesArray.find(movie => movie.id === 1 )
    return (
      <div>
        <p>{movie.title}</p>
      </div>
    )
  }
}

export default MovieShowPage;
