import React from 'react';
import Score from './Score';
import { Row, Col } from 'react-bootstrap';

const MovieCard = props => {

  function handleOnClick() {
    props.routeToMovieShow(props.movie.id)
  }

  let renderScore = (
    <Score
      addPoint={props.addPoint}
      subtractPoint={props.subtractPoint}
      updatePoint={props.updatePoint}
      id={props.movie.id}
      pointId={props.session.pointId}
      score={{
        net: props.movie.net_score,
        percentage: props.movie.percentage_score}}
      voted={props.session.voted}
      loggedIn={props.loggedIn}
      format='movie'
    />
  )

  return (
    <div className="movieCard" >
      <Row className="show-grid">
        <Col xs={2} sm={1}>
          {renderScore}
        </Col>
        <Col xs={10} sm={11} >
          <div onClick={handleOnClick} >
            <h4>{props.movie.title} ({props.movie.release_year})</h4>
            <p className="secondary">{props.movie.description.split(" ").slice(0, 40).join(' ')}...</p>
            <p className="tertiary">{props.movie.post_count} posts ({props.movie.comment_count} comments)</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default MovieCard;
