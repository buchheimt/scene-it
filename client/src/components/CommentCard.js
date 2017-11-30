import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPoint, subtractPoint, updatePoint, removeComment, toggleEdit, updateComment } from '../actions/index';
import customSort from '../actions/sort';
import { Grid, Row, Col, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import Score from './Score';

class CommentCard extends React.Component {
  constructor() {
    super();

    this.state = {
      reply: '',
      edit: ''
    }
  }

  componentDidMount() {
    this.setState({
      edit: this.props.comment.content
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOnReply = () => {
    this.props.toggleActive(this.props.comment.id);
  }

  handleEditClick = () => {
    this.props.toggleEdit(this.props.comment.id);
  }

  handleRemoveClick = () => {
    this.props.removeComment(this.props.comment.id);
  }

  handleReplySubmit = e => {
    e.preventDefault();
    if (this.state.reply !== '') {
      this.props.addComment({
        content: this.state.reply,
        post_id: this.props.comment.post_id,
        parent_id: this.props.comment.id
      });
      this.setState({
        reply: ''
      });
      this.props.toggleActive(this.props.comment.id);
    }
  }

  handleEditSubmit = e => {
    e.preventDefault();
    if (this.state.edit !== '') {
      this.props.updateComment({
        content: this.state.edit,
        id: this.props.comment.id
      });
      this.setState({
        edit: ''
      });
      this.props.toggleEdit(this.props.comment.id);
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
        <form onSubmit={this.handleReplySubmit}>
          <FormGroup>
            <Row>
              <Col xs={9} md={10}>
                <FormControl
                  type="text"
                  name="reply"
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
      renderReply = (<Button bsSize="small" onClick={this.handleOnReply}>Reply</Button>)
    }

    const sortedChildrenComments = customSort[this.props.session.sortMethod](this.props.childrenComments);
    let renderChildrenComments = sortedChildrenComments.map((comment, index) => (
      <ConnectedCommentCard
        key={index}
        toggleActive={this.props.toggleActive}
        addComment={this.props.addComment}
        commentId={comment.id}
      />
    ))

    let renderEditOptions;
    let renderRemoveOption;
    if (this.props.session.belongsToUser) {
      if (this.props.comment.editable) {
        renderEditOptions = (
          <form onSubmit={this.handleEditSubmit}>
            <FormGroup>
              <Row>
                <Col xs={9} md={10}>
                  <FormGroup controlId="formControlsTextarea">
                    <FormControl
                      componentClass="textarea"
                      name="edit"
                      value={this.state.edit}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
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
      }

      renderRemoveOption = (
        <Button bsSize={'small'} onClick={this.handleRemoveClick} >
          Remove
        </Button>
      )
    }

    if (!renderEditOptions) {
      renderEditOptions = (
        <span>
          <p>{this.props.comment.content}</p>
        </span>
      )
    }

    return (
      <div className="commentCard" >
        <Row className="show-grid">
          <Col xs={2} sm={1}>
            {this.props.session.loggedIn ? renderScore : ''}
          </Col>
          <Col xs={10} sm={11}>
            <p>
              {!!this.props.comment.status ? this.props.comment.username : '[removed]'} - <span className="tertiary">{this.props.comment.timestamp}</span>
            </p>
            {renderEditOptions}
            {this.props.session.loggedIn ? renderReply : ''}
            {renderRemoveOption}
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
    comment,
    session: {
      loggedIn: state.session.loggedIn,
      voted: !!userCommentPoint ? userCommentPoint.value : 0,
      pointId: !!userCommentPoint ? userCommentPoint.id : 0,
      belongsToUser: comment.user_id == state.session.id,
      sortMethod: state.session.sortMethod
    },
    childrenComments
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPoint,
    subtractPoint,
    updatePoint,
    removeComment,
    toggleEdit,
    updateComment
  }, dispatch);
}

const ConnectedCommentCard = connect(mapStateToProps, mapDispatchToProps)(CommentCard);

export default ConnectedCommentCard;
