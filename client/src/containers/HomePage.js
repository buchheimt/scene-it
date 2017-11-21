import React from 'react';
import MovieCard from '../components/MovieCard';

class HomePage extends React.Component {
  render() {

    const moviesArray = ["nemo", "shrek", "jumanji"]
    const movies = moviesArray.map(movie => (
      <MovieCard movie={movie} />
    ))

    return (
      <div>
        {movies}
      </div>
    )
  }
}

export default HomePage;
