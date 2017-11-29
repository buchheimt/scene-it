import React from 'react';
import { Button } from 'react-bootstrap';

const Preferences = props => {
  return (
    <div className="preferencesCard text-center">
      <h5>Sort By:</h5>
      <Button
        bsSize={"sm"} onClick={() => props.updateSort('popular')} bsStyle={props.sortMethod === "popular" ? "primary" : "default"}
      >
        Popular
      </Button><br/>
      <Button
        bsSize={"sm"} onClick={() => props.updateSort('recent')} bsStyle={props.sortMethod === "recent" ? "primary" : "default"}
      >
        Recent
      </Button><br/>
      <Button
        bsSize={"sm"} onClick={() => props.updateSort('controversial')} bsStyle={props.sortMethod === "controversial" ? "primary" : "default"}
      >
        Controversial
      </Button><br/>
      <Button
        bsSize={"sm"} onClick={() => props.updateSort('unpopular')} bsStyle={props.sortMethod === "unpopular" ? "primary" : "default"}
      >
        Unpopular
      </Button><br/>
    </div>
  )
}

export default Preferences
