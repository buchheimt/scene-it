import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMoviePoints, createPoint, updatePoint } from '../actions/index';
import customSort from '../lib/sort';
import MovieCard from '../components/MovieCard';

class MoviePointsPage extends React.Component {

  componentDidMount() {
    this.props.fetchMoviePoints(this.props.match.params.userId);
  }

  routeToMovieShow = id => {
    this.props.history.push(`/movies/${id}`)
  }

  render() {
    let renderMovies;
    if (!!this.props.movies) {
      const sortedMovies = customSort[this.props.session.sortMethod](this.props.movies)
      renderMovies = sortedMovies.map((movie, index) => {
        const moviePoint = this.props.moviePoints.find(mp => mp.movie_id === movie.id);
        return (
          <MovieCard
            key={index}
            movie={movie}
            loggedIn={this.props.session.loggedIn}
            createPoint={this.props.createPoint}
            updatePoint={this.props.updatePoint}
            session={{
              pointId: !!moviePoint ? moviePoint.id : 0,
              voted: !!moviePoint ? moviePoint.value : 0
            }}
            routeToMovieShow={this.routeToMovieShow}
          />
        )
      })
    } else {
      renderMovies = '';
    }

    return (
      <div>
        <h3 className="text-center">My Rated Movies:</h3>
        {renderMovies}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.filter(movie => !!state.moviePoints.find(mp => mp.user_id === state.session.id && mp.movie_id === movie.id)),
    moviePoints: state.moviePoints.filter(mp => mp.user_id === state.session.id),
    session: {
      loggedIn: state.session.loggedIn,
      id: state.session.id,
      sortMethod: state.session.sortMethod
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createPoint,
    updatePoint,
    fetchMoviePoints
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePointsPage);
