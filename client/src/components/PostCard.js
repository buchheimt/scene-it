import React from 'react';

const PostCard = props => {
  function handleOnClick() {
    props.routeToPostShow(props.post)
  }

  return (
    <div className="postCard" onClick={handleOnClick} >
      <h4>{props.post.title}</h4>
      <p>{props.post.content.split(" ").slice(0, 40).join(' ')}...</p>
    </div>
  )
}

export default PostCard;
