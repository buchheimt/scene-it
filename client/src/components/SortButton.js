import React from 'react';
import { Button } from 'react-bootstrap';

const SortButton = props => (
  <Button
    bsSize={"sm"} onClick={() => props.updateSort(props.sortType)} bsStyle={props.sortMethod === props.sortType ? "primary" : "default"}
    className="sortButton"
    block
  >
    {props.sortType[0].toUpperCase() + props.sortType.slice(1)}
  </Button>
)

export default SortButton;
