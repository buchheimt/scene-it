import React from 'react';

const CommentCard = props => {
  return (
    <div className="commentCard" >
      <p>{props.comment.content}</p>
    </div>
  )
}

export default CommentCard;
