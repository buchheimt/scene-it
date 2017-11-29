import React from 'react';
import { Button } from 'react-bootstrap';

const Preferences = props => {

  // {() => props.updateSort("thing")}

  return (
    <div className="preferencesCard text-center">
      <h5>Sort By:</h5>
      <Button bsSize={"sm"}>Popular</Button><br/>
      <Button bsSize={"sm"}>Recent</Button><br/>
      <Button bsSize={"sm"}>Controversial</Button><br/>
      <Button bsSize={"sm"}>Unpopular</Button>
    </div>
  )
}

export default Preferences
