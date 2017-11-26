import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';
import { logoutUser } from '../actions/index';
import LoginForm from './LoginForm';

const NavBar = props => {

  let renderSession;
  if (props.loggedIn) {
    renderSession = (
      <div>
        <span>{props.username}</span>
        <Button onClick={props.logoutUser}>Sign Out</Button>
      </div>
    )
  } else {
    renderSession = (
      <LoginForm />
    )
  }

  return (
    <header className="App-header">
      <a className="App-title" href="/">Scene It</a>
      {renderSession}
    </header>
  )
}

const mapStateToProps = state => {
  return {
    loggedIn: state.session.loggedIn,
    username: state.session.username
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    logoutUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
