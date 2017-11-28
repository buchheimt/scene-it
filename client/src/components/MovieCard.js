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
      id={props.movie.id}
      score={props.movie.score}
      format='movie'
    />
  )

  return (
    <div className="movieCard" >
      <Row className="show-grid">
        <Col xs={3} md={1}>
          {props.loggedIn ? renderScore : ''}
        </Col>
        <Col xs={9} md={11} >
          <div onClick={handleOnClick} >
            <h4>{props.movie.title} ({props.movie.release_year})</h4>
            <p>{props.movie.description.split(" ").slice(0, 40).join(' ')}...</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default MovieCard;
