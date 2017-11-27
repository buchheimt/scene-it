import React from 'react';
import { Grid, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logInUser } from '../actions/index';

class LoginForm extends React.Component {

  constructor() {
    super();

    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    }
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.logInUser(this.state.credentials);
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
            <Row>
              <Col xs={5}>
                <FormControl
                  type="text"
                  name="email"
                  value={this.state.credentials.email}
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </Col>
              <Col xs={5}>
                <FormControl
                  type="password"
                  name="password"
                  value={this.state.credentials.password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </Col>
              <Col xs={2}>
                <Button type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
        </FormGroup>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    logInUser
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);
