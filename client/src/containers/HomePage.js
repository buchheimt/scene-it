import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard';

class HomePage extends React.Component {

  routeToMovieShow = id => {
    this.props.history.push(`movies/${id}`)
  }

  render() {
    let renderMovies
    if (!!this.props.movies) {
      renderMovies = this.props.movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} routeToMovieShow={this.routeToMovieShow} />
      ))
    } else {
      renderMovies = '';
    }


    return (
      <div>
        {renderMovies}
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
