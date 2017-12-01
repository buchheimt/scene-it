import React from 'react';
import Preferences from './Preferences';
import UserLink from './UserLink';

const SideBar = props => {

  const renderUserLinks = ["post", "comment"].map((format, index) => (
    <UserLink
      key={index}
      format={format}
      userId={props.session.userId}
      extension={'s'}
    />
  ));

  const renderUserPointLinks = ["movie", "post", "comment"].map((format, index) => (
    <UserLink
      key={index}
      format={format}
      userId={props.session.userId}
      extension={'_points'}
    />
  ));

  const renderLinks = (
    <div className="text-center">
      <hr/>
      <h5>My:</h5>
      {renderUserLinks}
      <hr/>
      <h5>My Rated:</h5>
      {renderUserPointLinks}
    </div>
  );

  return (
    <div className="sidebar">
      <Preferences
        updateSort={props.updateSort}
        sortMethod={props.session.sortMethod}
        sortTypes={["recent", "popular", "controversial", "unpopular"]}
      />
      {props.session.loggedIn ? renderLinks : ''}
    </div>
  )
}

export default SideBar;
