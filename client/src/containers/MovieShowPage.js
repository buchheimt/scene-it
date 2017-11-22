import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index'

class MovieShowPage extends React.Component {

  componentDidMount() {
    this.props.fetchPosts(this.props.movie.id);
  }

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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchPosts
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieShowPage);
