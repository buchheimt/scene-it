import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signupUser } from '../actions/index';
import { Row, Col } from 'react-bootstrap';
import MyForm from '../components/MyForm';

class SignupPage extends React.Component {

  handleOnSubmit = values => {
    this.props.signupUser(values);
    this.props.history.push(`/`)
  }

  render() {
    return (
      <Row>
        <Col xs={6} xsOffset={3} >
          <div className="loginCard">
            <h3 className="text-center">Sign Upn</h3>
            <br/>
            <MyForm
              fields={['username', 'email', 'password']}
              onSubmit={this.handleOnSubmit}
              onSubmitText="Sign up"
            />
            </div>
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    signupUser
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignupPage);
