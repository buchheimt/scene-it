import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovie, createPost, createPoint, updatePoint } from '../actions/index';
import { Row, Col, Button } from 'react-bootstrap';
import FABackArrow from 'react-icons/lib/fa/arrow-left';
import customSort from '../actions/sort';
import PostCard from '../components/PostCard';
import MyForm from '../components/MyForm';
import Score from '../components/Score';

class MovieShowPage extends React.Component {

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.movieId);
  }

  routeToPostShow = post => {
    this.props.history.push(`${post.movie_id}/posts/${post.id}`)
  }

  routeBackToMovies = () => {
    this.props.history.push(`/`)
  }

  render() {
    const sortedPosts = customSort[this.props.session.sortMethod](this.props.posts);
    const renderPosts = sortedPosts.map((post, index) => {
      const postPoint = this.props.postPoints.find(pp => pp.user_id == this.props.session.id && pp.post_id == post.id);

      return (
        <PostCard
          key={index}
          post={post}
          loggedIn={this.props.session.loggedIn}
          createPoint={this.props.createPoint}
          updatePoint={this.props.updatePoint}
          session={{
            pointId: !!postPoint ? postPoint.id : 0,
            voted: !!postPoint ? postPoint.value : 0
          }}
          routeToPostShow={this.routeToPostShow}
        />
      )
    })

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
        <br/>
        <Button bsSize="small" onClick={this.routeBackToMovies} >
          <FABackArrow
            className='commentIcon'
            color={'#555'}
            size={14}
          />
        </Button>
        <Row>
          <Col xs={1} >
            <br/><br/>
            <Score
              createPoint={this.props.createPoint}
              updatePoint={this.props.updatePoint}
              id={this.props.movie.id}
              pointId={this.props.session.pointId}
              score={{
                net: this.props.movie.net_score,
                percentage: this.props.movie.percentage_score}}
              voted={this.props.session.voted}
              loggedIn={this.props.session.loggedIn}
              format='movie'
            />
          </Col>
          <Col xs={11} >
            <div className="text-center">
              <h3>{this.props.movie.title} ({this.props.movie.release_year})</h3>
              <p>{this.props.movie.description}</p>
              {this.props.session.loggedIn ? renderPostForm : ''}
            </div>
          </Col>
        </Row>

        <h5 className="text-center">{this.props.movie.post_count} posts ({this.props.movie.comment_count} comments)</h5>
        {renderPosts}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const movie = state.movies.find(movie => movie.id == ownProps.match.params.movieId);

  if (!!movie) {
    const moviePoint = state.moviePoints.find(mp => mp.user_id == state.session.id && mp.movie_id == movie.id);

    return {
      movie: movie,
      postPoints: state.postPoints,
      posts: state.posts.filter(post => post.movie_id == movie.id),
      session: {
        pointId: !!moviePoint ? moviePoint.id : 0,
        voted: !!moviePoint ? moviePoint.value : 0,
        loggedIn: state.session.loggedIn,
        id: state.session.id,
        sortMethod: state.session.sortMethod
      }
    }
  } else {
    return {movie: {}, posts: [], session: {
      loggedIn: state.session.loggedIn,
      sortMethod: state.session.sortMethod
    }}
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchMovie,
    createPost,
    createPoint,
    updatePoint,
    customSort
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieShowPage);
