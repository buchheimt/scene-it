import React from 'react';

const PostCard = props => {
  // function handleOnClick() {
  //   props.routeToMovieShow(props.movie.id)
  // }

  return (
    <div className="postCard" >
      <p>{props.post.content.split(" ").slice(0, 40).join(' ')}...</p>
    </div>
  )
}

export default PostCard;
