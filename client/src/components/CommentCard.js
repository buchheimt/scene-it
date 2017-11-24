import React from 'react';
import { Button } from 'react-bootstrap';

const CommentCard = props => {
  return (
    <div className="commentCard" >
      <p>{props.comment.content}</p>
      <Button />
    </div>
  )
}

export default CommentCard;
