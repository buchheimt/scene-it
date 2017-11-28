import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPoint, subtractPoint, updatePoint } from '../actions/index';
import { Grid, Row, Col, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import Score from './Score';

class CommentCard extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    }
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  }

  handleOnClick = () => {
    this.props.toggleActive(this.props.comment.id);
  }

  handleOnSubmit = e => {
    e.preventDefault();
    if (this.state.value !== '') {
      this.props.addComment({
        content: this.state.value,
        post_id: this.props.comment.post_id,
        parent_id: this.props.comment.id
      });
      this.setState({
        value: ''
      });
      this.props.toggleActive(this.props.comment.id);
    }
  }

  render() {
    let renderReply;
    let renderScore = (
      <Score
        addPoint={this.props.addPoint}
        subtractPoint={this.props.subtractPoint}
        updatePoint={this.props.updatePoint}
        id={this.props.comment.id}
        pointId={this.props.session.pointId}
        score={{
          net: this.props.comment.net_score,
          percentage: this.props.comment.percentage_score}}
        voted={this.props.session.voted}
        format='comment'
      />
    )
    if (!!this.props.comment.active) {
      renderReply = (
        <form onSubmit={this.handleOnSubmit}>
          <FormGroup>
            <Row>
              <Col xs={9} md={10}>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Reply"
                  onChange={this.handleChange}
                />
              </Col>
              <Col xs={3} md={2}>
                <Button bsSize="small" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </FormGroup>
        </form>
      )
    } else {
      renderReply = (<Button bsSize="small" onClick={this.handleOnClick}>Reply</Button>)
    }

    let renderChildrenComments = this.props.childrenComments.map((comment, index) => (
      <ConnectedCommentCard
        key={index}
        toggleActive={this.props.toggleActive}
        addComment={this.props.addComment}
        commentId={comment.id}
      />
    ))

    return (
      <div className="commentCard" >
        <Row className="show-grid">
          <Col xs={2} sm={1}>
            {this.props.session.loggedIn ? renderScore : ''}
          </Col>
          <Col xs={10} sm={11}>
            <p>{this.props.comment.username} - <span className="tertiary">{this.props.comment.timestamp}</span></p>
            <p>{this.props.comment.content}</p>
            {this.props.session.loggedIn ? renderReply : ''}
          </Col>
        </Row>
        <Row>
          <Col sm={11} smOffset={1}>
            {!!this.props.childrenComments ? renderChildrenComments : ''}
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const comment = state.comments.find(comment => comment.id == ownProps.commentId);
  const post = state.posts.find(post => post.id == comment.post_id);
  const user = !!post.users ? post.users.find(user => user.id == comment.user_id) : {};
  const childrenComments = state.comments.filter(comment => comment.parent_id == ownProps.commentId)
  let userCommentPoint;
  if (!!post.comment_points) {
    userCommentPoint = post.comment_points.find(cp => cp.user_id == state.session.id && cp.comment_id == comment.id)
  }

  return {
    comment: {...comment, username: user.username },
    session: {
      loggedIn: state.session.loggedIn,
      voted: !!userCommentPoint ? userCommentPoint.value : 0,
      pointId: !!userCommentPoint ? userCommentPoint.id : 0
    },
    childrenComments
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPoint,
    subtractPoint,
    updatePoint
  }, dispatch);
}

const ConnectedCommentCard = connect(mapStateToProps, mapDispatchToProps)(CommentCard);

export default ConnectedCommentCard;
