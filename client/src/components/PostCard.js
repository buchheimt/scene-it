import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Score from './Score';

const PostCard = props => {
  const handleOnClick = e => {
    console.log('nn', e.target.nodeName)
    if (e.target.nodeName !== 'BUTTON' && e.target.nodeName !== 'svg') {
      props.routeToPostShow(props.post)
    }
  }

  let renderScore = (
    <Score
      addPoint={props.addPoint}
      subtractPoint={props.subtractPoint}
      id={props.post.id}
      score={props.post.score}
      format='post'
    />
  )

  return (
    <div className="postCard" >
      <Row className="show-grid">
        <Col xs={3} md={1}>
          {props.loggedIn ? renderScore : ''}
        </Col>
        <Col xs={9} md={11} >
          <div className="postCardBody" onClick={handleOnClick} >
            <h4>{props.post.title}</h4>
            <p>{props.post.content.split(" ").slice(0, 40).join(' ')}...</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default PostCard;
