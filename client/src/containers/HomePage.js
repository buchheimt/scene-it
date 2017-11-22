import React from 'react';
import MovieCard from '../components/MovieCard';

class HomePage extends React.Component {

  routeToMovieShow = id => {
    console.log(this)
    this.props.history.push(`movies/${id}`)
  }

  render() {
    const moviesArray = [
      {title: "nemo", id: 1},
      {title: "shrek", id: 2},
      {title: "jumanji", id: 3}]
    const movies = moviesArray.map((movie, index) => (
      <MovieCard key={index} movie={movie} routeToMovieShow={this.routeToMovieShow} />
    ))

    return (
      <div>
        {movies}
      </div>
    )
  }
}

export default HomePage;
