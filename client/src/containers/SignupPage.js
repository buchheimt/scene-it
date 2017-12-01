import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signupUser } from '../actions/index';
import { Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';

class SignupPage extends React.Component {

  constructor() {
    super();

    this.state = {
      credentials: {
        username: '',
        email: '',
        password: ''
      }
    }
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.signupUser(this.state.credentials);
    this.props.history.push(`/`)
  }

  handleChange = e => {
    const credentials = this.state.credentials;
    credentials[e.target.name] = e.target.value;
    this.setState ({credentials})
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <FormGroup>
          <br/>
          <br/>
          <Row>
            <Col xs={6} xsOffset={3} >
              <div className="loginCard">
                <h3 className="text-center">Sign Up</h3>
                <br/>
                <FormControl
                  bsSize="small"
                  type="text"
                  name="username"
                  value={this.state.credentials.username}
                  placeholder="Username"
                  onChange={this.handleChange}
                /><br/>
                <FormControl
                  bsSize="small"
                  type="text"
                  name="email"
                  value={this.state.credentials.email}
                  placeholder="Email"
                  onChange={this.handleChange}
                /><br/>
                <FormControl
                  bsSize="small"
                  type="password"
                  name="password"
                  value={this.state.credentials.password}
                  placeholder="Password"
                  onChange={this.handleChange}
                /><br/>
                <Button bsSize="small" type="submit" className="center-button" block>
                  Sign Up
                </Button>
              </div>
            </Col>
          </Row>
        </FormGroup>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    signupUser
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignupPage);
