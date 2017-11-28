import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPoint, subtractPoint } from '../actions/index';
import MovieCard from '../components/MovieCard';

class HomePage extends React.Component {

  routeToMovieShow = id => {
    this.props.history.push(`/movies/${id}`)
  }

  render() {
    let renderMovies;
    if (!!this.props.movies) {
      renderMovies = this.props.movies.map((movie, index) => (
        <MovieCard
          key={index}
          movie={movie}
          loggedIn={this.props.session.loggedIn}
          addPoint={this.props.addPoint}
          subtractPoint={this.props.subtractPoint}
          routeToMovieShow={this.routeToMovieShow}
        />
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
    movies: state.movies,
    session: {loggedIn: state.session.loggedIn}
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addPoint,
    subtractPoint
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
