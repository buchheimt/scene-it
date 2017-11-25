import React from 'react';
import { connect } from 'react-redux';

const NavBar = props => (
  <header className="App-header">
    <h1 className="App-title">Scene It</h1>
    <p>{props.username}</p>
  </header>
)

const mapStateToProps = state => {
  return {username: state.session.username}
}

export default connect(mapStateToProps, null)(NavBar);
