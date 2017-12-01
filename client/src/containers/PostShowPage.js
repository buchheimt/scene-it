import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost, createPoint, updatePoint, toggleActive, createComment } from '../actions/index';
import { Row, Col, Button } from 'react-bootstrap';
import FABackArrow from 'react-icons/lib/fa/arrow-left';
import customSort from '../lib/sort';
import MyForm from '../components/MyForm';
import ConnectedCommentCard from '../components/CommentCard';
import Score from '../components/Score';

class PostShowPage extends React.Component {

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  routeBackToMovie = () => {
    this.props.history.push(`/movies/${this.props.match.params.movieId}`)
  }

  render() {
    const sortedComments = customSort[this.props.session.sortMethod](this.props.comments);
    const renderComments = sortedComments.map((comment, index) => (
      <Row key={index}>
        <Col xs={11} xsOffset={1} >
          <ConnectedCommentCard
            toggleActive={this.props.toggleActive}
            createComment={this.props.createComment}
            commentId={comment.id}
            renderChildren={true}
            depth={1}
          />
        </Col>
      </Row>
    ))

    const renderRootForm = (
      <Row>
        <Col xs={8} xsOffset={2} >
        <MyForm
          fields={['content']}
          onSubmit={this.props.createComment}
          onSubmitText="Reply"
          hiddenValues={{post_id: this.props.post.id}}
        />
        <h5 className="text-center">{this.props.post.comment_count} comments</h5>
        </Col>
      </Row>

    )
    return (
      <div>
        <br/>
        <Button bsSize="small" onClick={this.routeBackToMovie} >
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
              id={this.props.post.id}
              pointId={this.props.session.pointId}
              score={{
                net: this.props.post.net_score,
                percentage: this.props.post.percentage_score}}
              voted={this.props.session.voted}
              loggedIn={this.props.session.loggedIn}
              format='post'
            />
          </Col>
          <Col xs={11} >
            <div className="text-center">
              <h3>{this.props.post.title}</h3>
              <p>
                <span>{this.props.post.username}</span>
                <span className="secondary"> | {this.props.post.timestamp}</span>
              </p>
              <p>{this.props.post.content}</p><br/>
              { this.props.session.loggedIn ? renderRootForm :  ''}
            </div>
          </Col>
        </Row>
        {renderComments}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const post = state.posts.find(post => post.id == ownProps.match.params.postId);

  if (!!post) {
    const postPoint = state.postPoints.find(pp => pp.user_id == state.session.id && pp.post_id == post.id);

    return {
      post: post,
      comments: state.comments.filter(comment => comment.post_id == post.id && !comment.parent_id),
      session: {
        pointId: !!postPoint ? postPoint.id : 0,
        voted: !!postPoint ? postPoint.value : 0,
        loggedIn: state.session.loggedIn,
        sortMethod: state.session.sortMethod
      }
    }
  } else {
    return {post: {}, comments: [], session: {
      loggedIn: state.session.loggedIn,
      sortMethod: state.session.sortMethod
    }}
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchPost,
    createPoint,
    updatePoint,
    toggleActive,
    createComment
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShowPage);
