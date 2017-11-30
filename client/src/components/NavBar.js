import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import { logoutUser } from '../actions/index';
import LoginForm from './LoginForm';

const NavBar = props => {

  let renderSession;
  if (props.loggedIn) {
    renderSession = (
      <Row>
        <Col xs={3} xsOffset={6}>
          <p className="nav-username">{props.username}</p>
        </Col>
        <Col xs={3}>
          <Button bsSize="small" onClick={props.logoutUser}>Sign Out</Button>
        </Col>
      </Row>
    )
  } else {
    renderSession = (
      <LoginForm />
    )
  }

  return (
    <header className="App-header">
      <Grid>
        <Row className="show-grid">
          <Col xs={4} md={3}>
            <NavLink to="/" >
              <p className="App-title">Scene It</p>
            </NavLink>
          </Col>
          <Col xs={8} md={9}>
            {renderSession}
          </Col>
        </Row>
      </Grid>
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
