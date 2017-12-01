import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Score from './Score';

const PostCard = props => {

  function handleOnClick() {
    props.routeToPostShow(props.post)
  }

  let renderScore = (
    <Score
      createPoint={props.createPoint}
      updatePoint={props.updatePoint}
      id={props.post.id}
      pointId={props.session.pointId}
      score={{
        net: props.post.net_score,
        percentage: props.post.percentage_score}}
      voted={props.session.voted}
      loggedIn={props.loggedIn}
      format='post'
    />
  )

  return (
    <div onClick={handleOnClick} className="postCard" >
      <Row className="show-grid">
        <Col xs={2} sm={1} >
          {renderScore}
        </Col>
        <Col xs={10} sm={11} >
          <div className="postCardBody">
            <h4>
              <span className="title">{props.post.title}</span>
              <span className="secondary">{props.post.username}</span>
              <span className="tertiary"> | {props.post.timestamp}</span>
            </h4>
            <p className="secondary">{props.post.content.split(" ").slice(0, 40).join(' ')}...</p>
            <p className="tertiary">{props.post.comment_count} comments</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default PostCard;
