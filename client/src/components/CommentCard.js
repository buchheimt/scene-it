import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPoint, subtractPoint } from '../actions/index';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
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
    this.props.addComment({
      content: this.state.value,
      post_id: this.props.comment.post_id
    });
    this.setState({
      value: ''
    });
    this.props.toggleActive(this.props.comment.id);
  }

  render() {
    let renderReply;
    if (!!this.props.comment.active) {
      renderReply = (
        <form onSubmit={this.handleOnSubmit}>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Reply"
              onChange={this.handleChange}
            />
            <Button type="submit">
              Submit
            </Button>
          </FormGroup>
        </form>
      )
    } else {
      renderReply = (<Button onClick={this.handleOnClick}>Reply</Button>)
    }

    return (
      <div className="commentCard" >
        <button className="vote" onClick={e => this.props.addPoint(this.props.comment.id)}>
          <FAPlus className='plusIcon' color='#9D9' size={20} />
        </button>
        <button className="vote" onClick={e => this.props.subtractPoint(this.props.comment.id)} >
          <FAMinus className='minusIcon' color='#D99' size={20} />
        </button>
        <p>{this.props.comment.username} - {this.props.comment.score}</p>
        <p>{this.props.comment.content}</p>
        {this.props.loggedIn ? renderReply : ''}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const comment = state.comments.find(comment => comment.id == ownProps.commentId);
  const post = state.posts.find(post => post.id == comment.post_id);
  const user = !!post.users ? post.users.find(user => user.id == comment.user_id) : {};
  return {
    comment: {...comment, username: user.username },
    loggedIn: state.session.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPoint,
    subtractPoint
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentCard);
