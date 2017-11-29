import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPoint, subtractPoint, updatePoint } from '../actions/index';
import MovieCard from '../components/MovieCard';

class HomePage extends React.Component {

  routeToMovieShow = id => {
    this.props.history.push(`/movies/${id}`)
  }

  render() {
    let renderMovies;
    if (!!this.props.movies) {
      renderMovies = this.props.movies.map((movie, index) => {
        const moviePoint = movie.movie_points.find(mp => mp.user_id == this.props.session.id);

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
    session: {
      loggedIn: state.session.loggedIn,
      id: state.session.id
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
