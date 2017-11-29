import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Score from './Score';

const PostCard = props => {

  function handleOnClick() {
    props.routeToPostShow(props.post)
  }

  let renderScore = (
    <Score
      addPoint={props.addPoint}
      subtractPoint={props.subtractPoint}
      updatePoint={props.updatePoint}
      id={props.post.id}
      pointId={props.session.pointId}
      score={{
        net: props.post.net_score,
        percentage: props.post.percentage_score}}
      voted={props.session.voted}
      format='post'
    />
  )

  return (
    <div className="postCard" >
      <Row className="show-grid">
        <Col xs={2} sm={1} >
          {props.loggedIn ? renderScore : ''}
        </Col>
        <Col xs={10} sm={11} >
          <div className="postCardBody" onClick={handleOnClick} >
            <h4>{props.post.title}</h4>
            <p className="secondary">{props.post.content.split(" ").slice(0, 40).join(' ')}...</p>
            <p className="tertiary">{props.post.comment_count} comments</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default PostCard;
