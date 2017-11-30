import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import './App.css';
import { fetchMovies, updateSort } from './actions/index';
import NavBar from './components/NavBar';
import Preferences from './components/Preferences';
import MyLinks from './components/MyLinks';
import HomePage from './containers/HomePage';
import MovieShowPage from './containers/MovieShowPage';
import PostShowPage from './containers/PostShowPage';
import MoviePointsShowPage from './containers/MoviePointsShowPage';
import PostPointsShowPage from './containers/PostPointsShowPage';
import CommentPointsShowPage from './containers/CommentPointsShowPage';

class App extends Component {

  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <Router>
        <Route path={'/'}>
          <div className="App">
            <NavBar />
            <div className="wrapper">
              <Row>
                <Col sm={9} md={10}>
                  <Switch>
                    <Route exact path={'/'} component={HomePage} />
                    <Route exact path={'/movies/:movieId'} component={MovieShowPage} />
                    <Route exact path={'/movies/:movieId/posts/:postId'} component={PostShowPage} />
                    <Route exact path={'/users/:userId/movie_points'} component={MoviePointsShowPage} />
                    <Route exact path={'/users/:userId/post_points'} component={PostPointsShowPage} />
                    <Route exact path={'/users/:userId/comment_points'} component={CommentPointsShowPage} />
                  </Switch>
                </Col>
                <Col sm={3} md={2}>
                  <div className="sidebar">
                    <Preferences
                      updateSort={this.props.updateSort}
                      sortMethod={this.props.sortMethod}
                    />
                    <MyLinks userId={this.props.userId} />
                  </div>
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
    sortMethod: state.session.sortMethod,
    userId: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchMovies,
    updateSort
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
