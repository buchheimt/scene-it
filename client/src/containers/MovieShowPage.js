import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovie, createPost, addPoint, subtractPoint, updatePoint } from '../actions/index';
import PostCard from '../components/PostCard';
import MyForm from '../components/MyForm';

class MovieShowPage extends React.Component {

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.movieId);
  }

  routeToPostShow = post => {
    this.props.history.push(`${post.movie_id}/posts/${post.id}`)
  }

  render() {
    const renderPosts = this.props.posts.map((post, index) => (
      <PostCard
        key={index}
        post={post}
        loggedIn={this.props.session.loggedIn}
        addPoint={this.props.addPoint}
        subtractPoint={this.props.subtractPoint}
        updatePoint={this.props.updatePoint}

        routeToPostShow={this.routeToPostShow}
      />
    ))

    // session={{
    //   pointId: ,
    //   voted:
    // }}

    const renderPostForm = (
      <MyForm
        fields={['title', 'content']}
        onSubmit={this.props.createPost}
        onSubmitText="Create Post"
        hiddenValues={{movie_id: this.props.movie.id}}
      />
    )

    return (
      <div>
        <div className="movieCard">
          <h3>{this.props.movie.title} ({this.props.movie.release_year})</h3>
          <p>{this.props.movie.description}</p>
          {this.props.session.loggedIn ? renderPostForm : ''}
        </div>
        <h5 className="text-center">{this.props.movie.post_count} posts ({this.props.movie.comment_count} comments)</h5>
        {renderPosts}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const movie = state.movies.find(movie => movie.id == ownProps.match.params.movieId);

  if (!!movie) {
    return {movie: movie, posts: state.posts.filter(post => post.movie_id == movie.id), session: {loggedIn: state.session.loggedIn}}
  } else {
    return {movie: {}, posts: [], session: {loggedIn: state.session.loggedIn}}
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchMovie,
    createPost,
    addPoint,
    subtractPoint,
    updatePoint
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieShowPage);
