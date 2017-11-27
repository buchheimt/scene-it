import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';
import { fetchMovies } from './actions/index'
import NavBar from './components/NavBar';
import HomePage from './containers/HomePage';
import MovieShowPage from './containers/MovieShowPage';
import PostShowPage from './containers/PostShowPage';

class App extends Component {

  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="wrapper">
            <Switch>
              <Route exact path={'/'} component={HomePage} />
              <Route exact path={'/movies/:movieId'} component={MovieShowPage} />
              <Route exact path={'/movies/:movieId/posts/:postId'} component={PostShowPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchMovies
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(App);
