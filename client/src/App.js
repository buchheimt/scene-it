import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './containers/HomePage';
import MovieShowPage from './containers/MovieShowPage';

class App extends Component {
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

export default App;
