import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMoviePoints } from '../actions/index';

class MoviePointsShowPage extends React.Component {

  componentDidMount() {
    this.props.fetchMoviePoints(this.props.session.id);
  }

  render() {
    let renderMovies;
    if (!!this.props.movies) {
      const sortedMovies = customSort[this.props.session.sortMethod](this.props.movies)
      renderMovies = sortedMovies.map((movie, index) => {
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
        BUT THIS IS JUST MY RATINGS GUYS
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
      id: state.session.id,
      sortMethod: state.session.sortMethod
    }
  }
}
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchMoviePoints
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePointsShowPage);
