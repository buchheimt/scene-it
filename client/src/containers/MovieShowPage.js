import React from 'react';
import { connect } from 'react-redux';

class MovieShowPage extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.movie.title}</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const movie = state.movies.find(movie => movie.id === ownProps.match.params.movieId);

  if (!!movie) {
    return {movie}
  } else {
    return {}
  }
}

export default connect(mapStateToProps, null)(MovieShowPage);
