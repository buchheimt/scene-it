import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

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
        <p>{this.props.comment.content}</p>
        {this.props.loggedIn ? renderReply : ''}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comment: state.comments.find(comment => comment.id == ownProps.commentId),
    loggedIn: state.session.loggedIn
  }
}

export default connect(mapStateToProps, null)(CommentCard);
