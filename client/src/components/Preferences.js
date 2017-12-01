import React from 'react';
import { Button } from 'react-bootstrap';
import SortButton from './SortButton';

const Preferences = props => {

  const renderSortButtons = props.sortTypes.map((sortType, index) => (
    <SortButton
      key={index}
      sortMethod={props.sortMethod}
      updateSort={props.updateSort}
      sortType={sortType}
    />
  ))

  return (
    <div className="text-center">
      <h5>Sort By:</h5>
      {renderSortButtons}
    </div>
  )
}

export default Preferences
