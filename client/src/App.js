import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import './App.css';
import { authenticateUser, updateSort, logoutUser } from './actions/index';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import MovieShowPage from './containers/MovieShowPage';
import PostShowPage from './containers/PostShowPage';
import MoviePointsShowPage from './containers/MoviePointsShowPage';
import PostPointsShowPage from './containers/PostPointsShowPage';
import CommentPointsShowPage from './containers/CommentPointsShowPage';

class App extends Component {

  componentWillMount() {
    this.props.authenticateUser();
  }

  render() {
    return (
      <Router>
        <Route path={'/'}>
          <div className="App">
            <NavBar
              session={{
                loggedIn: this.props.session.loggedIn,
                username: this.props.session.username
              }}
              logoutUser={this.props.logoutUser}
            />
            <div className="wrapper">
              <Row>
                <Col sm={9} md={10}>
                  <Switch>
                    <Route exact path={'/'} component={HomePage} />
                    <Route exact path={'/login'} component={LoginPage} />
                    <Route exact path={'/signup'} component={SignupPage} />
                    <Route exact path={'/movies/:movieId'} component={MovieShowPage} />
                    <Route exact path={'/movies/:movieId/posts/:postId'} component={PostShowPage} />
                    <Route exact path={'/users/:userId/movie_points'} component={MoviePointsShowPage} />
                    <Route exact path={'/users/:userId/post_points'} component={PostPointsShowPage} />
                    <Route exact path={'/users/:userId/comment_points'} component={CommentPointsShowPage} />
                  </Switch>
                </Col>
                <Col sm={3} md={2}>
                  <SideBar
                    updateSort={this.props.updateSort}
                    session={{
                      sortMethod: this.props.session.sortMethod,
                      userId: this.props.session.userId,
                      loggedIn: this.props.session.loggedIn
                    }}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Route>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    session: {
      sortMethod: state.session.sortMethod,
      userId: state.session.id,
      loggedIn: state.session.loggedIn,
      username: state.session.username
    }
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    authenticateUser,
    updateSort,
    logoutUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
