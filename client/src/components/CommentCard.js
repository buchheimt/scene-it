import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPoint, subtractPoint } from '../actions/index';
import { Grid, Row, Col, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import FAPlus from 'react-icons/lib/fa/plus';
import FAMinus from 'react-icons/lib/fa/minus';

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
    console.log("comment doc!!!!", this.props.comment)
    console.log('childs!!!', this.props.childrenComments)
    console.log('!!all props', this.props)
    let renderReply;
    let renderVoteOptions = (
      <div>
        <button className="vote" onClick={e => this.props.addPoint(this.props.comment.id)}>
          <FAPlus className='plusIcon' color='#9D9' size={15} />
        </button><br />
        <p className="mt-3">{this.props.comment.score}</p>
        <button className="vote" onClick={e => this.props.subtractPoint(this.props.comment.id)} >
          <FAMinus className='minusIcon' color='#D99' size={15} />
        </button>
      </div>
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
          <Col xs={3} md={1}>
            {this.props.loggedIn ? renderVoteOptions : ''}
          </Col>
          <Col xs={9} md={11}>
            <p>{this.props.comment.username}</p>
            <p>{this.props.comment.content}</p>
            {this.props.loggedIn ? renderReply : ''}
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
  return {
    comment: {...comment, username: user.username },
    loggedIn: state.session.loggedIn,
    childrenComments
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPoint,
    subtractPoint
  }, dispatch);
}

const ConnectedCommentCard = connect(mapStateToProps, mapDispatchToProps)(CommentCard);

export default ConnectedCommentCard;
