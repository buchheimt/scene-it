import React from 'react';
import MovieCard from '../components/MovieCard';

class HomePage extends React.Component {

  handleOnClick = () => {
    alert('clicked!');
  }

  render() {
    const moviesArray = [
      {title: "nemo"},
      {title: "shrek"},
      {title: "jumanji"}]
    const movies = moviesArray.map(movie => (
      <MovieCard movie={movie} handleOnClick={this.handleOnClick} />
    ))

    return (
      <div>
        {movies}
      </div>
    )
  }
}

export default HomePage;
