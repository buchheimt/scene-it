import React from 'react';
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
        {renderReply}
      </div>
    )
  }
}

export default CommentCard;
