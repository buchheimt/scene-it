import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logInUser } from '../actions/index';
import { Row, Col } from 'react-bootstrap';
import MyForm from '../components/MyForm';

class LoginPage extends React.Component {

  handleOnSubmit = values => {
    this.props.logInUser(values);
    this.props.history.push(`/`)
  }

  render() {
    return (
      <Row>
        <Col xs={6} xsOffset={3} >
          <div className="loginCard">
            <h3 className="text-center">Sign In</h3>
            <br/>
            <MyForm
              fields={['email', 'password']}
              onSubmit={this.handleOnSubmit}
              onSubmitText="Sign in"
            />
            </div>
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    logInUser
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginPage);
