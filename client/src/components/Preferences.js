import React from 'react';
import { Button } from 'react-bootstrap';

const Preferences = props => {
  return (
    <div className="preferencesCard text-center">
      <h5>Sort By:</h5>
      <Button bsSize={"sm"} onClick={() => props.updateSort('popular')}>Popular</Button><br/>
      <Button bsSize={"sm"} onClick={() => props.updateSort('recent')}>Recent</Button><br/>
      <Button bsSize={"sm"} onClick={() => props.updateSort('controversial')}>Controversial</Button><br/>
      <Button bsSize={"sm"} onClick={() => props.updateSort('unpopular')}>Unpopular</Button>
    </div>
  )
}

export default Preferences
