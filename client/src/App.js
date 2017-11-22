import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';
import { fetchMovies } from './actions/index'
import NavBar from './components/NavBar';
import HomePage from './containers/HomePage';
import MovieShowPage from './containers/MovieShowPage';

class App extends Component {

  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route exact path={'/movies/:movieId'} component={MovieShowPage} />
          </Switch>
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
