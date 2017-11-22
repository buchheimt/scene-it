import React from 'react';
import { connect } from 'react-redux';

class MovieShowPage extends React.Component {

  render() {
    return (
      <div>
        <div className="movieCard">
          <h4>{this.props.movie.title}</h4>
          <p>{this.props.movie.description}</p>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const movie = state.movies.find(movie => movie.id == ownProps.match.params.movieId);

  if (!!movie) {
    return {movie: movie}
  } else {
    return {}
  }
}

export default connect(mapStateToProps, null)(MovieShowPage);
