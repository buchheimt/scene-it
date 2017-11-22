import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard';

class HomePage extends React.Component {

  routeToMovieShow = id => {
    this.props.history.push(`movies/${id}`)
  }

  render() {
    const movies = this.props.movies.map((movie, index) => (
      <MovieCard key={index} movie={movie} routeToMovieShow={this.routeToMovieShow} />
    ))

    return (
      <div>
        {movies}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, null)(HomePage);
