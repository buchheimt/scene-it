import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import FAFilm from 'react-icons/lib/fa/film';
import FAUser from 'react-icons/lib/fa/user';

const NavBar = props => {

  let renderSession;
  if (props.session.loggedIn) {
    renderSession = (
      <Row>
        <Col xs={5} xsOffset={4}>
          <FAUser
            className='userIcon'
            color={"#DDD"}
            size={15}
          />
          <span className="nav-username">{props.session.username}</span>
        </Col>
        <Col xs={3}>
          <Button bsSize="small" onClick={props.logoutUser}>Sign Out</Button>
        </Col>
      </Row>
    )
  } else {
    renderSession = (
      <div>
        <Col xs={3} xsOffset={6}>
          <NavLink to="/login" className="navbar-link">
            <span>Login</span>
          </NavLink>
        </Col>
        <Col xs={3}>
          <NavLink to="/signup" className="navbar-link">
            <span>Signup</span>
          </NavLink>
        </Col>
      </div>
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
          <Col xs={4} md={5} xsOffset={4}>
            {renderSession}
          </Col>
        </Row>
      </Grid>
    </header>
  )
}

export default NavBar;
