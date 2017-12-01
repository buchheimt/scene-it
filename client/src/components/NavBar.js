import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import { logoutUser } from '../actions/index';
import LoginForm from './LoginForm';
import FAFilm from 'react-icons/lib/fa/film';
import FAUser from 'react-icons/lib/fa/user';

const NavBar = props => {

  let renderSession;
  if (props.loggedIn) {
    renderSession = (
      <Row>
        <Col xs={3} xsOffset={6}>
          <FAUser
            className='userIcon'
            color={"#DDD"}
            size={15}
          />
          <span className="nav-username">{props.username}</span>
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
              <span className="App-title">Scene It</span>
              <FAFilm
                className='filmIcon'
                color={"#DDD"}
                size={18}
              />
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
