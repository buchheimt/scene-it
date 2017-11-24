import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import PostCard from '../components/PostCard';

class MovieShowPage extends React.Component {

  componentWillMount() {

  }

  componentDidMount() {
    this.props.fetchPosts(this.props.movie.id);
  }

  routeToPostShow = post => {
    this.props.history.push(`${post.movie_id}/posts/${post.id}`)
  }

  render() {
    const renderPosts = this.props.posts.map((post, index) => (
      <PostCard
        key={index}
        post={post}
        routeToPostShow={this.routeToPostShow}
      />
    ))

    return (
      <div>
        <div className="movieCard">
          <h3>{this.props.movie.title}</h3>
          <p>{this.props.movie.description}</p>
        </div>
        {renderPosts}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const movie = state.movies.find(movie => movie.id == ownProps.match.params.movieId);

  if (!!movie) {
    return {movie: movie, posts: state.posts.filter(post => post.movie_id === movie.id)}
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
