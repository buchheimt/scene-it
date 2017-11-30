import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPoint, subtractPoint, updatePoint } from '../actions/index';
import customSort from '../actions/sort';
import MovieCard from '../components/MovieCard';

class HomePage extends React.Component {

  routeToMovieShow = id => {
    this.props.history.push(`/movies/${id}`)
  }

  render() {
    let renderMovies;
    if (!!this.props.movies) {
      const sortedMovies = customSort[this.props.session.sortMethod](this.props.movies)
      renderMovies = sortedMovies.map((movie, index) => {
        const moviePoint = this.props.moviePoints.find(mp => mp.user_id == this.props.session.id && mp.movie_id == movie.id);

        return (
          <MovieCard
            key={index}
            movie={movie}
            loggedIn={this.props.session.loggedIn}
            addPoint={this.props.addPoint}
            subtractPoint={this.props.subtractPoint}
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
        {renderMovies}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    moviePoints: state.moviePoints,
    session: {
      loggedIn: state.session.loggedIn,
      id: state.session.id,
      sortMethod: state.session.sortMethod
    }
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addPoint,
    subtractPoint,
    updatePoint
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
